
  import { useState } from "react";

function UpdateArray(){
  const [cars,setCars] = useState([]);
  const [carYear, setCarYear] = useState(new Date().getFullYear());
  const [carMake, setCarMake] = useState('');
  const [carModel, setCarModel] = useState('');


  const handleCarAdd = () => {
    const newCar = {year:carYear, make: carMake, model: carModel};
    setCars(c => [...c, newCar]);

    setCarYear(new Date().getFullYear());
    setCarMake('');
    setCarModel('');
  }
  const handleCarRemove = (index) => {                 // i need more insight on this logic
    setCars(c => c.filter((_, i) => i !== index))
  }


  const handleCarYear = (event) => {
    setCarYear(event.target.value)
  }
  const handleCarMake = (event) => {
    setCarMake(event.target.value)
  }

  const handleCarModel = (event) => {
    setCarModel(event.target.value)
  }

  return(<div>
           <ul>
            
            {cars.map((car, index) => 
            
            <li key={index} onClick={() => handleCarRemove(index)}>
              {car.year} {car.make} {car.model}
            </li> )}

           </ul>
           <input type="number" value={carYear} onChange={handleCarYear}/>
           <input type="text" value={carMake}  onChange={handleCarMake} placeholder="Enter car make"/>
           <input type="text" value={carModel}  onChange={handleCarModel} placeholder="Enter model"/>
           <button onClick={handleCarAdd}> add car</button>
         </div>)
}


export default  UpdateArray;

 