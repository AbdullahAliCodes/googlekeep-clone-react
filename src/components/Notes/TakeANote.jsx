import React from "react";
import "./TakeANote.css";

const TakeANote = () => {
  return (
    <div className="note">
      <div className="inactive-note">
        <form action="">
          <input
            type="text"
            placeholder="Take a note..."
            className="form-input"
          />
        </form>
        <div className="form-actions">
          <span className="material-symbols-outlined icon">check_box</span>
          <span className="material-symbols-outlined icon">brush</span>
          <span className="material-symbols-outlined icon">image</span>
        </div>
      </div>
      <div className="active-note">
        <div className="active-form-inputs">
          <form action="">
            <input
              type="text"
              placeholder="Title"
              className="form-input input-title"
            />
            <input type="text" placeholder="Text" className="form-input" />
          </form>
        </div>
        <div className="active-form-actions">
          <div className="active-from-icons">
            {" "}
            <span className="material-symbols-outlined icon">add_alert</span>
            <span className="material-symbols-outlined icon">person_add</span>
            <span className="material-symbols-outlined icon">palette</span>
            <span className="material-symbols-outlined icon">image</span>
            <span className="material-symbols-outlined icon">archive</span>
            <span className="material-symbols-outlined icon">more_vert</span>
            <span className="material-symbols-outlined icon">undo</span>
            <span className="material-symbols-outlined icon">redo</span>
          </div>
          <div className="active-from-close">
            <button className="close-btn">close</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TakeANote;
