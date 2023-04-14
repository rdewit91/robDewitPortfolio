import React from 'react'
import styles from '@/styles/persProj.module.css'
import Image from 'next/image'
import arcd from '../styles/assets/persProj/arcade.jpg'
import cart from '../styles/assets/persProj/cart.jpg'
import efct from '../styles/assets/persProj/effect.jpg'
import fitApp from '../styles/assets/persProj/fitness.jpg'

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
          <h2 className={styles.persProjText} >ROBS ARCADE</h2>
          <Image src={arcd} alt='arcdImg' height="200" width="200" />
          <p className={styles.persProjText} >This website demonstrates my proficiency with javascript through 3 fun games while using React and Next!</p>
          <button>
            <h4>Coming soon!</h4>
          </button>
        </div>

        <div className={styles.persProjLink} >
          <h2 className={styles.persProjText} >ROBS STORE</h2>
          <Image src={cart} alt="cartImg" height="200" width="200" />
          <p className={styles.persProjText} > This website demonstrates my proficiency with backend skills through an ecommerce store while using supabase!</p>
          <button>
            <h4>Coming soon!</h4>
          </button>
        </div>

        <div className={styles.persProjLink} >
          <h2 className={styles.persProjText} >ROBS EFFECTS</h2>
          <Image src={efct} alt="efctImg" height="200" width="200" />
          <p className={styles.persProjText} >This website demonstrates my proficiency with css through a art show using CSS and Tailwind!!!</p>
          <button>
            <h4>Coming soon!</h4>
          </button>
        </div>

        <div className={styles.persProjLink} >
          <h2 className={styles.persProjText} >ROBS FITNESS APP</h2>
          <Image src={fitApp} alt="fitAppImg" height="200" width="200" />
          <p className={styles.persProjText} >This website demonstrates my proficiency in all of the three previous projects all in one fitness app!!!</p>
          <button>
            <h4>Coming soon!</h4>
          </button>
        </div>

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
