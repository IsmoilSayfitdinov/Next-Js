import React from 'react'
import Link from 'next/link'
function Header() {
  return (
   <header>
     <h1><Link style={{color: "white", textDecoration: "none"}} href="/">NextJS</Link></h1>
     <nav>
       <Link href="/">Home</Link>
       <Link href="/about">About</Link>
       <Link href="/contact">Contact</Link>
     </nav>
     <div className='login'>
       <Link href="/login">Login</Link>
       <Link href="/register">Register</Link>
     </div>
   </header>
  )
}

export default Header