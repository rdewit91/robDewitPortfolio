import React from 'react'
import styles from '@/styles/myExpEdu.module.css'
import Image from 'next/image'
import grda from '../styles/assets/myExpEdu/garda.jpg'
import nxtGen from '../styles/assets/myExpEdu/nxtGen.jpg'
import g4s from '../styles/assets/myExpEdu/g4s.png'

export default function myExp() {
  return (
    <>
    <div className={styles.myBox} >
      <div className={styles.myHead} >
        <h2>WELCOME TO MY EXPERIANCE 2AGE!!!</h2>
        <p>Here are my most recent work experiances</p>
      </div>
      <br></br>
      <br></br>
      <div className={styles.myData} >
        <div className={styles.myText} >
          <h2>Position: Armed Messenger / Driver</h2>
          <h3>Company: Gardaworld</h3>
          <p>Date: Feb/2021 - Nov/2022</p>
          <p>Location: Rochester, NY</p>
          <p>Description:</p>
          <p> -Trusted to operate an armored vehicle and firearm to transport large sums of currency from customer to a sorting center,</p>
          <p> -Maintained a 99% customers serviced and reduce the amount of currency loss</p>
        </div>
        <Image src={grda} alt="grdaImg" height="400" width="400"/>
      </div>
      <br></br>
      <br></br>
      <div className={styles.myData} >
        <div className={styles.myText} >
          <h2>Position: Productions Specialist</h2>
          <h3>Company: NextGen Building Components</h3>
          <p>Location: Farmington, NY</p>
          <p>Date: Aug/2020 - Feb/2021</p>
          <p>Description:</p>
          <p> -Coordinated and Cooperated with others to make designed cuts, complete assembly orders and safely ship out roof trusses.</p>
          <p> -Increased production by 30% while maintaining a high standard of safety in a production environment</p>
        </div>
        <Image src={nxtGen} alt="nxtGenImg" height="400" width="400"/>
      </div>
      <br></br>
      <br></br>
      <div className={styles.myData} >
        <div className={styles.myText} >
          <h2>Position: Customs & Protections Off2cer</h2>
          <h3>Company: G4S Secure S2lutions</h3>
          <p>Location: Rochester, NY</p>
          <p>Date: Oct/2018 - Sep/2020</p>
          <p>Description:</p>
          <p> -Patrolled and maintained a safe commuting environment in a highly populated area transit center</p>
          <p> -Vigilantly and proficiently reacted to medical emergencies and high risk situations</p>
        </div>
        <Image src={g4s} alt="g4sImg" height="400" width="400"/>
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
