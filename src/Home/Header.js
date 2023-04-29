import React from 'react'
import { images } from '../assets/Images'

const Header = () => {
  return (
    <div>
      <img src={images.wallpaper} style={{width:"100%", objectFit:"cover"}} />
    </div>
  )
}

export default Header