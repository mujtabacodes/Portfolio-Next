import React from 'react'
import { ModeToggle } from '../../theme-switcher/mode-toggle'
import { Button } from '../../ui/button'

export const Navbar = () => {
  return (
    <div className='hidden border-[1px] border-slate-500 dark:border-white rounded-full p-4 px-10 md:flex justify-between items-center m-5'>
      <h1 className='text-3xl font-bold'>Logo</h1>
      <ul className='flex gap-2'>
        <li> <Button variant="link">
          <a href="#contact">
            About
            </a>
            </Button></li>
        <li> <Button variant="link">Projects</Button></li>
        <li> <Button variant="link">Experience</Button></li>
      </ul>

      <ul className='flex gap-3 items-center'>
        <li> <ModeToggle/></li>
        <li>|</li>
        <li>
          <Button variant="secondary">Contact Me</Button>
         
        </li>
      </ul>

    </div>
  )
}
