
import './App.css';
import {useState} from "react";
import Counter from "./components/Counter";
import Counter3 from "./components/Counter3";

function App() {
  const [count, setCount] = useState(0)
    const minus =() =>{
      setCount(count-1)
    }
    const plus =() =>{
        setCount(count+1)
    }

    const [numbers, setNumbers] = useState([0])
    const del = (ind)=>{
      const newNumbers = numbers.filter((el, i)=> ind !== i)
        setNumbers(newNumbers)
    }

    const reset = (ind)=>{
      const newNumbers = numbers.map((el, i)=> ind===i ? 0: el)
        setNumbers(newNumbers)
    }

    const changeNumbers = (ind, value) =>{
    const newNumbers = numbers.map((el, i)=> ind===i ? el+value: el)
      setNumbers((newNumbers))
    }

    const addCounter = ()=>{
      const newCount = [...numbers, 0]
      setNumbers(newCount)
    }


  return (
    <div className="App">
      <h1>Counter</h1>
      <Counter  count={count} plus={plus} minus={minus}/>
      <Counter3 numbers={numbers} del={del} reset={reset} changeNumbers={changeNumbers} addCounter={addCounter}/>

    </div>
  );
}

export default App;
