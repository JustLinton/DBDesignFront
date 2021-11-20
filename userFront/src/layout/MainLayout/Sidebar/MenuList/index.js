// material-ui
import { Typography } from '@mui/material';
// import PropTypes from 'prop-types';

// project imports
import NavGroup from './NavGroup';
import menuItem from 'menu-items';

// ==============================|| SIDEBAR MENU LIST ||============================== //

const MenuList = (props) => {
    const navItems = menuItem.items.map((item) => {
        switch (item.type) {
            case 'group':
                // console.log(item.id);
                // console.log(userData);
                if(props.userData['Name']==='加载中...')return <></>;
                if((props.userData['SidebarC'])[item.id]>0){
                    return <NavGroup userData={props.userData} key={item.id} item={item} />;
                }else{
                    return <></>;
                }
                
            default:
                return (
                    <Typography key={item.id} variant="h6" color="error" align="center">
                        Menu Items Error
                    </Typography>
                );
        }
    });

    return <>{navItems}</>;
};

export default MenuList;
