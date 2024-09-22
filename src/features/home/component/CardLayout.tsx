import React from 'react'

const CardLayout = () => {
    return (
        <div className='max-w-[1000px] rounded-md bg-white h-[50rem] relative -mt-[18rem] z-40 mx-auto shadow-md'>
            <Title title="BEST SELLERS"/>
        </div>
    )
}

export default CardLayout


const Title = ({ title }: any) => {
    return (
        <div className='w-full px-[2rem] py-[1.5rem] flex items-center gap-4'>
            <h1 className='font-bold text-[20px]'>
                {title ?? "Title Here"}
            </h1>
            <div className='w-[82%] mt-1 h-[1.5px] bg-gray-300'>

            </div>
        </div>
    )
}