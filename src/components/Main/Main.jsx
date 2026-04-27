import React from "react";
import NotesGrid from "../Notes/NotesGrid";
import TakeANote from "../Notes/TakeANote";
import "./Main.css";

const Main = () => {
  return (
    <div className="main-section">
      <section className="take-a-note">
        <TakeANote />
      </section>
      <section className="notes-grid">
        <NotesGrid />
      </section>
    </div>
  );
};

export default Main;
