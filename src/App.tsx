import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider, Navigate } from 'react-router-dom';

import PrivateRoute from './utils/PrivateRoute';
import LoginPage from './pages/LoginPage';
import Home from './pages/Home';
import Error from './pages/Error';

import './App.css';

// Loaders
import { VerifierLoader } from './pages/LoginPage';
import { HomeVerifierLoader } from './pages/Home';
import { PrivateRouteVerifier } from './utils/PrivateRoute';

const router = createBrowserRouter(

  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Navigate to="/home/index" />} />
      <Route element={<PrivateRoute />} loader={PrivateRouteVerifier}>
        <Route index path="/home/index" element={<Home />} loader={HomeVerifierLoader} />
      </Route>
      <Route path="/account/login" element={<LoginPage />} loader={VerifierLoader} />
      <Route path="*" element={<Error />} />
    </Route>
  )
)
function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App