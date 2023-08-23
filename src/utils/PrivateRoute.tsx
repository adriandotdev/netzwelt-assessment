import axios from 'axios'
import { Outlet, Navigate, useLoaderData } from 'react-router-dom'

function PrivateRoute() {

    const isAuthenticated = useLoaderData();

    if (isAuthenticated) {
        return <Outlet />
    }

    return <Navigate to="/account/login" replace={true} />
}

export const PrivateRouteVerifier = async () => {

    try {

        const response = await axios.post(`${import.meta.env.PROD ? import.meta.env.VITE_PROD_LINK : import.meta.env.VITE_DEV_LINK}/api/verify`, {}, { withCredentials: true });

        return response.status;
    }
    catch (err) {

        return null;
    }
}

export default PrivateRoute