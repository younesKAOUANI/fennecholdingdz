import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { LuCircleArrowRight } from 'react-icons/lu'

export default function InfoSection({ title, description, img, alt, imgOrder, bg = 'bg-gray-100', href  }) {
    return (
        <section className={`${bg}`}>
            <div className='section flex justify-between'>
                <div className='flex flex-col justify-center items-start gap-8 w-1/2 order-1'>
                    <h2 className='font-semibold text-4xl'>{title}:</h2>
                    <p className='text-xl text-justify'>{description}</p>
                    {href ?
                        <Link href={href}
                            className='self-end text-xl font-medium  px-4 py-2 bg-primary text-white rounded-full flex items-center justify-center gap-4 hover:scale-95'>
                            <span>Voir Plus</span>
                            <LuCircleArrowRight className='text-3xl' />
                        </Link>
                        : null}
                </div>
                <Image src={img} alt={alt} width={500} height={400} className={`${imgOrder} object-cover rounded-md shadow-md`} />
            </div>
        </section>
    )
}
