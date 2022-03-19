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
      // setToDos("oldToDOs" => ["new ToDo", [oldToDOs]]);
      // 배열안에 다른 배열을 요소형태로 추가하고싶다면 ...배열명 형태와 같은 모양으로 삽입해야한다.
    };
  };
  console.log(toDos);
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
        {toDos.map((item,index) => <li key={index}>{item}</li> ) }
        {/* 
        ** map? 예전 array를 가져와서 변형해줌.
        ** 같은 component의 list를 render 할때 key라는 props를 넣어주어야한다. 
        이건 그냥 react가 기본적으로 list에 있는 모든 item들을 인식하기 때문.
        이럴땐 그냥 ket만 넣으면 됌
        */}
        </ul>
    </div>
  );
}

export default App;
