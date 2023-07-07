import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';


const Todos = () => {
  //  So i can move to the other component and Refresh
  const history = useHistory();
  const navigateToOtherPage = () => {
    history.push('/CreateTodo');
    window.location.reload();
  };

  //Get the todo List
  const [todos, setTodos] = useState([]);
   useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await axios.get('http://localhost:3000/todo/get');//Endpoint URL 
        setTodos(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTodos();
  }, []);

  // Delete Todo
const handleDelete = async (todoId) => {
    try {
      await axios.delete(`http://localhost:3000/todo/${todoId}`);
      // Filter out the deleted todo from the state
      setTodos(todos.filter(todo => todo._id !== todoId));
    } catch (error) {
      console.error(error);
    }
  };


  

  return (
    <div>
      <h1>Todos</h1>
      {todos.map(todo => (
        <div key={todo._id}>
          <h5>Title:{todo.title}</h5>
          <p>Description:{todo.description}</p>
          <button className='btn btn-primary' onClick={() => handleDelete(todo._id)}>Delete</button>
        </div>
      ))}
      <h1></h1>
   <button className='btn btn-primary' onClick={navigateToOtherPage}>Create New</button>
    </div>
  );
};


export default Todos;