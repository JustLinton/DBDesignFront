import { lazy } from 'react';

// project imports
import Loadable from 'ui-component/Loadable';
import MinimalLayout from 'layout/MinimalLayout';

// login option 3 routing
const AuthLogin3 = Loadable(lazy(() => import('views/pages/authentication/authentication3/Login3')));
const AuthRegister3 = Loadable(lazy(() => import('views/pages/authentication/authentication3/Register3')));

//errors
const UnderConstruction = Loadable(lazy(() => import('views/pages/other/emptypages/construction.js')));

//landing
const LandingPage = Loadable(lazy(() => import('views/pages/landing/landingpages/page_landing')));

// ==============================|| AUTHENTICATION ROUTING ||============================== //

const AuthenticationRoutes = {
    path: '/',
    element: <MinimalLayout />,
    children: [

            //main page
        {
            path: '/',
            element: <AuthLogin3 />
        },


            //error pages
        {
            path: '/error/construction',
            element: <UnderConstruction />
        },


             //landing pages
        {
            path: '/landing',
            element: <LandingPage />
        },


             //authentacations
        {
            path: '/auth/login',
            element: <AuthLogin3 />
        },
        {
            path: '/auth/register',
            element: <AuthRegister3 />
        },
        
    ]
};

export default AuthenticationRoutes;
