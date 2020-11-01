import React from "react";
import ReactDOM from "react-dom";
import List from "./containers/list";

const App = () => {
  return (
    <div>
      <h1>Movie List</h1>
      <List />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
