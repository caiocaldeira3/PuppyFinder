import React, { useState } from 'react';
import {
  CssBaseline,
  Paper,
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
} from '@material-ui/core';

import MenuBar from '../../layout/MenuBar';

import Api from '../../modules/api';

import About from './About';
import Details from './Details';

import useStyles from './styles';

const steps = ['Sobre', 'Detalhes'];

const ApplicationForm = () => {
  const classes = useStyles();

  const [registerForm, setRegisterForm] = useState({});
  const [activeStep, setActiveStep] = useState(0);

  function getStepContent(step) {
    switch (step) {
      case 0:
        return <About form={registerForm} setForm={setRegisterForm} />;
      case 1:
        return <Details form={registerForm} setForm={setRegisterForm} />;
      default:
        throw new Error('Unknown step');
    }
  }

  const saveAnimal = async () => {
    await Api.registerAnimal(registerForm);
  };

  const handleNext = () => {
    if (activeStep === steps.length - 1) {
      console.log(registerForm);
      saveAnimal();
    } else {
      setActiveStep(activeStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <>
      <CssBaseline />
      <MenuBar pageName="Adicionar Pet" />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            Adicionar Pet
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <>
            {activeStep === steps.length ? (
              <>
                <Typography variant="h5" gutterBottom>
                  Pet cadastrado
                </Typography>
                <Typography variant="subtitle1">
                  Seu pet foi adicionado com sucesso.
                </Typography>
              </>
            ) : (
              <>
                {getStepContent(activeStep)}
                <div className={classes.buttons}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} className={classes.button}>
                      Voltar
                    </Button>
                  )}
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? 'Cadastrar' : 'Próximo'}
                  </Button>
                </div>
              </>
            )}
          </>
        </Paper>
      </main>
    </>
  );
};

export default ApplicationForm;
