import { useEffect, useState } from "react"; //01. useState , useEffect import

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onChange = (event) => setKeyword(event.target.value);
  const onClick = () => setValue((prev) => prev + 1);
  
  console.log("i run all the time"); 

  //01. 새로고침시, 한번만 실행
  useEffect( () => {
    console.log("I run only once"); 
  }, []);

  //02. keyword가 변화할때만 코드를 실행하고싶다.
  useEffect( () => {
      console.log("I run when 'keyword' changes.");
  }, [keyword]);

  //03. counter가 변화할때만 코드를 실행하고싶다.
  useEffect( () => {
    console.log("I run when 'counter' changes.");
  }, [counter]);

   //04. keyword 와 counter가 변화할때만 코드를 실행하고싶다.
   useEffect( () => {
    console.log("I run when 'keyword' and 'counter' changes.");
  }, [keyword, counter]);

  
  return (
    <div>
      <input 
      value={keyword}
      onChange={onChange} 
      type="text" 
      placeholder="Search here..."
      >
      </input>
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
