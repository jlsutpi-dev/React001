const MyButton = () => {
  const handleClick = () => {
    alert("Button click");
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>My Button Compo</h1>
      </div>
      <div style={{ margin: "0 300px" }}>
        <button
          onClick={() => {
            handleClick();
          }}
        >
          click
        </button>
      </div>
      <hr />
    </>
  );
};

export default MyButton;
