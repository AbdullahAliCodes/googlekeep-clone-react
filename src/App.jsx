import { useState, react } from "react";
import { uid } from "uid";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Main from "./components/Main/Main";
import Modal from "./components/Modal/Modal";

import "./App.css";

function App() {
  const [selectedNote, setSelectedNote] = useState({});
  const [isActiveForm, setIsActiveForm] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [notes, setNotes] = useState([
    { id: uid(), title: "First Note", text: "First Note Text" },
    { id: uid(), title: "Second Note", text: "Second Note Text" },
  ]);

  const addNote = (note) => {
    setNotes((prevNotes) => {
      return [...prevNotes, note];
    });
  };

  const toggleModal = () => {
    setIsActiveForm((prevState) => !prevState);
    setIsModalOpen((prevState) => !prevState);
  };

  const editNote = (note) => {};

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
          setSelectedNote={setSelectedNote}
          isActiveForm={isActiveForm}
          setIsActiveForm={setIsActiveForm}
          setIsModalOpen={setIsModalOpen}
        />
        <Modal
          editNote={editNote}
          selectedNote={selectedNote}
          isModalOpen={isModalOpen}
        />
      </main>
    </>
  );
}

export default App;
