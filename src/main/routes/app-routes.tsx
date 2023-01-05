import React, { Suspense, useContext, useEffect } from 'react'
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom'
import { FullScreenLoader } from '@presentation/components/full-screen-loader/full-screen-loader'
import Login from '@presentation/pages/login'
import Home from '@presentation/pages/home'
import { PostulacionesProvider } from '@presentation/pages/context/postulaciones-provider'
import { Layout } from '@presentation/pages/layout'
import { ParameterFactory } from '@main/factories/parameter-factory'
import { AuthenticationFactory } from '@main/factories/login-factory'
import { EncuestaFactory } from '@main/factories/encuesta-factory'

function AppRoutes() {
  const repositories = {
    parameter: ParameterFactory,
    auth: AuthenticationFactory,
    encuesta: EncuestaFactory,
  }
  return (
    <Suspense fallback={<FullScreenLoader />}>
      <PostulacionesProvider parameterRepository={repositories.parameter}>
        <HashRouter>
          <Routes>
            <Route
              index
              path="/evaluacion"
              element={
                <Login
                  auth={repositories.auth}
                  encuesta={repositories.encuesta}
                />
              }
            />
            <Route path="/evaluacion" element={<Layout />}>
              <Route
                path="home/*"
                element={<Home encuesta={repositories.encuesta} />}
              />
            </Route>
            <Route path="*" element={<Navigate to="/evaluacion" replace />} />
          </Routes>
        </HashRouter>
      </PostulacionesProvider>
    </Suspense>
  )
}

export default AppRoutes
