import { useState, React } from "react";
import { uid } from "uid";

import "./TakeANote.css";

const TakeANote = (props) => {
  const { addNote, isModalOpen, isActiveForm, setIsActiveForm } = props;

  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const activeNoteHandler = () => {
    if (!isActiveForm) {
      setIsActiveForm(true);
    }
  };

  const closeActiveNoteHandler = () => {
    const noteToAdd = { id: uid(), title, text };
    addNote(noteToAdd);
    if (isActiveForm) {
      setIsActiveForm(false);
    }
    setTitle("");
    setText("");
  };

  const titleChangeHandler = (event) => setTitle(event.target.value);
  const textChangeHandler = (event) => setText(event.target.value);

  return (
    <div className="take-a-note">
      <div onClick={activeNoteHandler} className="form-container">
        <form className={isActiveForm ? "form-active" : "form-inactive"}>
          {isActiveForm && (
            <input
              type="text"
              placeholder="Title"
              className="form-input input-title"
              value={title}
              onChange={titleChangeHandler}
            />
          )}
          <input
            type="text"
            placeholder="Take a note..."
            className="form-input"
            value={text}
            onChange={textChangeHandler}
          />
          {!isActiveForm ? (
            <div className="form-actions">
              <span className="material-symbols-outlined icon">check_box</span>
              <span className="material-symbols-outlined icon">brush</span>
              <span className="material-symbols-outlined icon">image</span>
            </div>
          ) : (
            <div className="active-note">
              <div className="active-form-actions">
                <div className="active-from-icons">
                  <span className="material-symbols-outlined icon">
                    add_alert
                  </span>
                  <span className="material-symbols-outlined icon">
                    person_add
                  </span>
                  <span className="material-symbols-outlined icon">
                    palette
                  </span>
                  <span className="material-symbols-outlined icon">image</span>
                  <span className="material-symbols-outlined icon">
                    archive
                  </span>
                  <span className="material-symbols-outlined icon">
                    more_vert
                  </span>
                  <span className="material-symbols-outlined icon">undo</span>
                  <span className="material-symbols-outlined icon">redo</span>
                </div>
                <div className="active-from-close">
                  <button
                    className="close-btn"
                    onClick={closeActiveNoteHandler}
                  >
                    close
                  </button>
                </div>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default TakeANote;
