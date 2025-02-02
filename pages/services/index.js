import InfoSection from '@/components/main/InfoSection'
import React from 'react'

export default function index() {
    return (
        <div className='pt-20'>
            <InfoSection title={'Pieces Originales'}
                description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex. Cum sociis natoque penatibus, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex. Cum sociis natoque penatibus, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex. Cum sociis natoque penatibus.'}
                img={'https://placehold.co/500x400.png'}
                alt={'DNA'}
                imgOrder={'order-1'}
                bg={'bg-white'}
            />
            <InfoSection title={'Assitance'}
                description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex. Cum sociis natoque penatibus, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex. Cum sociis natoque penatibus, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex. Cum sociis natoque penatibus.'}
                img={'https://placehold.co/500x400.png'}
                alt={'DNA'}
                imgOrder={'order-0'}
                bg={'bg-gray-100'}
            />
        </div>
    )
}
