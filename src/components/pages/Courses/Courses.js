import React from 'react'
import './Courses.css';
import ai from '../../../assets/img/ai.png';
import sd from '../../../assets/img/sd.png';
import dg from '../../../assets/img/dg.png';
import hacker from '../../../assets/img/hacking.png';

function Courses() {

  const courseData = [{
    title:"DATA SCIENCE AND AI",
    desc:"Master AI Development!!!",
    img:ai
  },
  {
    title:"FULL STACK DEVELOPEMENT",
    desc:"Master Full Stack Development!!!",
    img:sd
  },
  {
    title:"CYBER SECURITY",
    desc:"Master Cyber Security!!!",
    img:dg
  },
  {
    title:"SOFTWARE DEVELOPEMENT",
    desc:"Master Software Development!!!",
    img:hacker
  }

]

  return (
    <div className='container course-container'>
      <div className='course-top'>
        <h2 className='section-title'>Our Courses</h2>
        <p>The Top Trending Courses with ISO Certification</p>
        <div className='course-wrapper'>
          {
            courseData.map((course,index)=>(
              <div className='course-item' key={index}>
              <span className='course-icon'>
              <img src={course.img} alt=''/>
            </span>
            <div className='course-content'>
              <h4>{course.title}</h4>
              <p>{course.desc}</p>
            </div>
            </div>
            ))
          }
          
       
            </div>
        </div>
      </div>
  
  )
}

export default Courses