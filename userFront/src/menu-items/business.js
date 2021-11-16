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

const items = {
    id: 'sidebar.manage',
    title: '业务管理 / Management',
    caption: '做社区的管理者',
    type: 'group',
    children: [
        {
            id: 'function.essentials.things',
            title: '事务',
            type: 'item',
            url: '/utils/util-color',
            icon: icons.IconPalette,
            breadcrumbs: false
        },       
        {
            id: 'function.essentials.report',
            title: '情况上报',
            type: 'item',
            url: '/utils/util-color',
            icon: icons.IconTypography,
            breadcrumbs: false
        },
        {
            id: 'function.waterman.root',
            title: '水务管理',
            type: 'collapse',
            icon: icons.IconWindmill,
            children: [
                {
                    id: 'function.waterman.rec',
                    title: '在线抄表',
                    type: 'item',
                    url: '/manage/waterman/rec',
                    breadcrumbs: false
                },
                {
                    id: 'function.waterman.userman',
                    title: '业主管理',
                    type: 'item',
                    url: '/manage/waterman/userman',
                    breadcrumbs: false
                }
            ]
        }
    ]
};

export default items  ;
