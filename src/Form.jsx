import React, { useState } from "react";

const Form = () => {
  const [value, setValue] = useState();
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleSubmit = (e) => {
    alert("A name was Submitted   " + value);
    e.preventDefault();
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>Welcome form Form</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="">Name:</label>
          <input type="text" onChange={handleChange} />
          <button onSubmit={handleSubmit}> click</button>
        </form>
      </div>
    </div>
  );
};

export default Form;
