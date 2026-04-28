import React from "react";
import TakeANote from "../Notes/TakeANote";
import Note from "../Notes/Note";

import "./Main.css";

const Main = (props) => {
  const { notes, isModalOpen, isActiveForm, setIsActiveForm } = props;

  return (
    <div className="main-section">
      <section className="take-a-note">
        <TakeANote
          addNote={props.addNote}
          isModalOpen={isModalOpen}
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
              editNote={props.editNote}
              isModalOpen={isModalOpen}
            />
          );
        })}
      </section>
    </div>
  );
};

export default Main;
