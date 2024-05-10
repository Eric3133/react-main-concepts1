import './App.css';
import './index.css';
import {useState} from 'react';

// JSX
const count = 100;
const isLogin = true;

function getName () {
  return 'React';
}

// change state

const articleType = 1;

function getArticleType () {
  if (articleType === 0){
    return 'React';
  } else if (articleType === 1){
    return 'Vue';
  }else {
    return 'Angular';
  }
}

// map
const list = [
  {id: 1, name: 'React', age: 5},
  {id: 2, name: 'Vue', age: 3},
  {id: 3, name: 'Angular', age: 10}
]

// conponents
function Button () {
  return <button>click me 5</button>
}

function App() {
  // event handlers
  const handleClick = () => {
    console.log('click me');
  }

  function handleClick2 (e) {
    console.log('click me 2');
    console.log(e.target);
  }

  const handleClick3 = (name) => {
    console.log(name)
  }

  const handleClick4 = (name, e) => {
    console.log(name, e.target)
  }

  // useState

  const [count, setCount] = useState(0);
  const handleClick5 =() => {
    setCount(count + 1);
  }

  const [form, setForm] = useState({name: 'jack'});
  const changeForm = () => {
    setForm({
      ...form,
      name: 'rose'
    })
  }

  return (
    <div className="App">
      <h1>My first React App</h1>
      {'Learn React'}
      {count}
      {getName()}
      {new Date().getDate()}
      <div style={{color: 'red', fontSize: 50}}>this is div</div>
      <ul>
        {list.map((item)=> <li key={item.id}>{item.name}:{item.age}</li>)}
      </ul>
      {isLogin && <div>this is is Login</div>}
      {isLogin ? <div>login</div> : <div>logout</div>}
      {getArticleType()}
      <button onClick={handleClick}>click me</button>
      <button onClick={handleClick2}>click me 2</button>
      <button onClick={()=>handleClick3('React')}>click me 3</button>
      <button onClick={(e) => {handleClick4("react", e)}}>click me 4</button>
      <Button></Button>
      <button onClick={handleClick5}>{count}</button>
      <button onClick={changeForm}>change the name {form.name}</button>
      <div className='foo'>
        this is className
      </div>
    </div>
  );
}

export default App;
