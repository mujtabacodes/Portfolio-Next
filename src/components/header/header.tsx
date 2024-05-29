import React from 'react'
import Design3D from '../design-3D';
import { cn } from '@/lib/utils';
import { T24 } from '@/styles/typos';
export const Header = () => {
  return (
    <div className={cn('w-full h-full items-center justify-between p-10 flex flex-col-reverse md:flex-row')}>
      <div className='w-1/2'>
        <T24 className="">Hello 👋 My name is </T24>
      </div>
        <Design3D/>
    </div>
  )
}
