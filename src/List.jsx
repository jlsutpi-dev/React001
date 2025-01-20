import React from "react";

const List = () => {
  const items = ["Apple", "Banana", "Cherry"];
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>Listing</h1>
      </div>
      <div style={{ margin: "0 300px" }}>
        {items.map((fruit, index) => {
          console.log(index);
          return (
            <div key={index}>
              <li> {fruit}</li>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default List;
