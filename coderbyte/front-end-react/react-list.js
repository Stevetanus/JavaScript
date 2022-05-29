import React from "react";
import ReactDOM from "react-dom";

function DataList(props) {
  const data = props.data;
  return (
    <h2>
      <ol>
        {data.map((da, i) => {
          return (
            <li key={i}>
              <span>{da.name}</span> <span>{da.age}</span>
            </li>
          );
        })}
      </ol>
    </h2>
  );
}

const data = [
  { name: "Daniel", age: 25 },
  { name: "John", age: 24 },
  { name: "Jen", age: 31 },
];

ReactDOM.render(<DataList data={data} />, document.getElementById("root"));
