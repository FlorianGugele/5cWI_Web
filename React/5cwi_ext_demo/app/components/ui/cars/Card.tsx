import { Car } from '@/app/lib/types/types'
import React from 'react'

type Props = { car:Car}

export default function Card({car}: Props) {
  return (
    <div className='bg-green-400'>Card:{car.name}</div>
  )
}