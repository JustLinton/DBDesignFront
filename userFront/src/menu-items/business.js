// assets
import {  IconNotebook, IconShadow,IconUsers,IconDropletFilled2,IconMessageReport } from '@tabler/icons';

// constant
const icons = {
    IconMessageReport,
    IconNotebook,
    IconShadow,
    IconUsers,
    IconDropletFilled2
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
            icon: icons.IconNotebook,
            breadcrumbs: false
        },       
        {
            id: 'function.essentials.report',
            title: '情况上报',
            type: 'item',
            url: '/utils/util-color',
            icon: icons.IconMessageReport,
            breadcrumbs: false
        },
        {
            id: 'function.waterman.root',
            title: '水务管理',
            type: 'collapse',
            icon: icons.IconDropletFilled2,
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
        },
        {
            id: 'function.userman.root',
            title: '业主和用户管理',
            type: 'collapse',
            icon: icons.IconUsers,
            children: [
                {
                    id: 'function.userman.overview',
                    title: '用户总览',
                    type: 'item',
                    url: '/manage/userman/overview',
                    breadcrumbs: false
                }
            ]
        }
    ]
};

export default items  ;
