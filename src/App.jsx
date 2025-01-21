import { useState } from "react";
import Overlay from "./Overlay";

function App() {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [isOverlayVisible, setIsOverlayVisible] = useState(true);
  const increment = () => {
    setCount(count + 1);
  };
  const handleChange = (value) => {
    setInputValue(value);
  };
  const handleBooleanChange = (value) => {
    setIsVisible(value);
  };
  const onClose = () => {
    setIsOverlayVisible(!isOverlayVisible);
  };
  return (
    <>
      {/* <Welcome name="Naw Ram" />
      <Counter></Counter>
      <MyButton />
      <Greeting isLoggedIn={true} />
      <List />
      <Form /> */}
      {/* <Counter /> */}
      {/* <TextInput />
      <Toggle />
      <ArrayState />
      <ObjectState />
      <CustomCounter /> */}
      {/* <h1>Count : {count}</h1>
      <h1> textinput : {inputValue}</h1>
      <ChildCompo increment={increment} />
      <ChildCompo2 handleChange={handleChange} />
      <button
        onClick={() => {
          setIsVisible(!isVisible);
        }}
      >
        click
      </button>
      {isVisible && <ChildCompo3 />} */}
      <h1>Overlay example</h1>
      <button
        onClick={() => {
          setIsOverlayVisible(false);
        }}
      >
        open overlay
      </button>
      <Overlay onClose={onClose} isOverlayVisible={isOverlayVisible} />
    </>
  );
}

export default App;
