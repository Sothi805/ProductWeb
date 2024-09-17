import React from 'react'

const HomePage = () => {
  return (

    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item h-[35rem] active">
          <img className='w-full h-full' src="https://cdn.sabay.com/cdn/media.sabay.com/media/sabay-news/Ent-Int/Korea/Korean-268/66e8eed4274ac_1726541520_large.jpg" class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item h-[35rem]">
          <img className='w-full h-full' src="https://cdn.sabay.com/cdn/media.sabay.com/media/Chin-Sopheak/CS-(37)/cs-4/66e7c1ab2d612_1726464420_large.jpg" class="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item h-[35rem]">
          <img className="w-full h-full" src="https://cdn.sabay.com/cdn/media.sabay.com/media/Chin-Sopheak/CS-(37)/cs-4/66e7c1b3c76e1_1726464420_large.jpg" class="d-block w-100" alt="..." />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        {/* <span className="carousel-control-prev-icon" aria-hidden="true"></span> */}
        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" class="bi bi-chevron-compact-left" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M9.224 1.553a.5.5 0 0 1 .223.67L6.56 8l2.888 5.776a.5.5 0 1 1-.894.448l-3-6a.5.5 0 0 1 0-.448l3-6a.5.5 0 0 1 .67-.223" />
        </svg>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        {/* <span className="carousel-control-next-icon" aria-hidden="true"></span> */}
        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" class="bi bi-chevron-compact-right" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671" />
        </svg>
      </button>
    </div>
  )
}

export default HomePage
