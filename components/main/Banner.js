import React from 'react'

export default function Banner({title, backgroundImage}) {
  return (
    <div className='relative h-[400px] bg-cover bg-center bg-no-repeat bg-fixed flex items-center justify-center' style={{backgroundImage: `url(${backgroundImage})`}}>
        <div className='absolute inset-0 bg-black opacity-50'></div>
      <h1 className='relative z-10 text-6xl font-semibold text-white'>{title}</h1>
    </div>
  )
}
