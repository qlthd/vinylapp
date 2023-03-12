import { TextInput, PasswordInput, Tooltip, Center, Text, Button } from '@mantine/core';
import { NextPage } from "next";
import { BiInfoCircle } from "react-icons/bi";
import { useInputState } from '@mantine/hooks';
import { useMutation } from "react-query";
import { post } from "../services/services";
import Link from 'next/link';

export type UserLoginRequest = {
  email: string;
  password: string;
}


const Login: NextPage = () => {
  const [email, setEmail] = useInputState('');
  const [password, setPassword] = useInputState('');
  
  const { mutate, isLoading } = useMutation(( data : UserLoginRequest) => post('user/signin', data), {
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
             Vinyl App
          </Text>
          <div>
            <div className='space-y-4'>
              <TextInput
                value={email}
                onChange={setEmail}
                label="Email"
                placeholder="example@gmail.com"
              />
              <PasswordInput
                value={password}
                onChange={setPassword}
                placeholder="Your password"
                label="Password"
              />
            </div>
            <div className='inline-flex space-x-2 !mt-8'>
              <Button variant="gradient" onClick={() => mutate({ email, password} as UserLoginRequest)}>
                Sign in
              </Button>
              <Link href="/signup">
                <Button variant="gradient">
                  Sign up
                </Button>
              </Link>
            </div>
          </div>
        </div>   
      );
  };
  
export default Login;