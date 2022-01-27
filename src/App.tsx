import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Note } from './models/note.model';
import Header from './components/Header/Header';

function App() {
  const [notes, setNotes] = useState<Note[]>([{
    id: (new Date).toString(),
    title: "meetings",
    text: "hello to the teams",
    color: "#fff",
    date:(new Date).toString()
    }])

  return (
    <>
      <div className="App">
        <Header/>
    </div>
    </>
  );
}

export default App;
