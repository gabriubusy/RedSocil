import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Home } from '../pages/home/Home'
import { Topbar } from "../components/topbar/Topbar";
import { Profile } from '../pages/profile/Profile';

export const DashboardRoutes = () => {
  return (
    <>
        <Topbar />

        <div className=''>
            <Routes>
                <Route exact="true" path="/home" element={ <Home /> }></Route>
                <Route exact="true" path="/profile" element={ <Profile /> }></Route>
                <Route path="*" element={<Navigate to="/home" />} ></Route>
            </Routes>
        </div>
    </>
  )
}
