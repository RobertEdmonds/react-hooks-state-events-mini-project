import React,{useState} from "react";
import Task from "/Users/robertedmonds/Development/code/Mod2/State/react-hooks-state-events-mini-project/src/components/Task.js";

function TaskList({tasks}) {
  const [removingText, setRemovingText]=useState(tasks)
  function handleDelete(text){
    const newTaskArray = removingText.filter(task => task.text !== text)
    setRemovingText(newTaskArray)
  }

  const populatingTasks = tasks.map(item => {
   return <Task key={item.text} id={item.text} text={item.text} category={item.category} handleDelete={handleDelete}/>
  })

  return (
    <div className="tasks">
      {populatingTasks}
    </div>
  );
}

export default TaskList;
