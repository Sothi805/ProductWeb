import React from 'react'

const SlideShow = () => {
    return (
        <div id="carouselExample" className="carousel slide">
            <div className="carousel-inner min-xl:h-[30rem] xl:h-[25rem] lg:h-[23rem] md:h-[20rem] sm:h-[17rem] d-sm:h-[14rem]">
                <div className="carousel-item active">
                    <img src="https://cdn.sabay.com/cdn/media.sabay.com/media/sabay-news/Ent-Int/Korea/Korean-268/66e8eed4274ac_1726541520_large.jpg" className="w-full min-xl:h-[30rem] xl:h-[25rem] lg:h-[23rem] md:h-[20rem] sm:h-[17rem] d-sm:h-[14rem]" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="https://cdn.sabay.com/cdn/media.sabay.com/media/Chin-Sopheak/CS-(37)/cs-4/66e7c1ab2d612_1726464420_large.jpg" className="w-full min-xl:h-[30rem] xl:h-[25rem] lg:h-[23rem] md:h-[20rem] sm:h-[17rem] d-sm:h-[14rem]" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="https://cdn.sabay.com/cdn/media.sabay.com/media/Chin-Sopheak/CS-(37)/cs-4/66e7c1b3c76e1_1726464420_large.jpg" className="w-full min-xl:h-[30rem] xl:h-[25rem] lg:h-[23rem] md:h-[20rem] sm:h-[17rem] d-sm:h-[14rem]" alt="..." />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="sm:w-[100px] min-sm:w-[100px] text-white bi bi-chevron-compact-left" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M9.224 1.553a.5.5 0 0 1 .223.67L6.56 8l2.888 5.776a.5.5 0 1 1-.894.448l-3-6a.5.5 0 0 1 0-.448l3-6a.5.5 0 0 1 .67-.223" />
                </svg>               
                 <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="sm:w-[100px]  min-sm:w-[100px] text-white bi bi-chevron-compact-right" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671" />
                </svg>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default SlideShow