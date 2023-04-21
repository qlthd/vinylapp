import { TextInput, PasswordInput, Tooltip, Center, Text, Button } from '@mantine/core';
import { NextPage } from "next";
import { MasterNavBar } from './MasterNavBar';



const Welcome: NextPage = () => {


      return (
        <>
          <MasterNavBar>
            <div className='mx-auto my-auto'>
              <Text
                  className='font-extrabold text-transparent text-3xl md:text-6xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'
              >
              Welcome !
              </Text>
            </div>
          </MasterNavBar>
        </>
      );
  };
  
export default Welcome;