import Form from "./Form";
import Table from "./Table";
import { useState} from "react";
import axios from 'axios';
import './style.css';

function App() {
  const [weather, setWeather] = useState({});
  const getWeather = (city) =>{
    const key = 'f4833cf990dc92ef43563c9b00da2a78';
   axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
   .then(({data})=>{
    setWeather(data)
  })
  }

  return (
    <div>
   <Form getWeather={getWeather} />
   <Table weather={weather}/>
    </div>
  );
}

export default App;