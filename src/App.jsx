import ArrayState from "./ArrayState";
import CustomCounter from "./CustomCounter";
import ObjectState from "./ObjectState";
import TextInput from "./TextInput";
import Toggle from "./Toggle";

function App() {
  return (
    <>
      {/* <Welcome name="Naw Ram" />
      <Counter></Counter>
      <MyButton />
      <Greeting isLoggedIn={true} />
      <List />
      <Form /> */}
      {/* <Counter /> */}
      <TextInput />
      <Toggle />
      <ArrayState />
      <ObjectState />
      <CustomCounter />
    </>
  );
}

export default App;
