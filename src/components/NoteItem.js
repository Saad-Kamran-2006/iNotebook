import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";

const NoteItem = (props) => {
  try {
    const context = useContext(noteContext);
    const { delNote } = context;
    const { note, updateNote } = props;
    const editHandle = () => {
      updateNote(note);
    };
    const delHandle = () => {
      delNote(note._id);
      props.showAlert("Deleted Successfully", "success");
    };
    return (
      <div className="col-md-4">
        <div className="card  my-3">
          <div className="card-body">
            <div className="d-flex justify-content-between">
              <div>
                <h5 className="card-title">{note.title}</h5>
              </div>
              <div>
                <i
                  className="fa-regular fa-pen-to-square mx-1"
                  onClick={editHandle}
                ></i>
                <i className="fa-solid fa-trash mx-1" onClick={delHandle}></i>
              </div>
            </div>
            <p className="card-text">{note.description}</p>
          </div>
        </div>
      </div>
    );
  } catch (err) {
    console.log("NoteItems-Err:", err.message);
  }
};

export default NoteItem;
