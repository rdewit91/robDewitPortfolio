import React from 'react'
// import styles from '@/styles/Home.module.css'
import abtMeStyles from '@/styles/abtMe.module.css'
import Image from 'next/image'
import vet from '../styles/assets/abtMe/salute.jpg'
import fullStack from '../styles/assets/abtMe/FullStack.jpeg'
import grad from '../styles/assets/abtMe/graduate.jpg'
import learn from '../styles/assets/abtMe/learning.jpg'
import bjjKbx from '../styles/assets/abtMe/martialArt.jpeg'

export default function abtMe() {
  return (
    <>
    <div className={abtMeStyles.abtBox} >
      <div className={abtMeStyles.abtHead} >
        <p>Thank you for taking the time to visit and learn more about me.</p>
      </div>
      <div className={abtMeStyles.abtCont}>
        <Image src={vet} height="500" width="400"/>
        <p className={abtMeStyles.abtRightText} >I am a proud veteran of the US Army, having served the full length of my service contract and receiving an honorable discharge. My time in the US Army taught me the importance of attention to detail and following proper procedures. These skills have been invaluable in my personal and professional life. As a web developer, I apply these lessons every day in my work, ensuring that I deliver quality and follow best practices.</p>
      </div>
      <br></br>
      <div className={abtMeStyles.abtCont}>
        <p className={abtMeStyles.abtLeftText} >I'm a recent graduate of Full-Stack Academy, where I developed proficiency in various web development technologies such as JavaScript, HTML, and CSS, and gained familiarity with other frontend technologies such as React.js, Next.js, and Tailwind.</p>        
        <Image src={fullStack} height="300" width="600"/>
      </div>
      <br></br>
      <div className={abtMeStyles.abtCont}>
        <Image src={grad} height="500" width="400"/>
        <p className={abtMeStyles.abtRightText} >In addition to my technical skills, I hold a Bachelor's degree from the State University of New York at Brockport with a dual major in Criminal Justice and Sociology. </p>
      </div>
      <br></br>
      <div className={abtMeStyles.abtCont} >
        <p className={abtMeStyles.abtLeftText} >I am constantly seeking to learn new things and improve my skills, and I am always willing to work hard for my team. I enjoy working with people from diverse backgrounds and believe that collaboration is key to success.</p>
        <Image src={learn} height="300" width="600"/>
      </div>
      <br></br>
      <div className={abtMeStyles.abtCont} >
        <Image src={bjjKbx} height="300" width="600"/>
        <p className={abtMeStyles.abtRightText} >Outside of work, I enjoy training jiu-jitsu and kickboxing, as well as teaching myself Korean. I believe that staying active and learning new things outside of work keeps me sharp and motivated.</p>
      </div>
      <br></br>
      <div className={abtMeStyles.abtHead} >
        <p>Thank you for taking the time to learn more about me. Please feel free to reach out if you have any questions or would like to discuss potential opportunities to work together.</p>
      </div>
    </div>
    
    <div class='light x4'></div>
    <div class='light x5'></div>
    <div class='light x6'></div>
    <div class='light x7'></div>
    <div class='light x8'></div>
    <div class='light x9'></div>
    </>
    
  )
}
