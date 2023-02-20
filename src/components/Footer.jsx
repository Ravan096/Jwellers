import React from 'react';
import logo1 from '../assets/logo1.png';
import {AiFillFacebook,AiFillTwitterSquare,
    AiFillLinkedin,AiFillYoutube,
    AiFillInstagram} from 'react-icons/ai';
import {IoCallOutline} from 'react-icons/io5';
import {MdOutlineMailOutline,MdLocationPin} from 'react-icons/md';
import {GiCutDiamond} from 'react-icons/gi';





const Footer = () => {
  return (

    <div className="footer">
        <div className="footer-child">

            <div className="footer-div-one">
                <div className="footer-div-one-content">
                    <div className="footer-div-one-logo">
                        <img src={logo1} alt="" />
                    </div>
                    <p>Lorem ipsum dolor sit amet, consect
                         etur adipisicing elit, sed doing eius mod
                          tempor incididunt ut labore 
                         et dolore magna aliqua. Ut enim ad minim veniam,
                         quis nostrud exercitat ion ullamco laboris nisi.
                         </p>
                         <div className="footer-div-one-icon">
                            <AiFillFacebook/>
                            <AiFillYoutube/>
                            <AiFillInstagram/>
                            <AiFillTwitterSquare/>
                            <AiFillLinkedin/>
                         </div>
                </div>
            </div>

            <div className="footer-div-two">
                <div className="footer-div-two-content">
                    <h4>New Collections.</h4>
                    <ul>
                        <li><span><GiCutDiamond/></span>
                            Diamond Ring</li>
                        <li><span><GiCutDiamond/></span>
                            Big Necklace</li>
                        <li><span><GiCutDiamond/></span>
                            Gold Earring</li>
                        <li><span><GiCutDiamond/></span>
                            Crumpled Ring</li>
                        <li><span><GiCutDiamond/></span>
                            Ankle Bracelet</li>
                        <li><span><GiCutDiamond/></span>
                            Gold Bracelet</li>
                        <li><span><GiCutDiamond/></span>
                            Silver Bracelet</li>
                        <li><span><GiCutDiamond/></span>
                            Stud Earrings</li>
                        <li><span><GiCutDiamond/></span>
                            Moon Necklace</li>
                        
                    </ul>
                </div>
            </div>

            <div className="footer-div-three">
                <div className="footer-div-three-content">
                    <div className="footer-three-heading">
                        <h1>Contact Us.</h1>
                    </div>

                    <div className="footer-three-child-one">
                    <div className="three-content-one"><IoCallOutline/></div>
                    <div className='three-content-one-child'>
                        <h3>Phone Number</h3>
                        <p>+91-0123456789</p>
                        </div>
                    </div>

                    <div className="footer-three-child-two">
                    <div className="three-content-two"><MdOutlineMailOutline/></div>
                    <div className='three-content-one-child'>
                        <h3>Email Address</h3>
                        <p>xyz@mail.com</p>
                        </div>
                    </div>

                    <div className="footer-three-child-three">
                    <div className="three-content-three"><MdLocationPin/></div>
                    <div className='three-content-one-child'>
                        <h3>Office Address</h3>
                        <p>00/A, OOOOO City, ABC</p>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    </div>
  )
}

export default Footer