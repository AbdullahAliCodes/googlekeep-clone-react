import { React, useState } from "react";
import TakeANote from "../Notes/TakeANote";

import "./Modal.css";

if (isModalOpen) {
  setIsActiveForm(true);
}

const Modal = (props) => {
  const { isModalOpen, setIsActiveForm } = props;

  return (
    <div>
      {isModalOpen && (
        <div className="modal-container">
          <div className="modal-content">
            <TakeANote />
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
