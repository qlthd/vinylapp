import { TextInput, PasswordInput, Tooltip, Center, Text, Button } from '@mantine/core';
import { NextPage } from "next";
import { BiInfoCircle } from "react-icons/bi";
import { useInputState } from '@mantine/hooks';

const Login: NextPage = () => {
  const [value, setValue] = useInputState('');

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
                classNames={{
                }}
                label="Email"
                placeholder="example@gmail.com"
              />
              <PasswordInput
                value={value}
                onChange={setValue}
                placeholder="Your password"
                label="Mot de passe"
              />
            </div>
            <div className='inline-flex space-x-2 !mt-8'>
              <Button className=''>
                Se connecter
              </Button>
              <Button className=''>
                Inscription
              </Button>
            </div>
          </div>
        </div>   
      );
  };
  
export default Login;