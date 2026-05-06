import React, { useState } from "react";
import TakeANote from "../Notes/TakeANote";

import "./Modal.css";
import Note from "../Notes/Note";

const Modal = (props) => {
  const { editNote, isModalOpen } = props;

  const closeModalHandler = () => {};

  return (
    <>
      {isModalOpen && (
        <div className="modal-container">
          <div className="modal-content">
            <TakeANote editNote={editNote} isModalOpen={isModalOpen} />
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
