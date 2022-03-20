import { useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if(toDo === ""){
      return;
    } else {
      setToDo("");
      setToDos(currentArray => [toDo, ...currentArray]);
    };
  };
  
  const onClick = (event) => {
      const removeTarget= event.target.value;
      toDos.splice(removeTarget,removeTarget+1);
      console.log(toDos);
      setToDos([...toDos]);
  }


  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form>
        <input 
        onChange={onChange}
        value={toDo}
        type="text" 
        placeholder="Write your to dos"
        >
        </input>
        <button 
        onClick={onSubmit}
        type="submit"
        >Submit</button>
        </form>
        <hr/>
        <ul>
         {toDos.map((item, index) => (
            //toDos 배열에 있는 item을 가져온다.
            <li key={index}>
                {item} 
                <button 
                type='button' 
                onClick={onClick} 
                value={index}
                >
                Delete
                </button>
            </li>
         ))}
      </ul>
    </div>
  );
}

export default App;
