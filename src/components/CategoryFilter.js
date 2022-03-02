import React from "react";

function CategoryFilter({categories, handleCategoryChange, selectedCategory}) {
 
  const forCategoriesButtons = categories.map(item =>{
    return(<button key={item} className={selectedCategory===item? "selected": ""} onClick={()=>{handleCategoryChange(item)}}>{item}</button>)
  })

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {forCategoriesButtons}
    </div>
  );
}

export default CategoryFilter;
