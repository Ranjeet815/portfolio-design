import React from 'react'
import HeartEmoji from '../../img/heartemoji.png'
import Glasses from '../../img/glasses.png'
import Humble from '../../img/humble.png'
import './services.css'
import Card from '../card/card'
import Resume from './Ranjeet_Bhoyar_BE(IT)2019.pdf'
const Services = () => {
  return (
    <div className='services'>
        {/* left side */}
        <div className='awesome'>
            <span>My Awesome</span>
            <span>Services</span>
            <span>
                Lorem Ispum is Simply dummy text of printing of printing Lorem <br/>
                ispum is simply dummy text of printing 
            </span>
            <a href={Resume} download>
            <button className='button s-button'>Dowenload CV</button>
            </a>
            <div className='blur s-blur1' style={{background: "#ABF1FF94"}}></div>
        </div>
        {/* right side */}
        <div className='cards'>
          {/* first cards */}
           <div style={{left:'16rem'}}>
               <Card emogi={HeartEmoji}
                     heading={'Design'}
                    details={'Figma,Sketch,Photoshop,Adobe,Adobe xd'}/>        
           </div>
{/* second cards*/}
           <div style={{top:'12rem', left:'-4rem'}}>
              <Card 
              emogi={Glasses}
              heading={'Developer'}
              details={'HTML,Css,Javascript,React'}/>
</div>

{/* third cards */}
<div style={{top:'19rem', left:'16rem'}}>
<Card 
emogi={Humble}
heading={'UI/UX'}
details={'Hands-on learning via real-life innovation projects'}/>
</div>
<div className='blur s-blur2' style={{background: 'var(--purple)'}}>

</div>

        </div>
    </div>
  )
}
 
export default Services