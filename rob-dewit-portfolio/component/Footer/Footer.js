import React from 'react'
import styles from './Footer.module.css'
import Link from 'next/link'

export default function Footer() {
  return (
    <>
    <nav className={styles.navFootBody} >
      <div  style={{ display: 'inline' }}>
        <Link  style={{ textDecoration: 'none', color: '#fffffc', padding: '0.3125em', margin: '0.3125em' }} href='/' >
            <button className={styles.bttnStyle}  >HOME</button>
        </Link>
      </div>
      <div style={{ display: 'inline' }} >    
        <Link style={{ textDecoration: 'none', color: '#fffffc', padding: '0.3125em', margin: '0.3125em' }} href='https://www.linkedin.com/in/rdewit91/' > 
          <button className={styles.bttnStyle} > LINKEDIN</button>
        </Link>
      </div>
      <div style={{ display: 'inline' }} >
        <Link style={{ textDecoration: 'none', color: '#fffffc', padding: '0.3125em', margin: '0.3125em' }} href='https://github.com/rdewit91' >
          <button className={styles.bttnStyle} >GITHUB</button>
        </Link>
      </div>
    </nav>
    </>
  )
}
