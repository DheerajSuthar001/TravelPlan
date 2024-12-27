import './App.css';
import data from './data.js';
import Tours from './components/Tours.js';
import { useState } from 'react';
function App() {

  const [tours, setTours] = useState(data);
  function removeTour(id) {
    const newTours = tours.filter((el) => { return el.id !== id });
    setTours(newTours);
  }

  if (tours.length === 0) {
    return (
      <div className='w-[100vw] h-[100vh] flex flex-col justify-center items-center gap-4'>
        <h1 className='font-bold text-2xl'>No Tours Left</h1>
        <button onClick={() => setTours(data)} className='rounded-md w-[200px] px-4 py-2 bg-gray-200'>Refresh</button>
      </div>
    )
  }
  return (
    <div className='w-[100vw] flex  justify-center items-center '>
      <div className='w-[50%] flex flex-col gap-6 my-6 items-center justify-center'>
        <h1 className='w-[30%] text-center border-2 border-dashed border-blue-900 rounded-lg font-extrabold text-4xl'>Travel Plan</h1>
        <Tours  allTours={tours} removeTour={removeTour}></Tours>
      </div>
    </div>
  );
}

export default App;
