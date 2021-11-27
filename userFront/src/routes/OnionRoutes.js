import { lazy } from 'react';

// project imports
import LandingLayout from 'layout/LandingLayout';
import Loadable from 'ui-component/Loadable';

//forums
const ForumProfile = Loadable(lazy(() => import('views/pages/forum/forumpages/page_socialProfile.js')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/onion',
    element: <LandingLayout />,
    children: [
        {
            path: '/profile',
            element: <ForumProfile/>
        },
    ]
};

export default MainRoutes;
