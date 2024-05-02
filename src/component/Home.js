import React, { useState } from 'react';
import axios from 'axios';
import './Home.css'
export const Home = () => {
  const [numberType, setNumberType] = useState('');
  const [numbers, setNumbers] = useState([]);
  const [average, setAverage] = useState(0);

  const fetchNumbers = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/numbers/${numberType}`);
      const { windowPrevState, windowCurrState, numbers, avg } = response.data;
      setNumbers(numbers);
      setAverage(avg);
    } catch (error) {
      console.error('Error fetching numbers:', error.message);
    }}
  return (
    <div>
     <div className='calc'> <h1>Average Calculator</h1>
      <select className='option' value={numberType} onChange={(e) => setNumberType(e.target.value)}>
        <option value="">Select Number Type</option>
        <option value="p">Prime</option>
        <option value="f">Fibonacci</option>
        <option value="e">Even</option>
        <option value="r">Random</option>
      </select>
      <button className='but' onClick={fetchNumbers}>Fetch Numbers</button></div>
      <div className='info'>
      <div className='num'><h1>enter numbers: {numbers.join(', ')}</h1></div> 
      <div className='avg'><h1>Average: {average}</h1>
</div>
      </div>
     
    </div>
  )
}
