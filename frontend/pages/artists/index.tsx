import { get, post, remove } from '@/services/services';
import { Button, Card } from '@mantine/core';
import { Avatar } from '@mantine/core';
import Link from 'next/link';
import { useState } from 'react';
import { MdDelete } from "react-icons/md"
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';
import { MasterNavBar } from '../MasterNavBar';
export default function Artists(props){
    const queryClient = useQueryClient();
    const [data, setData] = useState<any>([]);

    const { mutate, isLoading } = useMutation(( id : number) => remove(`artist/${id}`), {
        onSuccess: (res : any) => {
            queryClient.invalidateQueries('artists');
            toast("Artist removed successfully !", { type: 'success'});
        },
        onError: () => {
        },
        onSettled: () => {
            
        }
    });

    useQuery(
        ['artists',{}],
        () => get(`artist`).then(data => data),
        {
            onSuccess: (res : any) => {
                console.log(res.data);
                const data = res.data;
                setData(data);
            }
        });

      return (
        <MasterNavBar>
            <div className='m-2'>
                <h1>Artists</h1>
                <Link href="/artists/new">
                    <Button
                        leftIcon="+"
                        variant="outline"
                    >Ajouter un artiste</Button>
                </Link>
            
                <div className='grid grid-cols-3'>
                    {data && data.map(p =>
                        <Card className='m-2'>
                            <Avatar 
                                size="xl"
                                radius="xl"
                                className="mx-auto"
                                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80" 
                            />
                            <h4 className="text-white">
                                {p.name}
                            </h4>
                            <Button onClick={()=> mutate(p._id)}>
                                <MdDelete />
                            </Button>
                        </Card>
                    )}
                </div>
            </div>
        </MasterNavBar>
      );
  };
  



