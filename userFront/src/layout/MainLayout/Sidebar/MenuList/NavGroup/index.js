// import PropTypes from 'prop-types';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Divider, List, Typography } from '@mui/material';

// project imports
import NavItem from '../NavItem';
import NavCollapse from '../NavCollapse';

// ==============================|| SIDEBAR MENU LIST GROUP ||============================== //

const NavGroup = (props) => {
    const theme = useTheme();

    // menu list collapse & items
    const items = props.item.children?.map((menu) => {
        switch (menu.type) {
            case 'collapse':
                if(props.userData['Name']==='加载中...')return <></>;
                if((props.userData['FunctionC'])[menu.id]>0){
                return <NavCollapse key={menu.id} menu={menu} level={1} />;
                }else return <></>;
            case 'item':
                if(props.userData['Name']==='加载中...')return <></>;
                if((props.userData['FunctionC'])[menu.id]>0){
                    return <NavItem key={menu.id} item={menu} level={1} />;
                }else return <></>;
           
            default:
                return (
                    <Typography key={menu.id} variant="h6" color="error" align="center">
                        Menu Items Error
                    </Typography>
                );
        }
    });

    return (
        <>
            <List
                subheader={
                    props.item.title && (
                        <Typography variant="caption" sx={{ ...theme.typography.menuCaption }} display="block" gutterBottom>
                            {props.item.title}
                            {props.item.caption && (
                                <Typography variant="caption" sx={{ ...theme.typography.subMenuCaption }} display="block" gutterBottom>
                                    {props.item.caption}
                                </Typography>
                            )}
                        </Typography>
                    )
                }
            >
                {items}
            </List>

            {/* group divider */}
            <Divider sx={{ mt: 0.25, mb: 1.25 }} />
        </>
    );
};

export default NavGroup;
