import PropTypes from 'prop-types';
import { useState } from 'react';

// material-ui
import { Box, Card, Grid, Typography} from '@mui/material';
import MuiTypography from '@mui/material/Typography';

// project imports
import SubCard from 'ui-component/cards/SubCard';
import MainCard from 'ui-component/cards/MainCard';
import SecondaryAction from 'ui-component/cards/CardSecondaryAction';
import { gridSpacing } from 'store/constant';
import axios from 'axios';

// ===============================|| COLOR BOX ||=============================== //

const ColorBox = ({ bgcolor, title, data, dark }) => (
    <>
        <Card sx={{ mb: 3 }}>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    py: 4.5,
                    bgcolor,
                    color: dark ? 'grey.800' : '#ffffff'
                }}
            >
                {title && (
                    <Typography variant="subtitle1" color="inherit">
                        {title}
                    </Typography>
                )}
                {!title && <Box sx={{ p: 1.15 }} />}
            </Box>
        </Card>
        {data && (
            <Grid container justifyContent="space-between" alignItems="center">
                <Grid item>
                    <Typography variant="subtitle2">{data.label}</Typography>
                </Grid>
                <Grid item>
                    <Typography variant="subtitle1" sx={{ textTransform: 'uppercase' }}>
                        {data.color}
                    </Typography>
                </Grid>
            </Grid>
        )}
    </>
);

ColorBox.propTypes = {
    bgcolor: PropTypes.string,
    title: PropTypes.string,
    data: PropTypes.object.isRequired,
    dark: PropTypes.bool
};

// ===============================|| UI COLOR ||=============================== //

// var userData;

const NoPermissionContent = () =>{
    return (
        <MainCard title="提示" >
        <Grid container spacing={gridSpacing}>
            <Grid item xs={12} sm={6}>
                <Grid item>
                    <MuiTypography variant="h3" gutterBottom>抱歉，你似乎没有权限访问此功能。</MuiTypography>
                    <MuiTypography variant="body1" gutterBottom>Errno 101: You don't have permissions to use this function.</MuiTypography>
                </Grid>
            </Grid>
        </Grid>
    </MainCard>
    );
}

const EmptyContent = () =>{
    return (
        <MainCard title="">
        <Grid container spacing={gridSpacing}>
            <Grid item xs={12} sm={6}>
                <Grid item>
                    <MuiTypography variant="h3" gutterBottom>加载中...</MuiTypography>
                    <MuiTypography variant="body1" gutterBottom>Loading...</MuiTypography>
                </Grid>
            </Grid>
        </Grid>
    </MainCard>
    );
}

const Contents = () => {

    return (
        <MainCard title="Color Palette" secondary={<SecondaryAction link="https://next.material-ui.com/system/palette/" />}>
        <Grid container spacing={gridSpacing}>
            <Grid item xs={12}>
                <SubCard title="Primary Color">
                    <Grid container spacing={gridSpacing}>
                        <Grid item xs={12} sm={6} md={4} lg={2}>
                            <ColorBox bgcolor="primary.light" data={{ label: 'Blue-50', color: '#E3F2FD' }} title="primary.light" dark />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={2}>
                            <ColorBox bgcolor="primary.200" data={{ label: 'Blue-200', color: '#90CAF9' }} title="primary[200]" dark />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={2}>
                            <ColorBox bgcolor="primary.main" data={{ label: 'Blue-500', color: '#2196F3' }} title="primary.main" />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={2}>
                            <ColorBox bgcolor="primary.dark" data={{ label: 'Blue-600', color: '#1E88E5' }} title="primary.dark" />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={2}>
                            <ColorBox bgcolor="primary.800" data={{ label: 'Blue-800', color: '#1565C0' }} title="primary[800]" />
                        </Grid>
                    </Grid>
                </SubCard>
            </Grid>
            <Grid item xs={12}>
                <SubCard title="Secondary Color">
                    <Grid container spacing={gridSpacing}>
                        <Grid item xs={12} sm={6} md={4} lg={2}>
                            <ColorBox
                                bgcolor="secondary.light"
                                data={{ label: 'DeepPurple-50', color: '#ede7f6' }}
                                title="secondary.light"
                                dark
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={2}>
                            <ColorBox
                                bgcolor="secondary.200"
                                data={{ label: 'DeepPurple-200', color: '#b39ddb' }}
                                title="secondary[200]"
                                dark
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={2}>
                            <ColorBox
                                bgcolor="secondary.main"
                                data={{ label: 'DeepPurple-500', color: '#673ab7' }}
                                title="secondary.main"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={2}>
                            <ColorBox
                                bgcolor="secondary.dark"
                                data={{ label: 'DeepPurple-600', color: '#5e35b1' }}
                                title="secondary.dark"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={2}>
                            <ColorBox bgcolor="secondary.800" data={{ label: 'DeepPurple-800', color: '#4527a0' }} title="secondary[800]" />
                        </Grid>
                    </Grid>
                </SubCard>
            </Grid>
        
        
        </Grid>
    </MainCard>
    );
}

const Work = () => {

    const [loading, setLoading] = useState(true);
    const [insufPermission, setInsufPermission] = useState(true);

    axios.get("/haveperm", {
        　　params: { 'permid': 204 }
        }).then(function (response) {
        // 　　alert(''.concat(response.data, '\r\n', response.status, '\r\n', response.statusText, '\r\n', response.headers, '\r\n', response.config));
        if(response.status===200){
           //鉴权请求

            if(response.data==="ok"){
                //该用户有相应的权限
                setInsufPermission(false);
            }

                axios.get("/profile", {
                    　　params: { 'verbose': 'false' }
                    }).then(function (response) {
                        // 　　alert(''.concat(response.data, '\r\n', response.status, '\r\n', response.statusText, '\r\n', response.headers, '\r\n', response.config));
                        if(response.status===200){
                           
                            // console.log(response);
                            if(response.data==="notlogged"){
                                window.location='/auth/login';
                            }
                
                                // userData=response.data;
                            }
                        }).catch(function (error) {
                        　　alert(error);
                        });
                
                //结束加载
                setLoading(false);
            }
        }).catch(function (error) {
        　　alert(error);
        });


    return loading? <EmptyContent/> : insufPermission? <NoPermissionContent/> : <Contents/>;
}
    
export default Work;
