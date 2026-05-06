import React from "react";

import "./Note.css";

const Note = (props) => {
  const { note, setSelectedNote, setIsModalOpen, setIsActiveForm } = props;

  const selectedNoteHandler = () => {
    setSelectedNote(note);
    setIsModalOpen(true);
    setIsActiveForm(true);
    console.log("SELECTED: ", note);
  };

  return (
    <div className="note-card" onClick={selectedNoteHandler}>
      <div className="note-card-header">
        <div className="note-card-title">{note.title}</div>
        <div className="note-card-text">{note.text}</div>
      </div>
      <div className="note-card-footer">FOOTER</div>
    </div>
  );
};

export default Note;
