import React from 'react'
import { IoMdCart } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav class="bg-black text-white h-15 px-20 flex justify-between items-center text-[18px]">
        <h1><a href="#">Logo</a></h1>
        <ul class =" space-x-20 ">
            <a href="#">Home</a>
            <a href="#">Services</a>
            <a href="#">About US</a>
            <a href="#">Contact</a>
        </ul>
        <ul class =" space-x-5 flex align-middle">
            <a href="#" className=' text-[26px]' ><IoMdCart /></a>
            <a href="#" className=' text-[24px] '><FaRegHeart /></a>
        </ul>
    </nav>

    
  )
}
