import React from 'react';
import {
  Modal,
  Container,
} from '@material-ui/core';
import PropTypes from 'prop-types';

import useStyles from './styles';

const ApplicationModal = ({ visible, onCloseModal }) => {
  const classes = useStyles();

  return (
    <Modal open={visible} onClose={onCloseModal}>
      <Container maxWidth="md" className={classes.modalContainer}>
        <div>
          <h1>Formulaŕio de Adoção</h1>
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
