import { useState } from "react";


//onchange: event handler used primarily in forms: input, textarea, radio, select

function MyComponent (){
  const [name, setName] = useState('placeholder');
  const [comment, setComment] = useState();
  const [select, setSelect] = useState();
  const [shipping, setShipping] = useState();

  const HandleEvent = (event) => {
    setName(event.target.value);
  }

  const handleComment = (event) => {
    setComment(event.target.value)
  }

  const handleSelection = (event) => {
    setSelect(event.target.value)
  }

  const handleShipping = (event) => {
    setShipping(event.target.value)
  }


  return (
    <div>
      <input value={name} onChange={HandleEvent}/>
      <p>Name:{name}</p>

      <textarea value={comment} onChange={handleComment} placeholder="enter item"/>
      <p>comment : {comment}</p>

      <select value={select} onChange={handleSelection}>
        <option value= ''>select option</option>
        <option value= 'visa'>visa</option>
        <option value= 'mastercard'>mastercard</option>
      </select>

      <p>selection: {select}</p>

      <label>
        <input type="radio" value= 'pick up' checked={shipping === 'pick up'} onChange={ handleShipping}/>
        pick up
      </label>

      <label>
      <input type="radio" value= 'delivery' checked={shipping === 'delivery'} onChange={ handleShipping}/>
        delivery
      </label>

      <p>shipping: {shipping}</p>
    </div>
  )
}

export default MyComponent;