import React from "react";
import TakeANote from "../Notes/TakeANote";
import Note from "../Notes/Note";

import "./Main.css";

const Main = (props) => {
  const { notes } = props;

  return (
    <div className="main-section">
      <section className="take-a-note">
        <TakeANote addNote={props.addNote} />
      </section>
      <section className="notes-grid">
        {notes.map((note) => {
          // console.log(note);
          return <Note key={note.id} note={note} />;
        })}
      </section>
    </div>
  );
};

export default Main;
