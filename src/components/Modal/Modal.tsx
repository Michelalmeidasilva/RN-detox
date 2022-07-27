import React, { FC } from 'react';
import { Modal, TouchableWithoutFeedback, ModalBaseProps } from 'react-native';
import styled from 'styled-components/native';

import { ColumnProps, Column } from '../Column';

interface ModalComponentProps extends ColumnProps {
  open: boolean;
  handleClose?(): void;
  animationType?: ModalBaseProps['animationType'];
}

const ModalComponent: FC<ModalComponentProps> = ({
  open,
  children,
  handleClose,
  animationType = 'fade',
  ...props
}) => (
  <Modal animationType={animationType} transparent visible={open}>
    <TouchableWithoutFeedback style={{ flex: 1 }} onPress={handleClose}>
      <Container>
        <TouchableWithoutFeedback>
          <Column
            width='100%'
            alignItems='center'
            borderRadius={8}
            p={30}
            backgroundColor='white'
            {...props}
          >
            {children}
          </Column>
        </TouchableWithoutFeedback>
      </Container>
    </TouchableWithoutFeedback>
  </Modal>
);

const Container = styled(Column)`
  align-items: center;
  justify-content: center;
  background: black;
  flex: 1;
  padding: 0px 20px;
  background: rgba(1, 1, 1, 0.4);
`;

export default ModalComponent;
