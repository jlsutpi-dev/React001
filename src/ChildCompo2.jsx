import React from "react";

const ChildCompo2 = ({ handleChange }) => {
  const onHandleChange = (e) => {
    // const { name, value } = e.target;
    handleChange(e.target.value);
  };

  return (
    <div>
      <input type="text" placeholder="write/..." onChange={onHandleChange} />
    </div>
  );
};

export default ChildCompo2;
