import React from "react";

const Welcome = (props) => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>Welcome from {props.name}</h1>
      </div>
      <div style={{ margin: "0 300px" }}>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde rem
          eos, beatae maiores officiis aut eveniet fugiat impedit saepe harum
          dolorem inventore, numquam tempore? Maxime explicabo, voluptatibus
          dolorem hic iste perferendis laboriosam quaerat. Soluta laboriosam
          ratione architecto optio molestias officiis?
        </p>
      </div>
      <hr></hr>
    </div>
  );
};

export default Welcome;
