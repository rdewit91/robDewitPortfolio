import React from 'react'
import styles from '@/styles/myEdu.module.css'

export default function myEdu() {
  return (
    <>
    <div className={styles.myEduBox} >
      <div className={styles.myEduHead} >
        <h1>WELCOME TO MY EDUCATION PAGE!!</h1>
        <p>Here are my most academic achievments</p>
      </div>
      <br></br>
      <br></br>
      <div className={styles.myEduData} >
        <h1>FullStack Academy</h1>

      </div>
      <br></br>
      <br></br>
      <br></br>
      <div className={styles.myEduData} >
        <h1>State University of New York at Brockport</h1>

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
