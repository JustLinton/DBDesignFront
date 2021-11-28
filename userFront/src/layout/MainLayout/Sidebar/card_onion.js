import PropTypes from 'prop-types';

// material-ui
import { styled, useTheme } from '@mui/material/styles';
import {
    Avatar,
    Card,
    CardContent,
    Grid,
    LinearProgress,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Typography,
    linearProgressClasses
} from '@mui/material';

// assets
import TableChartOutlinedIcon from '@mui/icons-material/TableChartOutlined';

const CardStyle = styled(Card)(({ theme }) => ({
    background: theme.palette.primary.light,
    marginBottom: '22px',
    overflow: 'hidden',
    position: 'relative',
    '&:after': {
        content: '""',
        position: 'absolute',
        width: '157px',
        height: '157px',
        background: theme.palette.primary[200],
        borderRadius: '50%',
        top: '-105px',
        right: '-96px'
    }
}));

// ==============================|| PROGRESS BAR WITH LABEL ||============================== //

// ==============================|| SIDEBAR MENU Card ||============================== //

const MenuCard = () => {
    const theme = useTheme();

    return (
        <CardStyle>
            <CardContent sx={{ p: 2 }} onClick={()=>{window.location="/onion";}} >
                
                <List sx={{ p: 0, m: 0 }}>
                    <ListItem alignItems="flex-start" disableGutters sx={{ p: 0 }}>
                        <ListItemAvatar sx={{ mb: 0 }}>
                            <Avatar
                                variant="rounded"
                                sx={{
                                    ...theme.typography.commonAvatar,
                                    ...theme.typography.largeAvatar,
                                    color: theme.palette.primary.main,
                                    border: 'none',
                                    borderColor: theme.palette.primary.main,
                                    background: '#fff',
                                    marginRight: '12px'
                                }}
                            >
                                <TableChartOutlinedIcon fontSize="inherit" />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            sx={{ mb: -1 }}
                            primary={
                                <Typography sx={{ fontSize: '1.1rem', fontWeight: 600, mr: 0, mt: 0.3, mb: 0.3 , color: theme.palette.primary[800]}}>
                                    回到洋葱圈
                                </Typography>
                            }
                            secondary={<Typography sx={{ fontSize: '0.7rem', fontWeight: 600, mr: 0, mt: 0.7, mb: 0.3 }}> 点击 </Typography>}
                        />
                    </ListItem>
                </List>
               
            </CardContent>
        </CardStyle>
    );
};

export default MenuCard;
