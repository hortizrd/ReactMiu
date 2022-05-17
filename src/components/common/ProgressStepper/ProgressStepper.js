import React from 'react'
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { Typography } from '@mui/material';

const ProgressStepper = () => {
    const steps= ['Step 1','Step 2'];
    const stepDescroption =['Description 1', 'Description 2']

  return (
    <div>
        <Stepper activeStep={0}>
              {
                  steps.map((step)=>(
                      <Step key={step}>
                           <StepLabel>{step}</StepLabel>
                      </Step>
                  ))
              }
        </Stepper>
        <>
        <Typography>Step description {stepDescroption[1]}</Typography>
        </>
    </div>
  )
}

export default ProgressStepper