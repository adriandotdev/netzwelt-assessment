import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import Home from './pages/Home';
import './App.css';

// Loaders
import { VerifierLoader } from './pages/LoginPage';
import { HomeVerifierLoader } from './pages/Home';

const router = createBrowserRouter(

  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/account/login" element={<LoginPage />} loader={VerifierLoader} />
      <Route index path="/home" element={<Home />} loader={HomeVerifierLoader} />
    </Route>
  )
)
function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App