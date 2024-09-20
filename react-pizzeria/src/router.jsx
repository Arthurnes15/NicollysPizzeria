import { createBrowserRouter } from 'react-router-dom';
import { Login } from './views/login/index.jsx';
import { Register } from './views/register/index.jsx';
import { DefaultLayout } from '../components/DefaultLayout.jsx';
import { GuestLayout } from '../components/GuestLayout.jsx';
import { Home } from './views/home/index.jsx';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <DefaultLayout/>,
        children: [
            {
                path: '/home',
                element: <Home />
            },
        ]
    }, 
    {
        path: '/',
        element: <GuestLayout />,
        children: [
            {
                path: '/login',
                element: <Login />
            },                       
            {
                path: '/register',
                element: <Register />
            }

        ]
    }
])
