import React from 'react'
import './AboutUs.css'
import lumi from '../../../assets/img/lumi.jpg'

function AboutUs() {
  return (
    <div className='container'>
        <div className='about-us-container'>
            <div className='team-members'>
                <h2>Our Team</h2>
                <div className='member-card'>
                    <img src= {lumi} className='member-image' alt=''/>
                    <h3 className='member-name'>Rahul M Kumar</h3>
                    <p className='member-role'>Co-founder</p>
                </div>
            </div>
            <div className='about-us-description'>
                <h2 className='about-us-heading'>About Us</h2>
                <p>
                    With the passion for empowering learners of all ages,misson is to make education accessible,engaging,and persionalized through our cutting-edge educational technology platform
                </p>
            </div>
        </div>
    </div>
  )
}

export default AboutUs