import React from 'react'
import HomePage from '../presentations/home/HomePage'
import { Route, Routes } from 'react-router-dom'

const HomePageRoute = () => {
  return (
    <div>
      <Routes>
        <Route>
          <Route index element={<HomePage />} />
          {/* <Route path='/create' element={<DriverForm />} />
          <Route path={`:id`} element={<DriverDetailPages />} />
          <Route path={`:id/edit`} element={<DriverForm edit={true} />} /> */}
        </Route>
        {/* more route here */}
      </Routes>
    </div>
  )
}

export default HomePageRoute
