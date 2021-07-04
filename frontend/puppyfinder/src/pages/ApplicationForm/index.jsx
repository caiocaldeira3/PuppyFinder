import React, { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
// import DescriptionIcon from '@material-ui/icons/Description';
import { useHistory } from 'react-router-dom';
import About from './About';
import Reason from './Reason';

import useStyles from './styles';

import ManuBar from '../../layout/MenuBar';

const steps = ['Sobre você', 'Detalhes'];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <About />;
    case 1:
      return <Reason />;
    default:
      throw new Error('Unknown step');
  }
}

const ApplicationForm = () => {
  const classes = useStyles();
  const history = useHistory();

  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleInitialPage = () => {
    history.push('/adoption-list');
  };

  return (
    <>
      <CssBaseline />
      <ManuBar pageName="Formulário de Aplicação" />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            Formulário de Adoção
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
                  Obrigado pela resposta.
                </Typography>
                <Typography variant="subtitle1">
                  Seu formulário foi enviado com sucesso. Basta aguardar uma resposta por e-mail.
                </Typography>
                <div className={classes.buttons}>
                  <Button
                    variant="contained"
                    onClick={handleInitialPage}
                    className={classes.button}
                  >
                    Retornar Página Inicial
                  </Button>
                </div>
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
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? 'Enviar Aplicação' : 'Próximo'}
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
