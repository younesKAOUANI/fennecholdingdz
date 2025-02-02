import React from 'react'
const infoArray = [
    { id: 1, title: "Recherche et Development:", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex. Cum sociis natoque penatibus," },
    { id: 2, title: "Carbotech:", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex. Cum sociis natoque penatibus," },
];

export default function SolutionsSection() {
    return (
        <section style={{ backgroundImage: 'url(https://placehold.co/1080x600)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed' }} className="relative w-full overflow-hidden">
            <div className="absolute w-full h-full bg-black bg-opacity-50"></div>
            <div className='section relative z-10'>
                <h2 className='font-semibold text-4xl text-white text-center mb-10'>Solutions de Pointe</h2>
                <div className='grid grid-cols-2 gap-16 text-white'>
                    {infoArray.map(info => (
                        <div key={info.id} className='py-8 px-6 backdrop-filter backdrop-blur-lg bg-black/10 bg-opacity-50 rounded-lg'>
                            <h3 className='text-3xl font-medium mb-4 text-center'>{info.title}</h3>
                            <p className='text-center text-xl'>{info.description}</p>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    )
}
