import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { HomePage, HotelPage, ListPage } from '../pages'

const MainRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/hotels' element={<ListPage />} />
            <Route path='/hotels/:id' element={<HotelPage />} />
        </Routes>
    )
}

export default MainRoutes