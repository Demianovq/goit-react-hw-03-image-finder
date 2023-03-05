import { createPortal } from 'react-dom';
import { Overlay, ModalImg } from './Modal.styled';

export const Modal = ({ image }) => {
  return createPortal(
    <Overlay className="overlay">
      <ModalImg src={image} alt="" />
    </Overlay>
  );
};
