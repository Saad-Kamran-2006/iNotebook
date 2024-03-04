import React, { useContext, useEffect, useRef, useState } from "react";
import noteContext from "../context/notes/noteContext";
import NoteItem from "./NoteItem";
import AddNote from "./AddNote";
import { useHistory } from "react-router-use-history";
// import getAllNote from "../context/notes/NoteState";

const Notes = (props) => {
  try {
    const context = useContext(noteContext);
    // eslint-disable-next-line
    let history = useHistory();
    const { editNote, notes, getAllNote } = context;
    // eslint-disable-next-line
    useEffect(() => {
      if (localStorage.getItem("token")) {
        getAllNote();
      } else {
        history.push("/login");
      }
      // eslint-disable-next-line
    }, []);
    const updateNote = (currNote) => {
      ref.current.click();
      setNote({
        id: currNote._id,
        eTitle: currNote.title,
        eDescription: currNote.description,
        eTag: currNote.tag,
      });
    };
    // eslint-disable-next-line
    const ref = useRef(null);
    // eslint-disable-next-line
    const refCancel = useRef(null);
    // eslint-disable-next-line
    const [note, setNote] = useState({
      id: "",
      eTitle: "",
      eDescription: "",
      eTag: "",
    });
    const handleClick = (evt) => {
      evt.preventDefault();
      editNote(note.id, note.eTitle, note.eDescription, note.eTag);
      refCancel.current.click();
      props.showAlert("Updated Successfully", "success");
    };
    const onChange = (evt) => {
      setNote({
        ...note,
        [evt.target.name]: evt.target.value,
      });
    };
    return (
      <>
        <AddNote showAlert={props.showAlert} />

        <button
          ref={ref}
          type="button"
          className="btn btn-primary d-none"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        ></button>
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Edit Note
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <form className="my-3">
                  <div className="mb-3">
                    <label htmlFor="eTitle" className="form-label">
                      Title
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="eTitle"
                      name="eTitle"
                      aria-describedby="emailHelp"
                      value={note.eTitle}
                      onChange={onChange}
                      minLength={4}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="eDescription" className="form-label">
                      Description
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="eDescription"
                      name="eDescription"
                      value={note.eDescription}
                      onChange={onChange}
                      minLength={8}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="eTag" className="form-label">
                      Tag
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="eTag"
                      name="eTag"
                      value={note.eTag}
                      onChange={onChange}
                    />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                  ref={refCancel}
                >
                  Cancel
                </button>
                <button
                  disabled={
                    note.eTitle.length < 4 || note.eDescription.length < 8
                  }
                  type="button"
                  className="btn btn-primary"
                  onClick={handleClick}
                >
                  Update Note
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row my-3">
          <h2>Your Notes</h2>
          <div className="container mx-2">
            {notes.length === 0 && "No Notes to display"}
          </div>
          {notes.map((note) => {
            return (
              <NoteItem
                key={note._id}
                note={note}
                updateNote={updateNote}
                showAlert={props.showAlert}
              />
            );
          })}
        </div>
      </>
    );
  } catch (err) {
    console.log("Notes-Err:", err.message);
  }
};

export default Notes;
