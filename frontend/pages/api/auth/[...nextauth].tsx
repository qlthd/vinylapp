import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import { useMutation } from "react-query";
import { post } from "../../../services/services";

export type UserLoginRequest = {
  email: string;
  password: string;
}


export default NextAuth({ 
    secret: process.env.SECRET,
    session: {
        strategy: "jwt",
    },
    providers: [
      CredentialsProvider({
      
        name: 'Email and Password',
        credentials: {
          email: { label: 'Email', type: 'text'},
          password: { label: 'Password', type: 'password' }
        },
        authorize: async (credentials) => {
          
          const payload = {
            email: credentials?.email,
            password: credentials?.password,
          };

          const url = `http://localhost:3002/user/signin`
             
          const res = await post(url, payload);
          
          if(res.data.status == 401) return null;
          return res;
          // let message = "";
          // if(res.data.status == 401) message = "Email ou mot de passe incorrect.";
          // else message = "Connexion réussie."
          // alert(message)
        
      
      }
      }),  
    ],
    pages: {
      signIn: "/login",
      error: "/login",
    }
})
