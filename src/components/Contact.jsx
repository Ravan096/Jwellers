import React from 'react';
import { Link } from 'react-router-dom';
import {GoArrowRight} from 'react-icons/go';

const Contact = () => {
  return (
    <div><Card Head={"Contact Us"}/></div>
  )
}




export const Card=({Head})=>{
  <div className="card">
    <div className="cardchild">
      <span>Designer Jewellery</span>
      <h2>{Head}</h2>
      <ul>
        <li><Link to={'/'} >Home</Link></li>
        <li><GoArrowRight/></li>
        <li>{Head}</li>
      </ul>
    </div>
  </div>
}

export default Contact