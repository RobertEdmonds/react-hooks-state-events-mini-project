import React, {useState} from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {
  const [textChange, setTextChange] = useState("")
  const [categoryChange, setCategoryChange] = useState("Code")
  const captureCategories = categories.map(category => {
    if(category === "All")return false;
    return(<option>{category}</option>)
  })

  function handleText(event){
    setTextChange(event.target.value)
  }
  function handleChange(event){
    setCategoryChange(event.target.value)
  }
  function onFormSubmit(event){
    event.preventDefault()
    const formData = {text: textChange,category: categoryChange}
    onTaskFormSubmit(formData)
    setTextChange("")
    setCategoryChange("Code")
  }
  return (
    <form className="new-task-form" onSubmit={onFormSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange={handleText}/>
      </label>
      <label>
        Category
        <select name="category" onChange={handleChange}>
          {captureCategories}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
