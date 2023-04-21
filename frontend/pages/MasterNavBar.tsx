import { AppShell, Header, Navbar } from '@mantine/core';
import Image from 'next/image'
import vinyl from '../public/vinyl.svg'
import artist from '../public/dj.svg'
import record from '../public/record.svg'
import Link from 'next/link';

export const MasterNavBar = ({children}) => {
  return (
    <AppShell
    padding="md"
    navbar={<Navbar width={{ base: 200 }} height={500} p="xs" className='space-y-6'>
      <Link href="/artists">
        <div className='inline-flex text-white space-x-4 ml-2 mt-4'>
          <Image src={artist} alt='dj logo' width={30} height={30} className=''/>
          <p className="my-auto text-center">Artists</p>
        </div>
      </Link>
      <div className='inline-flex text-white space-x-4 ml-2'>
        <Image src={record} alt='record logo' width={30} height={30} className=''/>
        <p className="my-auto text-center">Records</p>
      </div>
    </Navbar>}
    header={<Header height={80} >
      <Link href="/welcome" className='inline-flex no-underline mx-auto'>
        <Image src={vinyl} alt='vinyl logo' width={50} height={50} className='m-2'/>
        <p className="mx-2 text-white my-auto">Vinyl App</p>
      </Link>
      </Header>}
    styles={(theme) => ({
      main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
    })}
  >
    {children}
  </AppShell>
  );
}