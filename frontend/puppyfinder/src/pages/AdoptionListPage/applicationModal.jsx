import React from 'react';
import {
  Modal,
  Container,
  Typography,
} from '@material-ui/core';
import PropTypes from 'prop-types';

import useStyles from './styles';

const ApplicationModal = ({ visible, onCloseModal }) => {
  const classes = useStyles();

  return (
    <Modal open={visible} onClose={onCloseModal}>
      <Container maxWidth="md" className={classes.modalContainer}>
        <div>
          <Typography>Formulaŕio de Adoção</Typography>
        </div>
      </Container>
    </Modal>
  );
};

ApplicationModal.propTypes = {
  visible: PropTypes.bool,
  onCloseModal: PropTypes.func,
};

ApplicationModal.defaultProps = {
  visible: false,
  onCloseModal: () => {},
};

export default ApplicationModal;
