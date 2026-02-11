import React from 'react'

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
        <ul class ="space-x-8">
            <a href="#">Cart</a>
            <a href="#">WishList</a>
        </ul>
    </nav>
  )
}
