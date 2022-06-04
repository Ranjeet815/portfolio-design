import React from 'react'
import './Testimonil.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";
import "swiper/css";

const Testimonil = () => {
  const clints = [
    {
      img: profilePic1,
      review:
        "JavaScript, often abbreviated JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. Over 97% of websites use JavaScript on the client side for web page behavior, often incorporating third-party libraries",
    },
    {
      img: profilePic2,
      review:
        "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.",
    },
    {
      img: profilePic3,
      review:
        "React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta and a community of individual developers and companies.",
    },
    {
      img: profilePic4,
      review:
        "Express.js, or simply Express, is a back end web application framework for Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs. It has been called the de facto standard server framework for Node.js.",
    },

  ]
  return (
    <div className='t-wrapper'>
      <div className='t-heading'>
        <span> Clients always get</span>
        <span>Excepional Work </span>
        <span>From Me...</span>
        <div className='blur t-blur1' style={{background: "var(--purple)"}}></div>
        <div className='blur t-blur2' style={{background:"skyblue"}}></div>
      </div>
      {/* Silder */}
      <Swiper
      // install Swiper modules
      modules={[Pagination]}
      slidesPerView={1}
      pagination={{ clickable: true }}
      
      >
        {clints.map((clints,index)=>{
          return (
            <SwiperSlide key={index}>
             <div className='testimonial'>
              <img src={clints.img} alt=""/>
              <span>{clints.review}</span>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}

export default Testimonil