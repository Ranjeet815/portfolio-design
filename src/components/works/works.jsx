import React from 'react'
import './works.css'
import Upwork from '../../img/Upwork.png'
import Fiverr from '../../img/fiverr.png'
import Amazon from '../../img/amazon.png'
import Shopify from '../../img/Shopify.png'
import Facebook from '../../img/Facebook.png'
const Works = () => {
  return (
    <div className='works'>
        <div className='awesome hhawsome'>
            <span>Works for All these</span>
            <span>Brands & Clients</span>
            <span className='gap-down'>
            Earn professional certification in IT.
            <br/> Get placed at internships in leading corporations. 
            <br/>Earn IT certifications through our free training, internship, and job placement support.
            <br/> Chat Support Available. Get A Free Consultation. Non-Profit Organization.
            </span>
            <button className='button s-button'>Hire me </button>
            <div className='blur s-blur1' style={{background: "#ABF1FF94"}}></div>
        </div>
        {/* Right Side */}
        <div className='w-right'>
          <div className='w-mainCircle'>
            <div className='w-secCircle'>
              <img src={Upwork} alt=""/>
            </div>
            <div className='w-secCircle'>
              <img src={Fiverr} alt=""/>
            </div>
            <div className='w-secCircle'>
              <img src={Amazon} alt=""/>
            </div>
            <div className='w-secCircle'>
              <img src={Shopify} alt=""/>
            </div>
            <div className='w-secCircle'>
              <img src={Facebook} alt=""/>
            </div>
          </div>
          {/* Backgraund Circles */}
          <div className='w-backCircle blueCircle'></div>
          <div className='w-backCircle yellowCircle'></div>
        </div>
    </div>
  )
}

export default Works