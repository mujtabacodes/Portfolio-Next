import { ISectionHeader } from '@/types/types'
import React from 'react'

export const SectionHeader = ({heading,subTitle,align}:ISectionHeader) => {
  return (
    <div className='flex flex-col '>

    <h1>{heading}</h1>
    <h5>{subTitle}</h5>
    </div>
  )
}
