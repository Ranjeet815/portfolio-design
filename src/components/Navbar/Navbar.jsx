import React from 'react'
import Toggle from '../Toggle/Toggle'
import './Navbaar.css'

const Navbar = () => {
  return (
    <div className='n-wrapper'>
        <div className='n-left'>
            <div className="name">Ranjeet</div>
            <Toggle/> 
        </div>
        <div className='n-right'>
            <div className='n-list'>
                <ul style={{listStyleType: 'none'}}>
                    <li>Home</li>
                    <li>Services</li>
                    <li>Experience</li>
                    <li>Portfolio</li>
                    <li>Testimonial</li>
                </ul>
            </div>
            <button className='button'>Contact</button>
        </div>
    </div>
  )
}

export default Navbar