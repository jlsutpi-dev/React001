import React, { useState } from "react";

const ArrayState = () => {
  const [items, setItems] = useState([]);
  const addItem = () => {
    setItems([...items, { id: items.length + 1, value: Math.random() * 100 }]);
  };
  return (
    <div>
      {items.map((item) => {
        return (
          <div key={item.id}>
            id:{item.id},value:{item.value}
          </div>
        );
      })}
      <button
        onClick={() => {
          addItem();
        }}
      >
        click
      </button>
    </div>
  );
};

export default ArrayState;
