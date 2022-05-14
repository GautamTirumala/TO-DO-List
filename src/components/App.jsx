import React, { useState , useRef , useEffect} from "react";

import TodoItem from './TodoItem'

function App() {
  const [inputText, setInputText] = useState("")
  const [items, setItems] = useState([]);

  function handleChange(event) {
    setInputText(event.target.value);
  }



//Creating a HOOK for traking Enter key
  function useKey(key , cb){
    const callbackRef = useRef(cb);

    useEffect(()=>{
      callbackRef.current=cb;
    })

    useEffect(() => {
      function handle(event){
        if (event.code===key){
          callbackRef.current(event);
        }
      }
    document.addEventListener('keypress',handle);
      return () =>document.removeEventListener('keyPress',handle)
    },[key])
  }
//Hook complete


  function addItem() {
    setItems(prevItems => {
      return [...prevItems, inputText]; });
    setInputText('');
   
  }
  function deleteAll(){
    setItems([])
  }

  
  function handleEnter(){
    setItems(prevItems => {
      return [...prevItems, inputText]; });
    setInputText('');
  }
useKey('Enter',handleEnter)


  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
       <input onChange={handleChange} type="text" value={inputText} />
     
        <button onClick={addItem}  >
          <span>Add</span>
        </button>
       
       
        
      </div>
      
      <div>
        <ul>
          {items.map((todoItems,index) => (
           // <TodoItem item={todoItems} id={index} key={index} delFun={deleteItem}/>
           <TodoItem item={todoItems}/>
          ))}
        </ul>
      </div>
      <button className="btn-bottom" onClick={deleteAll}><span>All Done</span></button>
    </div>
  );
}

export default App;
