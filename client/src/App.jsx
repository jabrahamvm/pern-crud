import React from 'react';
import InputTodo from './components/InputTodo';
import ListTodo from './components/ListTodo';

function App() {

  return (
    <>
      <div className="container">
        <h1 className="text-center mt-5">PERN Todo List</h1>
        <InputTodo />
        <ListTodo />
      </div>

    </>
  )
}

export default App;
