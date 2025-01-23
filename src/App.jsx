import { useState } from "react";
import Timer from "./Timer";

function App() {
  const [count, setCount] = useState(0);
  // const [inputValue, setInputValue] = useState("");
  // const [isVisible, setIsVisible] = useState(false);
  // const [isOverlayVisible, setIsOverlayVisible] = useState(true);
  // const increment = () => {
  //   setCount(count + 1);
  // };
  // const handleChange = (value) => {
  //   setInputValue(value);
  // };
  // const handleBooleanChange = (value) => {
  //   setIsVisible(value);
  // };
  // const onClose = () => {
  //   setIsOverlayVisible(!isOverlayVisible);
  // };

  return (
    <>
      <Timer />
      {/* <Counter setCountParent={setCount} /> */}
      {/* <h1>count from parent : {count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        click
      </button> */}
      {/* <Welcome name="Naw Ram" />
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
      <ChildCompo increment={increment} /> */}

      {/* <button
        onClick={() => {
          setIsVisible(!isVisible);
        }}
      >
        click
      </button>
      <h1>Overlay example</h1>
      <button
        onClick={() => {
          setIsOverlayVisible(false);
        }}
      >
        open overlay
      </button>
      <Overlay onClose={onClose} isOverlayVisible={isOverlayVisible} /> */}
      {/* <FetchData /> */}
      {/* <DebouncedInput /> */}
      {/* <DebouncedResize /> */}
      {/* <ColorChange /> */}
      {/* <ExampleComponent /> */}
      {/* <TextInputWithFocusBtn /> */}
    </>
  );
}

export default App;
