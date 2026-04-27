import React from "react";

import "./Note.css";

const Note = (props) => {
  const { note } = props;

  return (
    <div className="note-card">
      <div className="note-card-header">
        <div className="note-card-title">{note.title}</div>
        <div className="note-card-text">{note.text}</div>
      </div>
      <div className="note-card-footer">FOOTER</div>
    </div>
  );
};

export default Note;
