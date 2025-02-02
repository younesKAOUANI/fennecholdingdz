import React from 'react'
const stats = [
    { label: 'de produits', number: 'Plus de 200 millions' },
    { label: 'catégories de produits', number: 59000 },
    // { label: 'fournisseurs', number: 120 },
    // { label: 'pays et régions', number: 59 },
]
export default function Stats() {
    return (
        <section>
            <div className='section grid grid-cols-3 gap-8 items-center'>
                <div className='col-span-2'>
                    <h2 className='font-semibold text-4xl text-left'>Explorez des millions d'offres adaptées aux besoins de votre entreprise</h2>
                </div>
                <div className='grid grid-cols-2 gap-8'>
                    {stats.map((stat, index) => (
                        <div key={index} className="bg-white shadow-md rounded-lg p-4 border-l-4 border-primary ">
                            <h3 className="text-2xl font-medium">{stat.number}</h3>
                            <p className="text-lg">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
