import { TextInput, PasswordInput, Tooltip, Center, Text, Button } from '@mantine/core';
import { NextPage } from "next";
import { BiArrowBack } from "react-icons/bi";
import { useInputState } from '@mantine/hooks';
import { useMutation } from "react-query";
import { post } from "../services/services";
import Link from 'next/link';

export type SignUpRequest = {
    fullname: string;
    email: string;
    password: string;
}


const SignUp: NextPage = () => {
    const [fullname, setFullname] = useInputState('');
    const [email, setEmail] = useInputState('');
    const [password, setPassword] = useInputState('');
    const [passwordConfirmation, setpasswordConfirmation] = useInputState('');

    const { mutate, isLoading } = useMutation(( data : SignUpRequest) => post('user/signin', data), {
    onSuccess: (res : any) => {
        let message = "";
        if(res.data.status == 401) message = "Email ou mot de passe incorrect.";
        else message = "Connexion réussie."
        alert(message)
    },
    onError: () => {
        alert("Erreur lors de la tentative de connexion.")
    },
    onSettled: () => {
        // queryClient.invalidateQueries('create')
    }
    });

    return (
        <div className="flex flex-col justify-center items-center space-y-4 mt-8">
            <Text
                className='font-extrabold text-transparent text-3xl md:text-6xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'
            >
                Sign up
            </Text>
            <div className='w-1/5'>
                <Link href="/login" className="inline-flex no-underline space-x-1 text-white">
                    <BiArrowBack className='m-auto'/>
                    <p>Back</p>
                </Link>
                <div className=''>
                    <div className='space-y-4'>
                        <TextInput
                            value={fullname}
                            onChange={setFullname}
                            label="Fullname"
                            placeholder="eg. Henri Dupont"
                        />
                        <TextInput
                        value={email}
                        onChange={setEmail}
                        label="Email"
                        placeholder="eg. example@gmail.com"
                        />
                        <PasswordInput
                        value={password}
                        onChange={setPassword}
                        placeholder="Password"
                        label="Password"
                        />
                        <PasswordInput
                        value={passwordConfirmation}
                        onChange={setpasswordConfirmation}
                        placeholder="Confirm your password"
                        label="Confirm your password"
                        />
                    </div>
                    <div className='inline-flex space-x-2 !mt-8'>
                        <Button variant="gradient" onClick={() => mutate({ fullname, email, password} as SignUpRequest)}>
                           Sign up
                        </Button>
                    </div>
                </div>
            </div>
        </div>   
      );
};
  
export default SignUp;