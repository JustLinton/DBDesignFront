import { useState } from 'react';

// material-ui
import { Grid } from '@mui/material';
import MuiTypography from '@mui/material/Typography';

// project imports
import MainCard from 'ui-component/cards/MainCard';
// import SecondaryAction from 'ui-component/cards/CardSecondaryAction';
import { gridSpacing } from 'store/constant';
import axios from 'axios';

import UsermanCard from './cards/waterman/UsermanCard';
// import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
// import Tooltip from '@mui/material/Tooltip';
// import IconButton from '@mui/material/IconButton';
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

const Contents = (props) => {

    return (
        <UsermanCard isLoading={props.isLoading} />


    //     <MainCard title="水务管理" secondary={
    //             <Tooltip title="Filter list">
    //                 <IconButton>
    //                     <HelpOutlineOutlinedIcon />
    //                 </IconButton>
    //             </Tooltip>}>
    //     <Grid container spacing={gridSpacing}>
    //         <Grid item xs={12}>
    //                 <UsermanCard isLoading={props.isLoading} />
    //         </Grid>        
        
    //     </Grid>
    // </MainCard>
    );
}

const Work = () => {

    const [loading, setLoading] = useState(true);
    const [insufPermission, setInsufPermission] = useState(true);

    axios.get("/api/haveperm", {
        　　params: { 'permid': 205 }
        }).then(function (response) {
        // 　　alert(''.concat(response.data, '\r\n', response.status, '\r\n', response.statusText, '\r\n', response.headers, '\r\n', response.config));
        if(response.status===200){
           //鉴权请求

            if(response.data==="ok"){
                //该用户有相应的权限
                setInsufPermission(false);
            }

                axios.get("/api/profile", {
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
                        // 　　alert(error);
                        });
                
                //结束加载
                setLoading(false);
            }
        }).catch(function (error) {
        // 　　alert(error);
        });


    return loading? <EmptyContent/> : insufPermission? <NoPermissionContent/> : <Contents isLoading={loading} />;
}
    
export default Work;
