import { useState } from "react";

function MyObject (){
  const [car, setCar] = useState({year:2024,
                                  make:'ford',
                                  model:'mustang'
                                 })

   const handleYear = (event) => {
    setCar(c => ({...c, year:event.target.value}))
   } 

   const handleMake = (event) => {
    setCar(c => ({...c, make:event.target.value}))
   }
   
   const handleModel = (event) => {
    setCar(c => ({...c,model:event.target.value}))
   }
   
   return (
    <div>
      <p>my favourite car is {car.year} {car.make} {car.model}</p>
      <input type="number" value={car.year} onChange={handleYear}/><br/>
      <input type="text" value={car.make} onChange={handleMake}/><br/>
      <input type="text" value={car.model} onChange={handleModel}/>
    </div>
   )
}

export default MyObject