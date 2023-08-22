import React from 'react'
import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter(

  createRoutesFromElements(
    <Route>

    </Route>
  )
)
function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App