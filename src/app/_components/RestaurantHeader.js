import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { assets } from '../../../Assets/assets'

const RestaurantHeader = () => {
  return (
    <div className='header-wrapper'>
        <div className='logo'>
            <Image src={assets.logo} className='logo-img'/>
        </div>
        <ul >
            <li>
                <Link href={"/"}>Home</Link>
            </li>
            <li>
                <Link href={"/"}>Login/SignUp</Link>
            </li>
            <li>
                <Link href={"/"}>Profile</Link>
            </li>
        </ul>
    </div>
  )
}

export default RestaurantHeader