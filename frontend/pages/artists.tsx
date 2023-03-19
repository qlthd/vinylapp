import { Card } from '@mantine/core';
import { Avatar } from '@mantine/core';

export default function Artists(props){

      return (
        <div className='m-2'>
            <h1>Artists</h1>
            <div className='grid grid-cols-3'>
                {props.data.map(p =>
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
                    </Card>
                )}
            </div>
        </div>
      );
  };
  
export async function getServerSideProps() {
    const res = await fetch(`${process.env.API_URL}/artist`);
    const data = await res.json();

    return { props: { data : data } }
}


