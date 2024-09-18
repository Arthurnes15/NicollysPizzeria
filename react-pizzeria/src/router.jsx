import { createBrowserRouter } from 'react-router-dom';
import { Login } from './views/login/login.jsx';
import { Register } from './views/register';
import { DefaultLayout } from '../components/DefaultLayout.jsx';
import { GuestLayout } from '../components/GuestLayout.jsx';
import { Home } from './views/home.jsx';

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
