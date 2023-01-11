import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';
import { useUser } from '../hooks/useUser';
import { Login } from '../pages/login/Login';
import { DashboardRoutes } from './DashboardRoutes';
import { PublicRouter } from './PublicRouter';

export const AppRouter = () => {
  const { getUser } = useUser()
  const user = getUser()

  return (
      <div className='bg-gray-primary'>
        <Routes>
            {
              user 
              ? 
              <Route path='*' element={ <DashboardRoutes /> } /> 
              :
              <Route path='*' element={ <PublicRouter /> } /> 
            }
              
            <Route path='*' element={<Navigate to='/login' replace />} />
            
        </Routes>
      </div>
  )
}
