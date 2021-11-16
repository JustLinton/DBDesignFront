// assets
import { IconDashboard } from '@tabler/icons';

// constant
const icons = { IconDashboard };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const dashboard = {
    id: 'sidebar.overview',
    title: '总览 / Overview',
    caption: '',
    type: 'group',
    children: [
        {
            id: 'function.essentials.dashboard',
            title: '仪表盘',
            type: 'item',
            url: '/manage/dashboard',
            icon: icons.IconDashboard,
            breadcrumbs: false
        }
    ]
};

export default dashboard;
