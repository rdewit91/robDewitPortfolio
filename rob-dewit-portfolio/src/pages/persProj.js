import React from 'react'
import styles from '@/styles/persProj.module.css'

export default function persProj() {
  return (
    <>
    <div className={styles.persProjBox} >
      <div className={styles.persProjHead} >
        <h1>WELCOME TO MY PERSONAL PROJECTS!!!</h1>
        <p>Here are my most recent coding projects to practice my skills and showcase my coding proficiency</p>
      </div>

      <div className={styles.persProjColm} >
        <div className={styles.persProjLink} >
          <h2>ROBS ARCADE</h2>

          <h4>Coming soon!</h4>
        </div>

        <div className={styles.persProjLink} >
          <h2>ROBS STORE</h2>

          <h4>Coming soon!</h4>
        </div>

        <div className={styles.persProjLink} >
          <h2>ROBS EFFECTS</h2>

          <h4>Coming soon!</h4>
        </div>

        <div className={styles.persProjLink} >
          <h2>ROBS FITTNESS APP</h2>

          <h4>Coming soon!</h4>
        </div>
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
