import { useState, react } from "react";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Main from "./components/Main/Main";

import "./App.css";

function App() {
  const [notes, setNotes] = useState([
    { id: 1, title: "First Note", text: "First Note Text" },
    { id: 2, title: "Second Note", text: "Second Note Text" },
  ]);

  const addNote = (note) => {
    setNotes((prevNotes) => {
      return [...prevNotes, note];
    });
  };

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Sidebar />
        <Main notes={notes} addNote={addNote} />
      </main>
    </>
  );
}

export default App;
