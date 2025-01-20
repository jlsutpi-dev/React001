import React, { useState } from "react";

const MyForm = () => {
  const [formdata, SetFormdata] = useState({
    userName: "",
    email: "",
    password: "",
  });

  //handle change

  const handleChange = (e) => {
    console.log("Event_Target", e.target);
    const { name, value } = e.target;
    SetFormdata({
      ...formdata,
      [name]: value,
    });
  };

  //handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      `UserName ${formdata.userName}, email: ${formdata.email}, password: ${formdata.password}`
    );
    alert(
      `UserName ${formdata.userName}, email: ${formdata.email}, password: ${formdata.password}`
    );
    //   `Form Submitted  ${formdata.userName}, ${formdata.email}, ${formdata.password}`
    //   "hi"
  };
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>Hello World!</h1>
      </div>
      <div style={{ margin: "0 300px" }}>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Username :</label>
            <input
              type="text"
              name="userName"
              onChange={handleChange}
              value={formdata.userName}
            />
          </div>
          <div>
            <label>Email :</label>
            <input
              type="email"
              name="email"
              value={formdata.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Password :</label>
            <input
              type="password"
              name="password"
              value={formdata.password}
              onChange={handleChange}
            />
          </div>
          <button onSubmit={handleSubmit}>click</button>
        </form>
      </div>
      <hr />
    </div>
  );
};

export default MyForm;
