import React from 'react'
import './Header.css'
import logoURL from '../../assets/logo.svg'

export default function Header() {
  return (
    <div className='header'>
        <img src={logoURL} alt="tesla"/>
    </div>
  )
}
