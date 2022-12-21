import React, { Suspense, useContext, useEffect } from 'react'
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom'
import { FullScreenLoader } from '@presentation/components/full-screen-loader/full-screen-loader'
import Login from '@presentation/pages/login'
import Home from '@presentation/pages/home'
import { PostulacionesProvider } from '@presentation/pages/context/postulaciones-provider'
import { Layout } from '@presentation/pages/layout'

function AppRoutes() {
  return (
    <Suspense fallback={<FullScreenLoader />}>
      <PostulacionesProvider>
        <HashRouter>
          <Routes>
            <Route path="/evaluacion" element={<Layout />}>
              <Route index element={<Login />} />
              <Route path="home/*" element={<Home />} />
            </Route>
            <Route path="*" element={<Navigate to="/evaluacion" replace />} />
          </Routes>
        </HashRouter>
      </PostulacionesProvider>
    </Suspense>
  )
}

export default AppRoutes
