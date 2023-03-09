import React from 'react';
import { Link } from 'react-router-dom';
import {GoArrowRight} from 'react-icons/go';
import {HiBuildingOffice2} from 'react-icons/hi2';
import {IoCallOutline} from 'react-icons/io5';
import {MdEmail} from 'react-icons/md';

const Contact = () => {
  return (
    <>
    <div className="card">
    <div className="cardchild">
      <span>Designer Jewellery</span>
      <h2>Contact Us</h2>
      <ul>
        <li><Link to={'/'} >Home</Link></li>
        <li><GoArrowRight/></li>
        <li>Contact Us</li>
      </ul>
    </div>
  </div>





<section className='contactdetails'>

  <div>
    <div className="contactcontainer">
      <div><HiBuildingOffice2/></div>
      <div> 
        <h2>Office Address</h2>
        <span>19/A, abc City hall Tower <br /> Punjab, India</span>
      </div>
    </div>

    <div className="contactcontainer">
      <div><IoCallOutline/></div>
      <div>
        <h2>Phone Number</h2>
        <span>+91-0987654321 <br /> +91-0987654321</span>
      </div>
    </div>

    <div className="contactcontainer">
      <div><MdEmail/></div>
      <div>
        <h2>Email Address</h2>
        <span>xyz@mail.com <br /> abc@mail.com</span>
      </div>
    </div>
  </div>

</section>


<section className='enquiry'>

  <div>
    <div> <input type="text"  placeholder='Your Full Name'/></div>
    <div> <input type="email" placeholder='Enter Email Address' /></div>
    <div> <input type="mobile" placeholder='Add Phone Number' /></div>
    <div> <input type="text" placeholder='Select Subject' /></div>
    <div> <input type="textarea" placeholder='Enter Messages' /></div>
    <div> <button>Get Free Quote</button></div>
  </div>
</section>

</>
  )
}




 const Card=({Head})=>{
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

export default Contact;
export {Card}
