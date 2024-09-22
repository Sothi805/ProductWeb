import SlideShow from '@/components/SlideShow'
import React from 'react'
import CardLayout from './component/CardLayout'

const HonmePage = () => {
    return (
        <div className=''>
            <div className='mx-3'>
                <SlideShow />
            </div>
            <div>
                <CardLayout />
            </div>
        </div>
    )
}

export default HonmePage