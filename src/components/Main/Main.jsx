import React from "react";
import TakeANote from "../Notes/TakeANote";
import Note from "../Notes/Note";

import "./Main.css";

const Main = (props) => {
  const {
    notes,
    setSelectedNote,
    isActiveForm,
    setIsActiveForm,
    setIsModalOpen,
  } = props;

  return (
    <div className="main-section">
      <section className="take-a-note">
        <TakeANote
          addNote={props.addNote}
          isActiveForm={isActiveForm}
          setIsActiveForm={setIsActiveForm}
        />
      </section>
      <section className="notes-grid">
        {notes.map((note) => {
          return (
            <Note
              key={note.id}
              note={note}
              setSelectedNote={setSelectedNote}
              setIsModalOpen={setIsModalOpen}
              setIsActiveForm={setIsActiveForm}
            />
          );
        })}
      </section>
    </div>
  );
};

export default Main;
