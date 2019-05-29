import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {
  return (
    <div className="User">
      <p>I'm {props.username}...</p>
      <p>I am working on React Project!!</p>
    </div>
  )
}

export default userOutput;