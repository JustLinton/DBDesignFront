// material-ui
import { styled } from '@mui/material/styles';
import { Button, Card, CardContent, Grid, Stack, Typography } from '@mui/material';

// project imports
import AnimateButton from 'ui-component/extended/AnimateButton';

// styles
const CardStyle = styled(Card)(({ theme }) => ({
    background: theme.palette.warning.light,
    marginTop: '16px',
    marginBottom: '16px',
    overflow: 'hidden',
    position: 'relative',
    '&:after': {
        content: '""',
        position: 'absolute',
        width: '200px',
        height: '200px',
        border: '19px solid ',
        borderColor: theme.palette.warning.main,
        borderRadius: '50%',
        top: '65px',
        right: '-150px'
    },
    '&:before': {
        content: '""',
        position: 'absolute',
        width: '200px',
        height: '200px',
        border: '3px solid ',
        borderColor: theme.palette.warning.main,
        borderRadius: '50%',
        top: '145px',
        right: '-70px'
    }
}));

// ==============================|| PROFILE MENU - UPGRADE PLAN CARD ||============================== //

const UpgradePlanCard = () => (
    <CardStyle>
        <CardContent>
            <Grid container direction="column" spacing={2}>
                <Grid item>
                    <Typography variant="h4">Nesto 社区后台</Typography>
                </Grid>
                <Grid item>
                    <Typography variant="subtitle2" color="grey.900" sx={{ opacity: 0.6 }}>
                        更好的管理系统 <br/>
                        即刻进入
                    </Typography>
                </Grid>
                <Grid item>
                    <Stack direction="row">
                        <AnimateButton>
                            <Button 
                                variant="contained" 
                                color="warning" 
                                sx={{ boxShadow: 'none' }}
                                onClick={()=>{ window.location='/manage/dashboard';}}
                            >
                                进入
                            </Button>
                        </AnimateButton>
                    </Stack>
                </Grid>
            </Grid>
        </CardContent>
    </CardStyle>
);

export default UpgradePlanCard;
