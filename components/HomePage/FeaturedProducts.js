import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { LuCircleArrowRight } from "react-icons/lu";


const products = [
    { id: 1, image: 'https://placehold.co/400x400.png', name: 'ZLP1000/1', link: '/' },
    { id: 2, image: 'https://placehold.co/400x400.png', name: 'ZLP1000/2', link: '/' },
    { id: 3, image: 'https://placehold.co/400x400.png', name: 'ZLP1000/3', link: '/' },
    { id: 4, image: 'https://placehold.co/400x400.png', name: 'ZLP1000/3', link: '/' },
]
export default function FeaturedProducts() {
    return (
        <section className='section !pt-0'>
            {/* <h2 className='font-bold text-4xl text-center mb-10 text-orange-600 uppercase'>Catégories en vedette</h2> */}
            <div className='grid grid-cols-4 gap-8 mb-6'>
                {products.map((product) => (
                    <div key={product.id} className="bg-white shadow-md rounded-lg overflow-hidden hover:scale-95">
                        <Image src={product.image} alt={product.name} width={400} height={400} className="w-full aspect-video object-cover" />
                        <div className="flex items-center p-4">
                            <Link href={product.link} className="mx-auto text-xl font-medium px-4 py-2 hover:bg-primary hover:text-white rounded-full flex items-center gap-4 ">
                                {product.name}
                                <LuCircleArrowRight className='text-2xl' />
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
            <Link href={'/'}
                className='text-xl font-medium  px-4 py-2 bg-primary text-white rounded-full flex items-center justify-center gap-4 hover:scale-95 w-[180px] mx-auto'>
                <span>Voir Plus</span>
                <LuCircleArrowRight className='text-3xl' />
            </Link>
        </section>
    )
}
