import React, {useState, useEffect } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Navbar from './Navbar';
import dataSource from './dataSource';
import TaskTable from './Task/TaskTable';
import TaskForm from './Task/TaskForm';
import AboutPage from './AboutPage';
import NotFound from './NotFound';

const App = () => {
  const [taskList, setTaskList] = useState([]); // Initialize tasks state
  let refresh = false;  // Initialize refresh state

  // Load tasks from the server
  const loadTasks = async () => {
    const response = await dataSource.get('/tasks');  // Get tasks from the server

    setTaskList(response.data);  // Set tasks state to the response data
  };

  // Setup initialization callback
  useEffect(() => {
    loadTasks();  // Load tasks from the server
  }, [refresh]); // Refresh the page

  // console.log('tasks from App.js', taskList);

  const handleSaveTask = async (task) => {
    // Refresh the task list after saving
    const response = await dataSource.get("/tasks");
    setTaskList(response.data);
};

 // Handle deleting a task
 const handleDeleteTask = async (id) => {
  const confirmDelete = window.confirm("Are you sure you want to delete this task?");
  if (confirmDelete) {
      try {
          await dataSource.delete(`/tasks/${id}`); // Send DELETE request
          console.log(`Task with ID ${id} deleted successfully.`);
          loadTasks(); // Refresh the task list
      } catch (error) {
          console.error("Error deleting task:", error);
      }
  }
};


  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={
          <>
            <TaskTable taskList={taskList} onDelete={handleDeleteTask}/>
          </>
        } />
        <Route path='/task/new' element={
          <>
            <TaskForm taskList={taskList} onSaveTask={handleSaveTask}/>
          </>
        } />
        <Route path='/task/view/:id' element={
          <>
            <TaskForm taskList={taskList} />
          </>
        } />
        <Route path='/task/edit/:id' element={
          <>
            <TaskForm taskList={taskList} onSaveTask={handleSaveTask}/>
          </>
        } /> 
        <Route path='/about' element={<AboutPage/>} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
