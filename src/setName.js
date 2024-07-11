import { useState } from "react";

const Naming = (props) => {
  const [name, setName] = useState('nkurunziza');

  const updateName = () => {
    setName('prince')
  }

  return (
    <div>
      <p className="name"> name : {name} {props.greet}</p>
      <button className="change" onClick={updateName}>change name</button>
    </div>
  )
}

export default Naming;