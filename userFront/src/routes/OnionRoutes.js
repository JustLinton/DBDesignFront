import { lazy } from 'react';

// project imports
import LandingLayout from 'layout/LandingLayout';
import Loadable from 'ui-component/Loadable';

//forums
const ForumProfile = Loadable(lazy(() => import('views/pages/forum/forumpages/page_socialProfile.js')));
const AccountSettings = Loadable(lazy(() => import('views/pages/forum/forumpages/page_accountSettings.js')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/onion',
    element: <LandingLayout />,
    children: [
        {
            path: '/',
            element: <ForumProfile/>
        }, 
        {
            path: '/profile',
            element: <ForumProfile/>
        }, 
        {
            path: '/account',
            element: <AccountSettings/>
        },
    ]
};

export default MainRoutes;
