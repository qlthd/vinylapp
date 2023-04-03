import { Button, Card, Select, TextInput } from '@mantine/core';
import { Avatar } from '@mantine/core';
import Link from 'next/link';
import countries from "i18n-iso-countries"
import enLocale from "i18n-iso-countries/langs/en.json"
export default function New(props){

  countries.registerLocale(enLocale);
  const countryObj = countries.getNames("en", {select: "official"});

      return (
        <div className='m-2'>
            <h1>Add an artist</h1>
            <TextInput label="Name"/>
            <Select label="Country" data={Object.entries(countryObj).map(([key, value]) => { return { label : value, value : key}})}/>
        </div>
      );
  };
  


