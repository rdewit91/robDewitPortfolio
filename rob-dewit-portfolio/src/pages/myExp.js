import React from 'react'
import styles from '@/styles/myExp.module.css'

export default function myExp() {
  return (
    <>
    <div className={styles.myExpBox} >
      <div className={styles.myExpHead} >
        <h1>WELCOME TO MY EXPERIANCE PAGE!!!</h1>
        <p>Here are my most recent work experiances</p>
      </div>
      <br></br>
      <br></br>
      <div className={styles.myExpData} >
        <h1>Armed Messenger / Driver</h1>
        <h2>Gardaworld</h2>

      </div>
      <br></br>
      <br></br>
      <div className={styles.myExpData} >
        <h1>Productions Specialist</h1>
        <h2>NextGen Building Components</h2>

      </div>
      <br></br>
      <br></br>
      <div className={styles.myExpData} >
        <h1>Customs & Protections Officer</h1>
        <h2>G4S Secure Solutions</h2>

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
