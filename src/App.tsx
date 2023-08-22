import React from 'react'
import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import Home from './pages/Home';
import './App.css';

// Loaders
import { VerifierLoader } from './pages/LoginPage';

const router = createBrowserRouter(

  createRoutesFromElements(
    <Route>
      <Route path="/account/login" element={<LoginPage />} loader={VerifierLoader} />
      <Route path="/home/" element={<Home />} />
    </Route>
  )
)
function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App