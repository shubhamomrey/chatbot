import React from 'react';
import { Link } from 'react-router-dom';

const FinalResult = () => {

  return (
    <div>
      <h2>You may now exit</h2>
      <Link to="/"><button className='exit-btn'>Home Page</button></Link>
    </div>
  );
}

export default FinalResult;

