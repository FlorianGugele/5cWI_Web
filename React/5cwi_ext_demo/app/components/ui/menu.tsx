import Link from 'next/link'
import React from 'react'

type Props = {}

export default function Menu({}: Props) {
  return (
    <div>
        <ul className="flex p-4">
            <li className='p-2 hover:bg-green-400'>
                <Link href="/">Home</Link>
            </li>
            <li className='p-2 hover:bg-red-400'>
                <Link href="/cars">Cars</Link>
            </li>
        </ul>
    </div>
  )
}