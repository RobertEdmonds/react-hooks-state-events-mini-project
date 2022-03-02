import React,{useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [taskList, setTaskList] = useState(TASKS)

  function handleCategoryChange(category){
      setSelectedCategory(category)
  }

  function onTaskFormSubmit(newTask){
      setTaskList([...taskList, newTask])
  }

  const tasksToDisplay = taskList.filter(item => {
    if(selectedCategory === "All") return true;

    return item.category === selectedCategory;
  })

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} selectedCategory={selectedCategory} handleCategoryChange={handleCategoryChange} />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit}/>
      <TaskList  tasks={tasksToDisplay} />
    </div>
  );
}

export default App;
