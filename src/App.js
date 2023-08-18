import React, { useState } from "react";
import List from "./List";

const App = () => {

  const [inputField, setinputField] = useState("");
  const [items, setItems] = useState([]);

  const inputEvent = (event) => {
    setinputField(event.target.value);
  }

  const listOfitems = () => {
    setItems((old) => {
      return [...old, inputField]
    });
    setinputField("");
  };

  const deleteItems =(id) =>{
    setItems((old)=>{
      return old.filter((arrEle, index)=>{
        return index !== id;
      });
    });
  };

  return (
    <>
      <div className="main-div">
        <div className="center-div">
          <br />
          <h1>ToDo List</h1>
          <br />
          <input type="text" placeholder="Add your Items" value={inputField} onChange={inputEvent} />
          <button onClick={listOfitems}>+</button>
          <ol>
            {items.map((itemVal, index) => {
              return (
                <List
                  key={index}
                  id={index}
                  text={itemVal}
                  onSelect={deleteItems}
                />);
            })}
          </ol>
        </div>
      </div>
    </>
  );
}

export default App;