import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AuthLayout from '../layouts/AuthLayout'
import { GeneralLayout } from '../layouts/GeneralLayout'
import { PublicRoutes } from './PublicRoutes'
import { PrivateRoutes } from './PrivateRoutes'


export const AppRoutes = () => {

  const isLogged = false;

  return (
    <Routes>
        <Route path='/auth/*' element={
          <PublicRoutes isLogged={isLogged}>
              <AuthLayout />
          </PublicRoutes>
        }/>

        <Route path='/*' element={
            <PrivateRoutes isLogged={isLogged}>
                <GeneralLayout />
            </PrivateRoutes>
        } />
    </Routes>
  )
}
