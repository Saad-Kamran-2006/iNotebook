import React from "react";
import Notes from "./Notes";

const Home = (props) => {
  const { showAlert } = props;
  return (
    <div style={{marginTop: 56}}>
      <Notes showAlert={showAlert} />
    </div>
  );
};

export default Home;
