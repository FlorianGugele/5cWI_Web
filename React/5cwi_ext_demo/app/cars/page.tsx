import React from 'react'
import Card from '../components/ui/cars/Card'
import { Car } from '../lib/types/types';
import CarList from '../components/ui/cars/CarList';

type Props = {}

const car: Car [] =[
  {
    "name": "Super Car",
    "type": "Porsche GT3RS",
    "color": "gray",
    "motor": {
      "serialNumber": 1234,
      "hp": 525
    }
  },
  {
    "name": "Speedster",
    "type": "Ferrari 488 Pista",
    "color": "red",
    "motor": {
      "serialNumber": 5678,
      "hp": 711
    }
  },
  {
    "name": "Beast",
    "type": "Lamborghini Huracan STO",
    "color": "blue",
    "motor": {
      "serialNumber": 9101,
      "hp": 631
    }
  },
  {
    "name": "Thunder",
    "type": "McLaren 765LT",
    "color": "orange",
    "motor": {
      "serialNumber": 1121,
      "hp": 755
    }
  },
  {
    "name": "Shadow",
    "type": "Aston Martin Vantage",
    "color": "black",
    "motor": {
      "serialNumber": 3141,
      "hp": 503
    }
  }
]
export default function page({}: Props) {
  return (
    <div>
      <p>Cars</p>
        <CarList cars={car}/>
    </div>
  )
}