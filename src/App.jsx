import React from 'react';
import './App.css';
import myimg from './assets/myimg.png';

const App = () => {
  return (
    <div className='flex items-center justify-center h-screen bg-[#ECE7E2] flex-col'>
      <div>
      <img src={myimg} alt="My Image" className="w-32 h-32" />
      </div>
      <h1 className='font-bold text-[#4A7766] text-2xl'>
        Welcome to My Portfolio Website
      </h1>
    </div>
  );
}

export default App;
