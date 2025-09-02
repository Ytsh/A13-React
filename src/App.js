import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello'
import Counter from './components/Counter';
import Welcome from './components/Welcome';
import { useState } from 'react';
import Counters from './components/Counters';
import TodoList from './components/TodoList';
import Counterss from './components/CounterPractise';
import Form from './components/Form';
import ParentForm from './components/ParentForm';
import Groceries from './components/Groceries';
import { ParentGrocery } from './components/GroceriesParent';
import { TodoParent } from './components/TodoParent';
import { UseEffectPractis } from './components/UseEffectPractise';
import { Stopwatch } from './components/stopwatch';
import { Clock } from './components/Clock';
import { Fetch } from './components/Fetch';
import { Light } from './components/Light';

// Groceries app, similar to todo, you add groceries
// and add a delete button to remove that groceries
function App() {
  const [counter, setCounter] = useState(0);

  return (
    <>
    <Counter/>
    <Light />
    <Fetch />
    <Clock />
    <Stopwatch />
    <UseEffectPractis />
    <TodoParent />
    {/* <ParentGrocery/> */}
    {/* <ParentForm/> */}
    {/* <Form/> */}
    {/* <Counterss /> */}
    {/* <TodoList/> */}
    <Counters counter = {counter} 
    setCounter = {setCounter}/>
    {/* <Counters counter = {counter} 
    incrementCounter = {incrementCounter}
    decrementCounter = {decrementCount} />

<Counters counter = {counter} 
    incrementCounter = {incrementCounter}
    decrementCounter = {decrementCount} />
    <Welcome name = "Alice" message="Welcome to react class"/> */}
    {/* <div >
      Hello world
    </div>
    <Hello/>
    <Welcome name = "Suresh" message=" I hope you are doing good"
    /> */}
    {/* <Hello />
    <Counter/> */}

    </>
  );
}

export default App;
