import React from 'react'
import { IoMdCart } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";

export default function Navbar() {
  const navBar= [
  {href:"/",name:"Home"},
  {href:"/",name:"Services",
    dropdown:[
      {name:"Web Development", href:"/"},
      {name:"Web Design", href:"/"},
      {name:"SCO", href:"/"}
    ]
  },
  {href:"/",name:"About",
    dropdown:[
      {name:"Company", href:"/"},
      {name:"Terms", href:"/"},
      {name:"Careers", href:"/"}
    ]
  },
  {href:"/",name:"Contact"}
  ]

  const navIcon=[
    {href:"/",icon:<IoMdCart />},
    {href:"/",icon:<FaRegHeart />}
  ]
  return (
    <>
      <nav className ="bg-black text-white h-15 px-20 flex justify-between items-center text-[18px] font-serif">
        <h1><a href="#" className=' text-2xl'>WebFix</a></h1>
        <ul className =" space-x-20 ">
      {
        navBar.map((v,i)=>(
                <a key={i} href={v.href} className=' hover:text-green-700 hover:animate-pulse text-2xl'>{v.name}</a>
        ))

      }
           
        </ul>
        <ul class =" space-x-5 flex align-middle">
            {
              navIcon.map((v,i)=>(
                <a key={i} href={v.href} className=' text-[26px]' >{v.icon}</a>
              ))
            }

        </ul>
      </nav>
    </>
    
  )
}
