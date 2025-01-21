import React, { useState } from "react";

const ObjectState = () => {
  const [user, SetUser] = useState({ id: 1, name: "Naw Ram", age: 18 });
  const handleChange = (e) => {
    const { name, value } = e.target;
    SetUser({ ...user, [name]: value });
  };
  return (
    <div>
      <input
        type="text"
        name="name"
        value={user.name}
        onChange={handleChange}
        placeholder="name"
      />
      <input
        type="number"
        name="age"
        value={user.age}
        onChange={handleChange}
      />
      <p>name is : {user.name}</p>
      <p>age is : {user.age}</p>
    </div>
  );
};

export default ObjectState;
