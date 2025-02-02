import Image from 'next/image'
import React from 'react'


const values = [
    { id: 1, title: "Innovons ensemble", icon: 'https://placehold.co/300x300.png' },
    { id: 2, title: "Aimez votre travail", icon: 'https://placehold.co/300x300.png' },
    { id: 3, title: "Ayez confiance en vous", icon: 'https://placehold.co/300x300.png' },
    { id: 4, title: "Faites preuve de curiosit ", icon: 'https://placehold.co/300x300.png' },]
export default function Values() {
    return (

        <section className='bg-gray-100'>
            <div className='section'>
                <h2 className='font-semibold text-4xl text-center'>Nos Valeurs</h2>
                <div className='grid grid-cols-4 gap-6 mt-8'>
                    {values.map(value => (
                        <div key={value.id} className='bg-white shadow-md flex flex-col items-center text-center  border-primary rounded-md py-6'>
                            <Image width={100} height={100} src={value.icon} alt={value.title} className='mb-8 rounded-md' />
                            <h3 className='text-xl font-medium'>{value.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
