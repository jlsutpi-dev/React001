const Greeting = (props) => {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return (
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1>Welcome back from Naw Ram!</h1>
        </div>
        <hr />
      </div>
    );
  } else {
    return <h1> please Sign Up</h1>;
  }
};

export default Greeting;
