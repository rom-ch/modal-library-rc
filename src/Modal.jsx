import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import { Dialog, Heading, DialogContent, CloseIcon } from "./Modal.styled";
import { FiAlertTriangle, FiXCircle, FiInfo, FiX } from "react-icons/fi";
import { IoCheckmarkCircleOutline } from "react-icons/io5";

function Modal({ type, title, children, isOpen, onClose }) {
  const dialogRef = useRef();

  useEffect(() => {
    if (isOpen) {
      dialogRef.current?.showModal();
    } else {
      dialogRef.current?.close();
    }
  }, [isOpen]);

  const showIcon = () => {
    switch (type) {
      case "success":
        return <IoCheckmarkCircleOutline />;
      case "danger":
        return <FiXCircle />;
      case "warning":
        return <FiAlertTriangle />;
      case "info":
        return <FiInfo />;
    }
  };

  return createPortal(
    <Dialog type={type} onCancel={onClose} ref={dialogRef}>
      <CloseIcon onClick={onClose}>
        <FiX />
      </CloseIcon>
      {showIcon()}
      <Heading>{title}</Heading>
      <DialogContent>{children}</DialogContent>
    </Dialog>,
    document.getElementById("modal")
  );
}

Modal.propTypes = {
  type: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.node,
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
};

export default Modal;
