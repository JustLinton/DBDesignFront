// material-ui
import { Typography } from '@mui/material';
import PropTypes from 'prop-types';

// project imports
import NavGroup from './NavGroup';
import menuItem from 'menu-items';

// ==============================|| SIDEBAR MENU LIST ||============================== //

const MenuList = ({userData}) => {
    const navItems = menuItem.items.map((item) => {
        switch (item.type) {
            case 'group':
                // console.log(item.id);
                if(userData['Name']==='加载中...')return undefined;
                if((userData['SidebarC'])[item.id]>0){
                    return <NavGroup userData={userData} key={item.id} item={item} />;
                }else{
                    return undefined;
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

MenuList.propTypes = {
    userData: PropTypes.object
};

export default MenuList;
