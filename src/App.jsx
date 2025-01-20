import Counter from "./Counter";
import Greeting from "./Greeting";
import MyButton from "./MyButton";
import Welcome from "./Welcome";

function App() {
  return (
    <>
      <Welcome name="Naw Ram" />
      <Counter></Counter>
      <MyButton />
      <Greeting isLoggedIn={true} />
    </>
  );
}

export default App;
