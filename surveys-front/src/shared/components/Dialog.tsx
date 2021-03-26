import React from "react";
import { Modal, Button } from "react-bootstrap";

interface IProps {
  open: boolean;
  handleOk: () => void;
  handleClose: () => void;
  title: string;
  isSaveDisabled: boolean;
  children: React.ReactNode;
}

export const Dialog = ({
  open,
  handleClose,
  handleOk,
  children,
  isSaveDisabled,
}: IProps) => {
  return (
    <Modal show={open} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleOk} disabled={isSaveDisabled}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
