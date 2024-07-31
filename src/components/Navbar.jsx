import React from 'react'
import NavbarItem from './NavbarItem'


export default function Navbar() {
  return (
    <div className='flex dark:bg-gray-500 bg-amber-100 p-4 lg:text-lg justify-center gap-6'>
        <NavbarItem title="Trendling" 
        param='fetchTrendling'/>


         <NavbarItem title="Top Rated" 
        param='fetchTopRated'/>

    </div>
  )
}
