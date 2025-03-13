import { Car } from '@/app/lib/types/types'
import React from 'react'

type Props = { car:Car}

export default function Card({car}: Props) {
  return (
    <div className='border-2 p-2 bg-green-400'>
        <h2>{car.name}</h2>
        <div>{car.type}</div>
    </div>
  )
}