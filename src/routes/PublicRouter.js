import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';
import { Login } from '../pages/login/Login';

export const PublicRouter = () => {
  return (
    <>
        <Routes>
            <Route path='login' element={<Login />} />
            <Route path='*' element={<Navigate to='/login' replace />} />
        </Routes>
    </>
  )
}
