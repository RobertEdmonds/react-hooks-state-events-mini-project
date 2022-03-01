import React from "react";

function CategoryFilter({categories}) {

  const forCategoriesButtons = categories.map(item =>{
    return(<button>{item}</button>)
  })

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {forCategoriesButtons}
    </div>
  );
}

export default CategoryFilter;
