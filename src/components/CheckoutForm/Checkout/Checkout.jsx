import React, { useState } from "react";
import {
  Box,
  Typography,
  Paper,
  Stepper,
  StepLabel,
  Step,
} from "@mui/material";
import PaymentForm from '../PaymentForm';
import AddressForm from '../AddressForm';

const steps = ["Shipping address", "Payment details"];

const Checkout = () => {
  const [activeStep, setActiveStep] = useState(0);

  // Determine which form to render based on the step we currenmtly in
  const Form = () => (activeStep === 0 ? <AddressForm /> : <PaymentForm />);

  const Confirmation = () => (
    <div>
      Confirmation
    </div>
  )

  return (
    <>
      <Box />
      <main>
        <Paper>
          <Typography variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper activeStep={activeStep}>
            {steps.map((step) => (
              <Step key={step}>
                <StepLabel>{step}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? <Confirmation/> : <Form/>}
        </Paper>
      </main>
    </>
  );
};

export default Checkout;
