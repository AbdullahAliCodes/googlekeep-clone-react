import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Main from "./components/Main/Main";

import "./App.css";

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="main-area">
        <Sidebar />
        <Main />
      </main>
    </>
  );
}

export default App;
