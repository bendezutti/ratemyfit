import React from 'react';
import './Shirt.css';

const Shirt = props => {
  return (
    <div className="image-upload__preview"> 
     
        <img src={`http://localhost:3001/${props.image}`} alt={props.description} />
  
      </div>

  
  );
};

export default Shirt;
