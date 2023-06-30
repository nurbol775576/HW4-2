import React from 'react';

const Table = ({weather}) => {
    return (
        <div>
{
    JSON.stringify(weather) === '{}'
 ? ''
 :<table>
       <tr>      
    <td>temp</td>
    <td>{(weather.main.temp - -273,15).toFixed(2)}K  </td>
    </tr>
    <tr>
 <td>descr</td>
 <td>{weather.weather[0].description}</td>
     </tr>
     <tr>
        <td>city</td>
        <td>{weather.name}</td>
     </tr>
   <tr>
    <td>country</td>
    <td>{weather.weather.country}</td>
   </tr>
 
 </table>




}          
        </div>
    );
}

export default Table;
