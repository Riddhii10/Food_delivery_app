'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { assets } from '../../../Assets/assets'
import { useRouter,usePathname } from 'next/navigation';


const RestaurantHeader = () => {
    const [details,setDetails]=useState();
    const router=useRouter();
    const pathName=usePathname();

    useEffect(()=>{
        let data=localStorage.getItem("restaurantUser");
        console.log('pathname: ',pathName)
        console.log("data : ",data)
        if(!data && pathName=="/restaurant/dashboard"){
            router.push("/restaurant")
        }
        else if(data && pathName=="/restaurant"){
            router.push("/restaurant/dashboard")
        }
        else{
            setDetails(JSON.parse(data))
        }
    },[])

    const logout=()=>{
        localStorage.removeItem("restaurantUser");
        router.push("/restaurant")
    }
  return (
    <div className='header-wrapper'>
        <div className='logo'>
            <Image src={assets.logo} className='logo-img'/>
        </div>
        <ul >
            <li>
                <Link href={"/"}>Home</Link>
            </li>
            {
                details && details.name?
                <>
                    <li><button onClick={logout}>Logout</button></li>
                    <li><Link href={"/"}>Profile</Link></li>
                </>
                :
                <li><Link href={"/"}>Login/Signup</Link></li>
            }   
        </ul>
    </div>
  )
}

export default RestaurantHeader