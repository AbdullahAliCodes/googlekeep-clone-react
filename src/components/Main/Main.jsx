import React from "react";
import NotesGrid from "../Notes/NotesGrid";

const Main = () => {
  return (
    <div>
      <section className="take-a-note"></section>
      <section className="notes-grid">
        <NotesGrid />
      </section>
    </div>
  );
};

export default Main;
