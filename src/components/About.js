// import "./App.css";
import React from "react";

export default function About() {
  return (
    <div className="container">
      <h1>About Us</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item text-dark bg-light">
          <h2 className="accordion-header">
            <button
              className="accordion-button accordion-btn text-light bg-dark"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <strong>iNotebook</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              iNotebook is your digital notebook
            </div>
          </div>
        </div>
        <div className="accordion-item text-dark bg-light">
          <h2 className="accordion-header">
            <button
              className="accordion-button accordion-btn text-light bg-dark"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <strong>Free to use</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              iNotebook is a free & open source tool that provides you online
              notebook which secured your notes in the cloud.
            </div>
          </div>
        </div>
        <div className="accordion-item text-dark bg-light">
          <h2 className="accordion-header">
            <button
              className="accordion-button accordion-btn text-light bg-dark"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <strong>Browser Compatible</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className={`accordion-body`}>
              iNotebook software works in any web browsers such as{" "}
              <code>Chrome, Firefox, Internet Explorer, Safari, Opera.</code>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
