import React from 'react'
import Card from './Card'

const CardLayout = () => {
    const myCard = [
        {}, {}, {}, {}
    ]
    return (
        <div className='min-xl:max-w-[80%] xl:max-w-[80%] sm:max-w-[100%] rounded-md bg-white h-[50rem] relative min-xl:-mt-[15rem] xl:-mt-[13rem] md:-mt-[12rem] sm:-mt-0 z-40 mx-auto shadow-md'>
            <Title title="BEST SELLERS" />
            <div className='min-xl:px-[2rem] d-sm:px-[0.5rem] xl:px-[2.2rem] grid min-xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 min-xl:gap-[1.5rem] xl:gap-[2.5rem] lg:gap-[3.5rem] md:gap-[2rem] sm:grid-cols-2 d-sm:gap-2'>
                {myCard?.map((e: any, index: number) => (
                    <div key={index} className='col-span-1'>
                        <Card />
                    </div>
                ))}
            </div>

        </div>
    )
}

export default CardLayout


const Title = ({ title }: any) => {
    return (
        <div className='w-full px-[2rem] py-[1.5rem] gap-3 flex items-center'>
            <h1 className='font-bold min-lg:text-[18px]'>
                {title ?? "Title Here"}
            </h1>
            {/* <div className=' min-lg:w-[85%] md:w-[75%] d-sm:w-[60%] mt-1 h-[1.2px] bg-gray-300'>

            </div> */}
        </div>
    )
}