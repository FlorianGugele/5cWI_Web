import React from 'react'
import Card from '../components/ui/cars/Card'
import { Car } from '../lib/types/types';

type Props = {}

const car: Car = {
  name:"Super Car",
  type:"Porsche GT3RS",
  color:"gray",
  motor:{
    serialNumber:1234,
    hp: 525
  },
};

export default function page({}: Props) {
  return (
    <div>
      <p>Cars</p>
      <Card car={car} />
    </div>
  )
}