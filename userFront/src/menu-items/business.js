// assets
import { IconTypography, IconPalette, IconShadow, IconWindmill } from '@tabler/icons';

// constant
const icons = {
    IconTypography,
    IconPalette,
    IconShadow,
    IconWindmill
};

// ==============================|| UTILITIES MENU ITEMS ||============================== //

const utilities = {
    id: 'utilities',
    title: '业务管理 / Management',
    type: 'group',
    children: [
        {
            id: 'things',
            title: '事务',
            type: 'item',
            url: '/utils/util-color',
            icon: icons.IconPalette,
            breadcrumbs: false
        },       
        {
            id: 'issue',
            title: '情况上报',
            type: 'item',
            url: '/utils/util-color',
            icon: icons.IconTypography,
            breadcrumbs: false
        },
        {
            id: 'icons',
            title: '水务管理',
            type: 'collapse',
            icon: icons.IconWindmill,
            children: [
                {
                    id: 'water_chaobiao',
                    title: '在线抄表',
                    type: 'item',
                    url: '/icons/tabler-icons',
                    breadcrumbs: false
                },
                {
                    id: 'material-icons',
                    title: '业主管理',
                    type: 'item',
                    url: '/icons/material-icons',
                    breadcrumbs: false
                }
            ]
        }
    ]
};

export default utilities;
