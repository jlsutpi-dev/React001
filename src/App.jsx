import Counter from "./Counter";
import Form from "./Form";
import Greeting from "./Greeting";
import List from "./List";
import MyButton from "./MyButton";
import Welcome from "./Welcome";

function App() {
  return (
    <>
      <Welcome name="Naw Ram" />
      <Counter></Counter>
      <MyButton />
      <Greeting isLoggedIn={true} />
      <List />
      <Form />
    </>
  );
}

export default App;
