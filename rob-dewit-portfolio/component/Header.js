import React from 'react'
import Link from 'next/link'
import headStyles from '@/styles/header.module.css'
// import RiBriefcase4Fill from 'react-icons/ri'

export default function Header() {
  return (
    <>
    <nav style={{ background: '#1F51FF' ,border: 'solid black 3px', display: 'flex', justifyContent: 'space-evenly' }}>
        {/* <div>
            <RiBriefcase4Fill />
        </div> */}
        <div style={{ border: 'solid black 3px', display: 'inline' }}>
            <Link style={{ textDecoration: 'none', color: '#fffffc', padding: '5px', margin: '5px' }} href='/' >
                HOME
            </Link>
        </div>
        <div style={{ border: 'solid black 3px', display: 'inline' }}>
            <Link style={{ textDecoration: 'none', color: '#fffffc', padding: '5px', margin: '5px' }} href='/abtMe' >
                ABOUT ME
            </Link>
        </div>
        <div style={{ border: 'solid black 3px', display: 'inline' }}>
            <Link style={{ textDecoration: 'none', color: '#fffffc', padding: '5px', margin: '5px' }} href='/persProj' >
                PERSONAL PROJECTS
            </Link>
        </div>
        <div style={{ border: 'solid black 3px', display: 'inline' }}>
            <Link style={{ textDecoration: 'none', color: '#fffffc', padding: '5px', margin: '5px' }} href='/myExp' >
                MY EXPERIANCE
            </Link>
        </div>
        <div style={{ border: 'solid black 3px', display: 'inline' }}>
            <Link style={{ textDecoration: 'none', color: '#fffffc', padding: '5px', margin: '5px' }} href='/myEdu' >
                My EDUCATION
            </Link>
        </div>
        <div style={{ border: 'solid black 3px', display: 'inline' }}>
            <Link style={{ textDecoration: 'none', color: '#fffffc', padding: '5px', margin: '5px' }} href='/cntcMe' >
                CONTACT ME
            </Link>
        </div>
    </nav>
    </>
  )
}

