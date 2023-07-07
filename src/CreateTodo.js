import React, { useState } from 'react';
import axios from 'axios';
import { FiArrowLeft } from 'react-icons/fi';

import { useHistory } from 'react-router-dom';
const CreateTodo = ({ onTodoCreated }) => {
  
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  
    const history = useHistory();
 //To go back to display page  
    const navigateToOtherPage = () => {
      history.push('/Todo');
      window.location.reload();
    };
  const handleSubmit = async (e) => {
    e.preventDefault();
  

    try {
      const response = await axios.post('http://localhost:3000/todo', { title, description });
      const newTodo = response.data.data;
      // Invoke the callback function with the new todo
      onTodoCreated(newTodo);
      setTitle('');
      setDescription('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
    <button className='btn btn-primary' onClick={navigateToOtherPage}>
        <FiArrowLeft />

        Go Back
      </button>
      <h2>Create Todo</h2>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label>Title:</label>
          <input className='form-control' value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div className='form-group'>
          <label>Description:</label>
          <textarea  className='form-control' value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>
        <button  onClick={navigateToOtherPage} className='btn btn-primary' type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreateTodo;
