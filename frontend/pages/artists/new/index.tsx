import { Button, Card, Select, TextInput } from '@mantine/core';
import { Avatar } from '@mantine/core';
import Link from 'next/link';
import countries from "i18n-iso-countries"
import enLocale from "i18n-iso-countries/langs/en.json"
import { useMutation } from 'react-query';
import { post } from '@/services/services';
import { Field, Formik } from 'formik';
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';

export interface Artist {
  name: string;
  country: string;
}

export default function New(props){

  countries.registerLocale(enLocale);
  const countryObj = countries.getNames("en", {select: "official"});
  
  const { mutate, isLoading } = useMutation(( data : Artist) => post('artist', data), {
    onSuccess: (res : any) => {
      toast("Artist added !", { type: 'success'});
    },
    onError: () => {
    },
    onSettled: () => {

    }
    });

  const InscriptionSchema = Yup.object().shape({
      name: Yup.string().required("Name is required"),
      country: Yup.string().required("Country is required")
    });
    

      return (
        <div className='m-2'>
            <h1>Add an artist</h1>
            <Formik onSubmit={async (values) => { mutate(values); }} validationSchema={InscriptionSchema}
                initialValues={{
                  name : "",
                  country : ""
                }}
            >{props => {
              const { setFieldValue, submitForm } = props;
              return (
                <div>
                  <TextInput label="Name" onChange={(e)=> setFieldValue("name", e.target.value)}/>
                  <Select 
                    label="Country" 
                    data={Object.entries(countryObj).map(([key, value]) => { return { label : value, value : key}})}
                    onChange={(val)=> setFieldValue("country", val)}
                  />
                  <Button onClick={()=> submitForm()}>Submit</Button>
                </div>
              )
            }}
            </Formik>
        </div>
      );
  };
  


