import React from 'react'
import Link from 'next/link'
import styles from './Header.module.css'
// import RiBriefcase4Fill from 'react-icons/ri'

export default function Header() {
  return (
    <>
    <nav className={styles.navBody} >
        {/* <div>
            <RiBriefcase4Fill />
        </div> */}
        <div  style={{ display: 'inline' }}>
            <Link  style={{ textDecoration: 'none', color: '#fffffc', padding: '5px', margin: '5px' }} href='/' >
                <button className={styles.bttnStyle}  >HOME</button>
            </Link>
        </div>
        <div style={{ display: 'inline' }}>
            <Link style={{ textDecoration: 'none', color: '#fffffc', padding: '5px', margin: '5px' }} href='/abtMe' >
                <button className={styles.bttnStyle} >ABOUT ME</button>
            </Link>
        </div>
        <div style={{ display: 'inline' }}>
            <Link style={{ textDecoration: 'none', color: '#fffffc', padding: '5px', margin: '5px' }} href='/persProj' >
                <button className={styles.bttnStyle} >PERSONAL PROJECT&#39;S</button>
            </Link>
        </div>
        <div style={{ display: 'inline' }}>
            <Link style={{ textDecoration: 'none', color: '#fffffc', padding: '5px', margin: '5px' }} href='/myExp' >
                <button className={styles.bttnStyle} > MY EXPERIENCE</button>
            </Link>
        </div>
        <div style={{ display: 'inline' }}>
            <Link style={{ textDecoration: 'none', color: '#fffffc', padding: '5px', margin: '5px' }} href='/myEdu' >
                <button className={styles.bttnStyle} >MY EDUCATION</button>
            </Link>
        </div>
        <div style={{ display: 'inline' }}>
            <Link style={{ textDecoration: 'none', color: '#fffffc', padding: '5px', margin: '5px' }} href='/cntcMe' >
                <button className={styles.bttnStyle}>CONTACT ME</button>    
            </Link>
        </div>
    </nav>
    </>
  )
}

