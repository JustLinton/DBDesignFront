// assets
import { IconDashboard,IconMap2 } from '@tabler/icons';

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
        },        
        {
            id: 'function.essentials.nmap',
            title: 'Nesto 地图',
            type: 'item',
            url: '/manage/nmap',
            icon: IconMap2,
            breadcrumbs: false
        }
    ]
};

export default dashboard;
