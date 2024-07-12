import { useState } from "react";

function Foods(){
  const [foods, setFoods] = useState(['mango', 'banana', 'beans']);

  const handleAdd = () => {
    const newFood = document.getElementById('enter').value;
    document.getElementById('enter').value = '';
    setFoods(f => ([...f,newFood]))
  }

  const handleRemove = (index) => {
    setFoods(foods.filter((_,i) => i !== index))
  }


  return (
    <div>
     <h1>List of foods</h1>
     <ul>
      {foods.map((food, index) => 
      <li key={index} onClick={ () => handleRemove(index)}>
        {food}
      </li> )}
      </ul>
     <input type="text" placeholder="Enter food" id="enter"/>
     <button onClick={handleAdd}>add food</button>
    </div>
    
  )
}
export default Foods;