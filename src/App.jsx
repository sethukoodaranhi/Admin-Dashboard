import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './pages/auth/Login'
import { privateRoutes, publicRoutes } from './router'
import { Routes, Route } from 'react-router-dom';
import AuthContext from './context/AuthContext'
import { useRoutes } from 'react-router-dom';

function App() {
  const { token } = useContext(AuthContext)
  console.log("==tokendfd====", token)

  const renderRoutes = (routes) =>
    routes.map(({ path, element, index, children }, i) => (
      <Route
        key={i}
        path={index ? '' : path}
        index={index}
        element={element}
      >
        {children && renderRoutes(children)}
      </Route>
    ));

  return (
    <>
      <Routes>
        {
          token ? renderRoutes(privateRoutes) : renderRoutes(publicRoutes)
        }

      </Routes>

    </>
  )
}


export default App
