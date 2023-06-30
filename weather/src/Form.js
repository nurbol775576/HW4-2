import {useState} from "react";

const Form = ({getWeather}) => {
   const [city, setCity] = useState('');
    return (
        
   <div className="form">
   <input type="text" onChange={(event)=>{
   setCity(event.target.value)
   }} />
   <button onClick={()=>{
    getWeather(city)
    }} >get</button>
  </div>
    );
}

export default Form;
