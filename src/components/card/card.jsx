 import React from 'react'
 import './card.css'
 const Card = ({emogi, heading,details,color}) => {
   return (
    <div className="card" style={{borderColor: {color}}}> 
    <img src={emogi} alt="" />
    <span>{heading}</span>
    <span>{details}</span>
    <button className="c-button">LEARN MORE</button>
  </div>
   )
 }
 
 export default Card