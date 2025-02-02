import Image from 'next/image'
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react'
import { IoIosSearch } from "react-icons/io";


export default function Header() {
    return (
        <header className='fixed z-50 w-full bg-white shadow-md'>
            <div className='container mx-auto px-4 md:px-0 py-4 flex justify-between items-center'>
                <Image src='/logo-submark.png' alt='Logo' width={150} height={200} />
                <MainMenu />
                <Search />
            </div>
        </header>
    )
}

function MainMenu() {
    return (
        <ul className='flex gap-10 items-center'>
            <MenuItem href='/' text='Acceuil' />
            <MenuItem href='/products' text='Produits' />
            <MenuItem href='/services' text='Services' />
            <MenuItem href='/leasing' text='Location' />
            <MenuItem href='/about' text='A propos' />
        </ul>
    )
}

export function MenuItem({ href, text }) {
    return (
        <li className='text-xl font-regular hover:text-primary' >
            <Link href={href}>
                {text}
            </Link>
        </li>
    )
}

function Search() {
    const [isOpen, setIsOpen] = useState(false);
    const popupRef = useRef(null);

    const togglePopup = () => setIsOpen((prev) => !prev);

    const handleClickOutside = (event) => {
        if (popupRef.current && !popupRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="relative">
            {/* Search Icon */}
            <IoIosSearch
                className="text-3xl cursor-pointer"
                onClick={togglePopup}
            />

            {/* Popup Input */}
            {isOpen && (
                <div
                    ref={popupRef}
                    className="absolute top-10 right-0 bg-white border border-gray-300 shadow-lg rounded-lg p-2 z-10"
                >
                    <input
                        type="text"
                        placeholder="Search..."
                        className="w-64 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                    />
                </div>
            )}
        </div>
    );
}
