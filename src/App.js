import { useEffect, useState } from "react"; //01. useState , useEffect import
//import React from "react";  //React자체를 가져오면, React.useState  React.useEffect 등의 형태로 쓰면 잘 된다.

function App() {
  const [counter, setValue] = useState(0);
  const onClick = () => setValue((prev) => prev + 1);
  
  console.log("i run all the time"); // 클릭시 계속 실행되어야 함수

  useEffect( () => { //02.useEffect 함수 안에 맨처음에만 실행하고자 하는 함수를 넣는다.
    console.log("CALL THE API..."); // 맨처음에만 실행되고, 다시는 실행되지 않을 함수
  }, []);
  
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}
//component가 맨처음 실행될때만 실헹되고, 디시는 실행되지 않도록 하고싶을대, 

export default App;
