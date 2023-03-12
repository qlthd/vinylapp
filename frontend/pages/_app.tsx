import '@/styles/globals.css'
import { MantineProvider } from '@mantine/core'
import type { AppProps } from 'next/app'
import { QueryClientProvider, QueryClient } from "react-query";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return( 
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
      </MantineProvider>
    </QueryClientProvider>
  )
}