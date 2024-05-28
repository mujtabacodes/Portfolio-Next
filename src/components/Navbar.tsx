import React from 'react'
import { ModeToggle } from './theme-switcher/mode-toggle'

export const Navbar = () => {
  return (
    <div className='border-[1px] border-white rounded-full p-4 px-10 flex justify-between items-center'>
      <h1 className='text-3xl font-bold'>Logo</h1>
      <ul className='flex gap-2'>
        <li>About</li>
        <li>Projects</li>
        <li>Experience</li>
      </ul>

      <ul className='flex gap-3 items-center'>
        <li> <ModeToggle/></li>
        <li>|</li>
        <li>Contact me</li>
      </ul>

    </div>
  )
}
