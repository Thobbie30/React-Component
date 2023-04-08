import React from 'react';
import '../styles/Button.css'

function Button() {
  return (
      <div className='btn'>
        <input type="button" value="Google Search" />
        <input type="button" value="I am feeling lucky" />
      </div>
  );
}

export default Button;
