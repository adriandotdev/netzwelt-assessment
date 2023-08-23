import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider, Navigate } from 'react-router-dom';

import PrivateRoute from './utils/PrivateRoute';
import LoginPage from './pages/LoginPage';
import Home from './pages/Home';
import './App.css';

// Loaders
import { VerifierLoader } from './pages/LoginPage';
import { HomeVerifierLoader } from './pages/Home';
import { PrivateRouteVerifier } from './utils/PrivateRoute';

const router = createBrowserRouter(

  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route element={<PrivateRoute />} loader={PrivateRouteVerifier}>
        <Route index path="/home/index" element={<Home />} loader={HomeVerifierLoader} />
      </Route>
      <Route path="/account/login" element={<LoginPage />} loader={VerifierLoader} />
    </Route>
  )
)
function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App