import React from 'react'
import Footer from '../Footer'
import style from './layoutMain.module.css'
import NavbarProfile from '../NavbarProfile'

const LayoutLoginProfile = ({children, sty, id}) => {
  return (
    <div className={style['main-wrapper']} style={sty}>
        <NavbarProfile id={id}/>
        <div className={`${style['content-wrapper']}`}>
           {children}
        </div>
        <Footer/>
    </div>
  )
}

export default LayoutLoginProfile