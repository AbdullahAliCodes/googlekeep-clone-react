import { useState, react } from "react";
import { uid } from "uid";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Main from "./components/Main/Main";
import Modal from "./components/Modal/Modal";

import "./App.css";

function App() {
  const [notes, setNotes] = useState([
    { id: uid(), title: "First Note", text: "First Note Text" },
    { id: uid(), title: "Second Note", text: "Second Note Text" },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [isActiveForm, setIsActiveForm] = useState(false);

  const addNote = (note) => {
    setNotes((prevNotes) => {
      return [...prevNotes, note];
    });
  };

  const editNote = (note) => {
    console.log("Note clicked", note.id);
  };

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Sidebar />
        <Main
          notes={notes}
          addNote={addNote}
          editNote={editNote}
          isModalOpen={isModalOpen}
          isActiveForm={isActiveForm}
          setIsActiveForm={setIsActiveForm}
        />
        <Modal
          isModalOpen={isModalOpen}
          isActiveForm={isActiveForm}
          setIsActiveForm={setIsActiveForm}
        />
      </main>
    </>
  );
}

export default App;
