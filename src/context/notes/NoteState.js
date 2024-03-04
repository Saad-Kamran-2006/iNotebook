import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const initialNotes = [];
  const [notes, setNotes] = useState(initialNotes);

  //? Add Note
  const addNote = async (title, description, tag) => {
    try {
      //? TODO: API CALL
      const response = await fetch(`${host}/api/notes/addnote`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem('token'),
        },
        body: JSON.stringify({ title, description, tag }),
      });
      // eslint-disable-next-line
      const json = await response.json();

      //? Logic to add note in client
      const note = {
        _id: "65e2ecdc3f4ef16c71d66f0d9",
        user: "65e209b143a3a691354643e5",
        title: title,
        description: description,
        tag: tag,
        date: "2024-03-02T09:09:48.563Z",
        __v: 0,
      };
      setNotes(notes.concat(note));
    } catch (err) {
      console.log("Add-Note err:", err.message);
    }
  };
  //? Get All Note
  const getAllNote = async () => {
    try {
      //? TODO: API CALL
      const response = await fetch(`${host}/api/notes/fetchnotes`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem('token'),
        },
      });
      const json = await response.json();
      //? Logic to get all notes note in client
      setNotes(json);
    } catch (err) {
      console.log("Get-All-Note err:", err.message);
    }
  };

  //? Edit Note
  const editNote = async (id, title, description, tag) => {
    try {
      //? TODO: API CALL
      const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem('token'),
        },
        body: JSON.stringify({ title, description, tag }),
      });
      // eslint-disable-next-line
      const json = await response.json();

      //? Logic to edit note in client
      for (let i = 0; i < notes.length; i++) {
        const element = notes[i];
        if (element._id === id) {
          notes[i].title = title;
          notes[i].description = description;
          notes[i].tag = tag;
          break;
        }
      }
      setNotes(notes);
    } catch (err) {
      console.log("Edit-Note err:", err.message);
    }
  };

  //? Delete Note
  const delNote = async (id) => {
    try {
      //? TODO: API CALL
      const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem('token'),
        },
        body: JSON.stringify({ id }),
      });
      // eslint-disable-next-line
      const json = await response.json();

      //? Logic to delete note in client
      const newNotes = notes.filter((note) => {
        return note._id !== id;
      });
      setNotes(newNotes);
    } catch (err) {
      console.log("Delete-Note err:", err.message);
    }
  };

  return (
    <NoteContext.Provider
      value={{ notes, setNotes, addNote, getAllNote, editNote, delNote }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
