import React from 'react'
import styles from '@/styles/myExpEdu.module.css'
import Image from 'next/image'
import fullStack from '../styles/assets/myExpEdu/fullStack.jpg'
import brkPrt from '../styles/assets/myExpEdu/brockport.png'

export default function myEdu() {
  return (
    <>
    <div className={styles.myBox} >
      <div className={styles.myHead} >
        <h1>WELCOME TO MY EDUCATION PAGE!!</h1>
        <p>Here are my most academic achievments</p>
      </div>
      <br></br>
      <br></br>
      <div className={styles.myData} >
        <div className={styles.myText} >
          <h1>FullStack Academy</h1>
          <p>Online Full Stack Web Development Immersive  Boot Camp</p>
          <p>Date: Nov/2022 - Apr/2023</p>
          <p>Degree Earned Certificate of Completion</p>
          <p>Field of Study: JavaScript, HTML, CSS</p>
        </div>
        <Image src={fullStack} height="400" width="800"/>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <div className={styles.myData} >
        <div className={styles.myText} >
          <h1>State University of New York at Brockport</h1>
          <p>On-Site State University</p>
          <p>Date: Aug/2014 - May/2018</p>
          <p>Degree Earned: Bachelors of Science</p>
          <p>Field of Study: Criminal Justice / Sociology</p>
        </div>
        <Image src={brkPrt} height="400" width="800"/>
        
      </div>
    </div>
    <div class='light x1'></div>
    <div class='light x2'></div>
    <div class='light x3'></div>
    <div class='light x4'></div>
    <div class='light x5'></div>
    <div class='light x6'></div>
    <div class='light x7'></div>
    <div class='light x8'></div>
    <div class='light x9'></div>
    </>
  )
}
