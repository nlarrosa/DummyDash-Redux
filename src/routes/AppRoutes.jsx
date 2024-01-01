import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import AuthLayout from '../layouts/AuthLayout'
import { GeneralLayout } from '../layouts/GeneralLayout'
import { PublicRoutes } from './PublicRoutes'
import { PrivateRoutes } from './PrivateRoutes'
import { useDispatch, useSelector } from 'react-redux'
import { checkToken } from '../store/slices/auth/authThunks'


export const AppRoutes = () => {

  const { isLogged, isLoading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkToken());
  },[]);

  if(isLoading){
    return (<h1>Iniciando...</h1>);
  }


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
