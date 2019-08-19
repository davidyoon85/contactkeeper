import React from "react";
import axios from "axios";

const App = () => {
  axios.get("https://jsonplaceholder.typicode.com/todos/1").then(res => {
    console.log(res.data);
  });
  return <div className="App" />;
};

export default App;
