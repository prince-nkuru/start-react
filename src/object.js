import { useState } from "react";

function MyObject (){
  const [car, setCar] = useState({year:2024,
                                  make:'ford',
                                  model:'mustang'
                                 })

   const handleYear = (event) => {
    setCar({...car, year:2025})
   } 
   
   
   return (
    <div>
      <p>my favourite car is {car.year} {car.make} {car.model}</p>
      <input type="number" onChange={handleYear}/>
    </div>
   )
}

export default MyObject