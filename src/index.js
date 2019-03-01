//import the react and reactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

//example funtion
function getButton(){
  return "Click on me!";
}
//create a react component
const App = () => {
  const buttonText='Click Me!';

  return (
    <div>
      <label className="label" htmlFor= "name"> Enter name:</label>
      <input id= "name" type= "text"/>
      <button style = {{backgroundColor: "blue", color: "white"}}>{getButton()}</button>
    </div>
    //
  );
}

//take component and show it on screen
ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
