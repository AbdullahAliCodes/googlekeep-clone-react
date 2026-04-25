import React from "react";
import "./Note.css";

const Note = () => {
  return (
    <div className="note">
      <div className="inactive-note">
        <form action="">
          <input type="text" placeholder="Take a note..." />
        </form>
        <div className="form-actions">
          <span className="material-symbols-outlined icon">check_box</span>
          <span className="material-symbols-outlined icon">brush</span>
          <span className="material-symbols-outlined icon">image</span>
        </div>
      </div>
      <div className="active-note"></div>
    </div>
  );
};

export default Note;
