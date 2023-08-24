/* eslint-disable @typescript-eslint/no-explicit-any */
import Location from '../components/Location';
import { useNavigate, useLoaderData } from 'react-router-dom';
import axios from 'axios';
import Territory from '../interfaces/Territory';

function Home() {

    const navigate = useNavigate();
    const data = useLoaderData() as Territory[];

    const logout = async () => {

        await axios.post(`${import.meta.env.PROD ? import.meta.env.VITE_PROD_LINK : import.meta.env.VITE_DEV_LINK}/account/logout`, {}, { withCredentials: true });
        navigate('/account/login');
    }

    return (
        <main className='mx-5 my-4'>

            <div className='mx-3 d-flex align-items-center gap-3'>
                <h1 >Territories</h1>
                <button onClick={logout} className='btn btn-danger'>Logout</button>
            </div>

            <p className='mx-3'>Here are the list of territories</p>
            <ul>
                {
                    data.map(location => (<Location key={location.id} location={location} />))
                }
            </ul>
        </main>
    )
}

export const HomeVerifierLoader = async () => {

    try {

        const response = await axios.get(`${import.meta.env.PROD ? import.meta.env.VITE_PROD_LINK : import.meta.env.VITE_DEV_LINK}/home/index`, { withCredentials: true });

        return response.data;
    }
    catch (err) {

        return null;
    }
}

export default Home