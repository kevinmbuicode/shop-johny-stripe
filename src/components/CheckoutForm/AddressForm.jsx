import React from 'react';
import { Typography, Grid } from '@mui/material';
import { useForm, FormProvider } from 'react-hook-form';
import FormInput from './CustomFieldText';

const AddressForm = () => {
    const methods = useForm();
    
    return (
      <>
        <Typography variant="h6" gutterBottom>Shipping Address</Typography>
        <FormProvider {...methods}>
            <form onSubmit=''>
                <Grid container spacing={3}>
                  <FormInput required name='firstName' label="First name"/>
                </Grid>
            </form>
        </FormProvider>
      </>
    );
  };
  
export default AddressForm;