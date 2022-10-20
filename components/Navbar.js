import React from 'react'
import styles from '../styles/Navbar.module.css'
import Link from 'next/link'

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.links}>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="about">
          <a>About</a>
        </Link>
        <Link href="/profile">
          <a>profile</a>
        </Link>

        <Link href="/coins">
          <a>Coin</a>
        </Link>

        <Link href="/자기소개">
          <a>양유나</a>
        </Link>
      </div>
    </div>
  )
}
