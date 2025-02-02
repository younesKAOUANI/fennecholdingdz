import React from 'react'
import { FaCheck } from "react-icons/fa";
const advantages = [
  { id: 1, title: 'No initial investment', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed' },
  { id: 2, title: 'No maintenance costs', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed' },
  { id: 3, title: 'Flexibility', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed' },
  { id: 4, title: 'Tax benefits', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed' },
];
export default function Advantages() {
  return (
    <section className='bg-gray-100'>
      <div className='section'>
        <h2 className='font-semibold text-4xl text-left'>Advantages</h2>
        <p className='mt-4 text-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed</p>
        <div className='grid grid-cols-2 gap-y-4 gap-x-8 py-4'>
          {advantages.map(({ id, title, description }) => (
            <div key={id} className=" flex gap-2 items-center">
              <FaCheck className='text-primary text-2xl mb-2' />
              <h3 className="text-xl font-medium mb-2">{title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
