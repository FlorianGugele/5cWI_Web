"use client";
import { Car } from '@/app/lib/types/types'
import React, { useState } from 'react'

type Props = { car: Car }

export default function Card({ car }: Props) {
    const [isActive, setisActive] = useState(false);

    return (
        <div className={`p-4 shadow ${isActive?"bg-amber-400":"bg-gray-500"}`} onClick={()=>{setisActive(!isActive)}}>
            <h2 className='font-bold text-3xl'>{car.name}</h2>
            <div>{car.type}</div>
            {isActive? "active":"inactive"}
        </div>
    )
}