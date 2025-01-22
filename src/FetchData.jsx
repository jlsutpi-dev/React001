import React, { useEffect, useState } from "react";

const FetchData = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => response.data)
      .then((data) => setData(data));
  }, []);
  console.log(data);
  return <div>FetchData</div>;
};

export default FetchData;
