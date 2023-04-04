import '@/styles/globals.css'
import { MantineProvider } from '@mantine/core'
import type { AppProps } from 'next/app'
import { QueryClientProvider, QueryClient } from "react-query";
import { SessionProvider } from "next-auth/react"
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
const queryClient = new QueryClient();

export default function App({ Component, pageProps, session }: AppProps) {
  return( 
    <SessionProvider session={session}>
      <QueryClientProvider client={queryClient}>
        <MantineProvider
          withCSSVariables
          withGlobalStyles
          withNormalizeCSS
          theme={{
            fontFamily: "Hanken Grotesk, regular",
            colorScheme: 'dark',
          }}>
          <Component {...pageProps} />
          <ToastContainer />
        </MantineProvider>
      </QueryClientProvider>
    </SessionProvider>
  )
}