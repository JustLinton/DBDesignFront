import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

// dashboard routing
// const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));
const Dashboard = Loadable(lazy(() => import('views/dashboard/Main')));

// // utilities routing
// const UtilsTypography = Loadable(lazy(() => import('views/utilities/Typography')));
// const UtilsColor = Loadable(lazy(() => import('views/utilities/Color')));
// const UtilsShadow = Loadable(lazy(() => import('views/utilities/Shadow')));
// const UtilsMaterialIcons = Loadable(lazy(() => import('views/utilities/MaterialIcons')));
// const UtilsTablerIcons = Loadable(lazy(() => import('views/utilities/TablerIcons')));

const WatermanRec = Loadable(lazy(() => import('views/utilities/waterman_rec')));
const WatermanUserman = Loadable(lazy(() => import('views/utilities/waterman_userman')));
const NeighborMap = Loadable(lazy(() => import('views/utilities/neighborMap')));

// sample page routing
// const SamplePage = Loadable(lazy(() => import('views/sample-page')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/manage',
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element: <Dashboard />
        },
        {
            path: '/dashboard',
            element: <Dashboard />
        },
        {
            path: '/waterman/rec',
            element: <WatermanRec  />
        },
        {
            path: '/nmap',
            element: <NeighborMap  />
        },
        {
            path: '/waterman/userman',
            element: <WatermanUserman  />
        }
    ]
};

export default MainRoutes;
