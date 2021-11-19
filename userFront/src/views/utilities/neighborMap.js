import { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import { CardContent, Menu, MenuItem} from '@mui/material';

// material-ui
import {  Grid, Typography} from '@mui/material';
import MuiTypography from '@mui/material/Typography';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import SubCard from 'ui-component/cards/SubCard';
import { gridSpacing } from 'store/constant';
import axios from 'axios';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import MenuOpenRoundedIcon from '@mui/icons-material/MenuOpenRounded';

import * as React from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';


//map compoents
import BlockSVG from './mapCompoents/essentials/block'
import BlockPolyGon from './mapCompoents/essentials/block_polygon'


// ===============================|| COLOR BOX ||=============================== //

const Block1 = (props) => {
    const theme = useTheme();

    const groundBlockColorNC = theme.palette.primary.light;
    const groundBlockColorC = "#aef55c";
    const louBlockColorNC = theme.palette.warning.main;
    const louBlockColorC = theme.palette.secondary.dark;

    const parkingBlockMenu = "parking";
    const louBlockMenu = "lou";
    const groundBlockMenu = "ground";

  
    return(
        <>
        <Grid item xs={1}>
        
            <svg
            sx={{
                    color: theme.palette.primary.main,
                    cursor: 'pointer'
                }}
                aria-controls="menu-popular-card"
                aria-haspopup="true"
                width="800" 
                height="800" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                x="0px" y="0px"
                viewBox="0 0 792.5 1083.8"
            >


<BlockSVG  
                            name="凤凰居地块"
                            menu={groundBlockMenu} 
                            d="M388.9,648.9v310.5l247.8,91.7c0,0,16.8,2.3,18.1,0s3.7-3.2,3.2-15.6V650.8c0,0-1.8-6.9-6.9-7.8h-253
C398.1,643,388.9,645.3,388.9,648.9z"
                            fillColorC={groundBlockColorC} 
                            fillColorNC={groundBlockColorNC}/>

<BlockSVG  
                            name="曦园地块"
                            menu={groundBlockMenu} 
                            d="M670,718.7c0,0-6-1.6-6.2-3.7v-66c0,0,3.9-6,6.2-6h111.7c0,0,3.9,2.8,4.4,7.6c0.5,4.8,0,63.3,0,63.3
s-1.1,5.7-5.3,5.7"
                            fillColorC={groundBlockColorC} 
                            fillColorNC={groundBlockColorNC}/>

<BlockSVG  
                            name="公寓地块"
                            menu={groundBlockMenu} 
                            d="M665,738c0,0,2.1-3.4,6-3.4h111.9c0,0,2.9,1.1,3.4,4.8v287.1c0,0-12.8,40.8-50.4,43.8c0,0-63.9,6.2-70.9-18.1"
                            fillColorC={groundBlockColorC} 
                            fillColorNC={groundBlockColorNC}/>

<BlockSVG  
                            name="运动区地块"
                            menu={groundBlockMenu} 
                            d="M196.1,643h176.6c0,0,1.6-0.4,3.2,5.1v162.8c0,0-0.7,5.7-7.3,6.2H196.1c0,0-3.4-0.5-6.4-5.3V649.7
C189.7,649.7,193.3,643,196.1,643z"
                            fillColorC={groundBlockColorC} 
                            fillColorNC={groundBlockColorNC}/>

<BlockSVG  
                            name="博物馆地块"
                            menu={groundBlockMenu} 
                            d="M196.8,468.4h180v165.4h-180c0,0-7.3,2.8-7.2-9.5V474.2C189.7,474.2,192.6,468.4,196.8,468.4z"
                            fillColorC={groundBlockColorC} 
                            fillColorNC={groundBlockColorNC}/>


<BlockSVG  
                            name="校友广场地块"
                            menu={groundBlockMenu} 
                            d="M391.9,468.4h125.7c0,0,1.8-0.6,2.1,8.9v153.5c0,0-4.6,2.7-7.3,3.3h-122V471.2
C390.4,471.2,390.4,468.4,391.9,468.4z"
                            fillColorC={groundBlockColorC} 
                            fillColorNC={groundBlockColorNC}/>

<BlockSVG  
                            name="体育场地块"
                            menu={groundBlockMenu} 
                            d="M531.3,468.4h251.5c0,0,4.8,1.1,5.3,6.8v154.5c0,0-0.7,4.1-6.9,4.1H533.2c0,0-0.7,2.3-1.8-3.9V468.4z"
                            fillColorC={groundBlockColorC} 
                            fillColorNC={groundBlockColorNC}/>

<BlockSVG  
                            name="N2地块"
                            menu={groundBlockMenu} 
                            d="M388.5,331.2h128.1c0,0,0.8-0.8,1.2,2.6c0.5,3.4,0,40.1,0,40.1s-1.7,1.8-4.7,2h-122c0,0-2.1-1.2-2.6-3
                            c-0.5-1.7,0-38.9,0-38.9V331.2z"
                            fillColorC={groundBlockColorC} 
                            fillColorNC={groundBlockColorNC}/>

<BlockSVG  
                            name="N1地块"
                            menu={groundBlockMenu} 
                            d="M322.2,331.1h56.7c0,0,2,0,2,6.1v114.7c0,0-0.8,4.3-2.8,4.9h-55.9c0,0-2.8-0.5-3.1-5.2v-115
                            C319.1,336.6,318.8,331.1,322.2,331.1z"
                            fillColorC={groundBlockColorC} 
                            fillColorNC={groundBlockColorNC}/>


<BlockSVG  
                            name="N4地块"
                            menu={groundBlockMenu} 
                            d="M667.8,330.1H740c0,0,2.5,0,2.5,6.1v114.7c0,0-1,4.3-3.5,4.9h-71.3c0,0-3.5-0.5-3.9-5.2v-115
                            C663.9,335.6,663.5,330.1,667.8,330.1z"
                            fillColorC={groundBlockColorC} 
                            fillColorNC={groundBlockColorNC}/>

<BlockSVG  
                            name="N3地块"
                            menu={groundBlockMenu} 
                            d="M526.3,331.2h128.1c0,0,0.8-0.8,1.2,2.6c0.5,3.4,0,40.1,0,40.1s-1.7,1.8-4.7,2h-122c0,0-2.1-1.2-2.6-3
c-0.5-1.7,0-38.9,0-38.9V331.2z"
                            fillColorC={groundBlockColorC} 
                            fillColorNC={groundBlockColorNC}/>

<BlockSVG  
                            name="N5地块"
                            menu={groundBlockMenu} 
                            d="M655.6,455.6H527.5c0,0-0.8,0.8-1.2-2.9c-0.5-3.7,0-43.7,0-43.7s1.7-2,4.7-2.2h122c0,0,2.1,1.4,2.6,3.2
c0.5,1.9,0,42.5,0,42.5V455.6z"
                            fillColorC={groundBlockColorC} 
                            fillColorNC={groundBlockColorNC}/>

<BlockSVG  
                            name="N6地块"
                            menu={groundBlockMenu} 
                            d="M517.7,455.6H389.6c0,0-0.8,0.8-1.2-2.9s0-43.7,0-43.7s1.7-2,4.7-2.2h122c0,0,2.1,1.4,2.6,3.2
c0.5,1.9,0,42.5,0,42.5V455.6z"
                            fillColorC={groundBlockColorC} 
                            fillColorNC={groundBlockColorNC}/>

<BlockSVG  
                            name="K2地块"
                            menu={groundBlockMenu} 
                            d="M389.2,173.3h128.1c0,0,0.8-0.8,1.2,2.6c0.5,3.4,0,40.1,0,40.1s-1.7,1.8-4.7,2h-122c0,0-2.1-1.2-2.6-3
    c-0.5-1.7,0-38.9,0-38.9V173.3z"
                            fillColorC={groundBlockColorC} 
                            fillColorNC={groundBlockColorNC}/>

<BlockSVG  
                            name="K1地块"
                            menu={groundBlockMenu} 
                            d="M322.8,173.2h56.7c0,0,2,0,2,6.1v114.7c0,0-0.8,4.3-2.8,4.9h-55.9c0,0-2.8-0.5-3.1-5.2v-115
                            C319.8,178.7,319.5,173.2,322.8,173.2z"
                            fillColorC={groundBlockColorC} 
                            fillColorNC={groundBlockColorNC}/>

<BlockSVG  
                            name="K4地块"
                            menu={groundBlockMenu} 
                            d="M668.4,172.2h72.3c0,0,2.5,0,2.5,6.1v114.7c0,0-1,4.3-3.5,4.9h-71.3c0,0-3.5-0.5-3.9-5.2v-115
    C664.5,177.7,664.1,172.2,668.4,172.2z"
                            fillColorC={groundBlockColorC} 
                            fillColorNC={groundBlockColorNC}/>

<BlockSVG  
                            name="K3地块"
                            menu={groundBlockMenu} 
                            d="M526.9,173.3H655c0,0,0.8-0.8,1.2,2.6c0.5,3.4,0,40.1,0,40.1s-1.7,1.8-4.7,2h-122c0,0-2.1-1.2-2.6-3
                            c-0.5-1.7,0-38.9,0-38.9V173.3z"
                            fillColorC={groundBlockColorC} 
                            fillColorNC={groundBlockColorNC}/>

<BlockSVG  
                            name="K5地块"
                            menu={groundBlockMenu} 
                            d="M656.3,297.6H528.2c0,0-0.8,0.8-1.2-2.9c-0.5-3.7,0-43.7,0-43.7s1.7-2,4.7-2.2h122c0,0,2.1,1.4,2.6,3.2
                            c0.5,1.9,0,42.5,0,42.5V297.6z"
                            fillColorC={groundBlockColorC} 
                            fillColorNC={groundBlockColorNC}/>

<BlockSVG  
                            name="K6地块"
                            menu={groundBlockMenu} 
                            d="M518.3,297.6H390.2c0,0-0.8,0.8-1.2-2.9c-0.5-3.7,0-43.7,0-43.7s1.7-2,4.7-2.2h122c0,0,2.1,1.4,2.6,3.2
    c0.5,1.9,0,42.5,0,42.5V297.6z"
                            fillColorC={groundBlockColorC} 
                            fillColorNC={groundBlockColorNC}/>

<BlockSVG  
                            name="振声苑地块"
                            menu={groundBlockMenu} 
                            d="M122.9,456.2c0,0-3.8-0.6-3.8-3.5V332.4c0,0,0.6-4.3,3.8-4.3h121.6c0,0,3,0.9,3,4.9v120.2c0,0-0.6,3.7-4,3.7"
                            fillColorC={groundBlockColorC} 
                            fillColorNC={groundBlockColorNC}/>

<BlockSVG  
                            name="华岗苑地块"
                            menu={groundBlockMenu} 
                            d="M123.9,297.8c0,0-3.8-0.6-3.8-3.5V173.9c0,0,0.6-4.3,3.8-4.3h121.6c0,0,3,0.9,3,4.9v120.2c0,0-0.6,3.7-4,3.7"
                            fillColorC={groundBlockColorC} 
                            fillColorNC={groundBlockColorNC}/>

<BlockSVG  
                            name="园林#11"
                            menu={groundBlockMenu} 
                            d="M193.8,823.4h177.9c0,0,6.4,1.2,6.4,11.6v115.6c0,0-3.1,4-12.2,0l-176.3-66v-58.7
                            C189.7,825.8,189.2,823.4,193.8,823.4z"
                            fillColorC={groundBlockColorC} 
                            fillColorNC={groundBlockColorNC}/>

<BlockSVG  
                           name="综合体育馆"
                           menu={louBlockMenu} 
                            d="M14,468.4l58.4,3.4c0,0,29.4,1.2,30.3,15.3c0,0,3.1,67.9,4.3,74.9c1.2,7,4.9,40.4,6.1,46.2s30.6,47.1,41.6,54.4
h14.1c0,0-0.3-0.3,3.7-1.5c4-1.2,4,1.5,4,1.5v16.2c0,0-4.3,0.6-4.9-2.1s-8.4-4.2-10.2-1c0,0,5.3,22.9,5.3,29.6
c0,6.6,0.5,23.6,0.5,23.6h9.4v8.9h-7.6v21.1c0,0-15.1,43.8-22.5,52.1c-7.3,8.3-8.5,9.4-7.3,10.1h16.5c0,0,14-2.5,17.9-8.3v21.3
c0,0-1.1-4.8-3.4-7.1h-41.3v29.8h-27.1c0,0-53.7-30.5-55-36.9c-1.4-6.4-29.4-67.6-45.4-74.8V470.9L14,468.4z"
                            fillColorC={louBlockColorNC} 
                            fillColorNC={louBlockColorC}/>

<BlockSVG  
                            name="园林#10"
                            menu={groundBlockMenu} 
                            d="M261.7,174.6V453c0,0,1.4,2.9,4.6,3.8H302c0,0,4.1-0.6,4.3-3.5V174.6c0,0,0-4-5.9-4.1h-33.7
C266.7,170.5,261.7,170.7,261.7,174.6z"
                            fillColorC={groundBlockColorC} 
                            fillColorNC={groundBlockColorNC}/>

<BlockSVG  
                            name="园林#9"
                            menu={groundBlockMenu} 
                            d="M124.7,301.9h118.9c0,0,4.9,2,4.8,9.6c0,0,0.9,9-3.3,10.7H124.7c0,0-5.7-0.8-5.7-8.6S121.2,301.9,124.7,301.9z"
                            fillColorC={groundBlockColorC} 
                            fillColorNC={groundBlockColorNC}/>

<BlockSVG  
                            name="园林#8"
                            menu={groundBlockMenu} 
                            d="M44.3,298.8h64c0,0,3.4,1.3,3.7,5.7v17.7c0,0-1.7,3.8-3.8,4.1H39.9c0,0-1.8,0.2-1.7-7c0,0,2-17,2.9-19.3
                            C41.1,300.1,41.8,298.8,44.3,298.8z"
                            fillColorC={groundBlockColorC} 
                            fillColorNC={groundBlockColorNC}/>

<BlockSVG  
                            name="园林#7"
                            menu={groundBlockMenu} 
                            d="M43.7,239.3l-7.2,48.6c0,0,4.6,5.2,8.3,5.4h27.5c0,0,4.7-4.7,4.7-9v-41.9c0,0-0.6-2.3-5.4-3.1H43.7z"
                            fillColorC={groundBlockColorC} 
                            fillColorNC={groundBlockColorNC}/>

<BlockSVG  
                            name="振声苑N楼"
                            menu={louBlockMenu} 
                            d="M132.1,345.3c0.6,0.1,10.6,0,10.6,0v-3.1h32.6l1.4-2.4h16l1,2.8H226v2.8h10.7v10.5h-10.2v3.6h-83.7v-2.9h-10.7
    V345.3z"
                            fillColorC={louBlockColorNC} 
                            fillColorNC={louBlockColorC}/>

<BlockSVG  
                            name="振声苑E楼"
                            menu={louBlockMenu} 
                            d="M220.1,365.1v56.6h18.8v-18c0,0,5.4,1.7,5.5-3.2v-11.6c0,0,1.1-4-4.9-3.7v-20.1L220.1,365.1L220.1,365.1z"
                            fillColorC={louBlockColorNC} 
                            fillColorNC={louBlockColorC}/>

<BlockSVG  
                            name="振声苑S楼"
                            menu={louBlockMenu} 
                            d="M142.6,427h83v2.3h11.1v12.9h-9.6c0,0-1.1-0.1-1.1,2h-33.1v3.4h-16.6v-2.9h-33.7v-2.9h-11.4v-11.5h11.2v-2.7
    L142.6,427z"
                            fillColorC={louBlockColorNC} 
                            fillColorNC={louBlockColorC}/>

<BlockSVG  
                            name="振声苑W楼"
                            menu={louBlockMenu} 
                            d="M150.2,421.6v-56.5h-18.7v18c0,0-5.4-1.7-5.5,3.2v11.5c0,0-1.1,4,4.9,3.7v20.2L150.2,421.6L150.2,421.6z"
                            fillColorC={louBlockColorNC} 
                            fillColorNC={louBlockColorC}/>

<BlockSVG  
                            name="凤凰居S2"
                            menu={louBlockMenu} 
                            d="M623.7,723.8h-61.2l-0.9,1.3h-9.9v-6.8c0,0-1.1-0.3-1.2-2.2c-0.1-1.9,0.8-2.8,1.2-3.3c0.4-0.4,0.3-6.1,0.3-6.1
    h60l-0.1-11.7c0,0-1.6-1.1-1.9-2c-0.3-0.9,0.1-5.1,0.1-5.1s1-1.8,1.7-2.1v-12.2h-60.1l0.2-6.3h-4.7v-4.5c0,0,0.2-0.2,0.8-1.1V656
    h4.5h8.8c0,0,1.6,0.3,2.1,1.2h59.5c0,0,0.2-0.8,1.2-1.2h9.8l0.3,30.1c0,0,0.6,0.9,0.9,0.9c0.3,0,0,6.3,0,6.3s-1.4,0.3-1.5,1.5v30.3
    h-9.5L623.7,723.8z"
                            fillColorC={louBlockColorNC} 
                            fillColorNC={louBlockColorC}/>

<BlockSVG  
                            name="凤凰居S4"
                            menu={louBlockMenu} 
                            d="M554.3,759v-5.2h8.6v-1.5h1v-22h-9.6v-5.1h-4.7v12.3c0,0-2.1-0.3-2,1.1c0.1,1.3,0,10.4,0,10.4s-0.3,1.5,2,1.4
    v8.7h4.7V759z"
                            fillColorC={louBlockColorNC} 
                            fillColorNC={louBlockColorC}/>

<BlockSVG  
                            name="凤凰居S6"
                            menu={louBlockMenu} 
                            d="M625.1,826.7h-61.2L563,828h-9.9v-6.8c0,0-1.1-0.3-1.2-2.2c-0.1-1.9,0.8-2.8,1.2-3.3c0.4-0.4,0.3-6.1,0.3-6.1
                            h60.1l-0.1-11.7c0,0-1.6-1.1-1.9-2c-0.3-0.9,0.1-5.1,0.1-5.1s1-1.8,1.7-2.1v-12.2h-60.1l0.2-6.3h-4.7v-4.5c0,0,0.2-0.2,0.8-1.1V759
                            h4.5h8.8c0,0,1.6,0.3,2.1,1.2h59.5c0,0,0.2-0.8,1.2-1.2h9.8l0.3,30.1c0,0,0.6,0.9,0.9,0.9c0.3,0,0,6.3,0,6.3s-1.4,0.3-1.5,1.5V828
                            h-9.5L625.1,826.7z"
                            fillColorC={louBlockColorNC} 
                            fillColorNC={louBlockColorC}/>

<BlockSVG  
                            name="凤凰居S8"
                            menu={louBlockMenu} 
                            d="M555.7,861.9v-5.2h8.6v-1.5h1v-22h-9.6V828H551v12.3c0,0-2.1-0.3-2,1.1c0.1,1.3,0,10.4,0,10.4s-0.3,1.5,2,1.4
    v8.7H555.7z"
                            fillColorC={louBlockColorNC} 
                            fillColorNC={louBlockColorC}/>

<BlockSVG  
                            name="凤凰居S10"
                            menu={louBlockMenu} 
                            d="M627.4,929.7h-61.2l-0.9,1.3h-9.9v-6.8c0,0-1.1-0.3-1.2-2.2c-0.1-1.9,0.8-2.8,1.2-3.3c0.4-0.4,0.3-6.1,0.3-6.1
    h60.1l-0.1-11.7c0,0-1.6-1.1-1.9-2c-0.3-0.9,0.1-5.1,0.1-5.1s1-1.8,1.7-2.1v-12.2h-60.1l0.2-6.3H551v-4.5c0,0,0.2-0.2,0.8-1.1v-5.7
    h4.5h8.8c0,0,1.6,0.3,2.1,1.2h59.5c0,0,0.2-0.8,1.2-1.2h9.8L638,892c0,0,0.6,0.9,0.9,0.9c0.3,0,0,6.3,0,6.3s-1.4,0.3-1.5,1.5V931
    h-9.5L627.4,929.7z"
                            fillColorC={louBlockColorNC} 
                            fillColorNC={louBlockColorC}/>

<BlockSVG  
                            name="凤凰居S9"
                            menu={louBlockMenu} 
                            d="M419.3,862.2h61.2l0.9-1.3h9.9v6.8c0,0,1.1,0.3,1.2,2.2s-0.8,2.8-1.2,3.3s-0.3,6.1-0.3,6.1h-60l0.1,11.7
                            c0,0,1.6,1.1,1.9,2s-0.1,5.1-0.1,5.1s-1,1.8-1.7,2.1v12.2h60.1l-0.2,6.3h4.7v4.5c0,0-0.2,0.2-0.8,1.1v5.7h-4.5h-8.8
                            c0,0-1.6-0.3-2.1-1.2h-59.5c0,0-0.2,0.8-1.2,1.2h-9.8l-0.3-30.1c0,0-0.6-0.9-0.9-0.9s0-6.3,0-6.3s1.4-0.3,1.5-1.5v-30.3h9.5
                            L419.3,862.2z"
                            fillColorC={louBlockColorNC} 
                            fillColorNC={louBlockColorC}/>

<BlockSVG  
                            name="凤凰居S7"
                            menu={louBlockMenu} 
                            d="M489.7,827v5.2h-8.6v1.5h-1v22h9.6v5.1h4.7v-12.3c0,0,2.1,0.3,2-1.1c-0.1-1.3,0-10.4,0-10.4s0.3-1.5-2-1.4V827
    H489.7z"
                            fillColorC={louBlockColorNC} 
                            fillColorNC={louBlockColorC}/>

<BlockSVG  
                            name="凤凰居S5"
                            menu={louBlockMenu} 
                            d="M417.9,759.3h61.2l0.9-1.3h9.9v6.8c0,0,1.1,0.3,1.2,2.2s-0.8,2.8-1.2,3.3s-0.3,6.1-0.3,6.1h-60.1l0.1,11.7
    c0,0,1.6,1.1,1.9,2s-0.1,5.1-0.1,5.1s-1,1.8-1.7,2.1v12.2h60.1l-0.2,6.3h4.7v4.5c0,0-0.2,0.2-0.8,1.1v5.7H489h-8.8
    c0,0-1.6-0.3-2.1-1.2h-59.5c0,0-0.2,0.8-1.2,1.2h-9.8l-0.3-30.1c0,0-0.6-0.9-0.9-0.9s0-6.3,0-6.3s1.4-0.3,1.5-1.5V758h9.5
    L417.9,759.3z"
                            fillColorC={louBlockColorNC} 
                            fillColorNC={louBlockColorC}/>

<BlockSVG  
                            name="凤凰居S3"
                            menu={louBlockMenu} 
                            d="M487.3,724.1v5.2h-8.6v1.5h-1v22h9.6v5.1h4.7v-12.3c0,0,2.1,0.3,2-1.1c-0.1-1.3,0-10.4,0-10.4s0.3-1.5-2-1.4
    V724h-4.7V724.1z"
                            fillColorC={louBlockColorNC} 
                            fillColorNC={louBlockColorC}/>

<BlockSVG  
                            name="凤凰居S1"
                            menu={louBlockMenu} 
                            d="M415.6,656.3h61.2l0.9-1.3h9.9v6.8c0,0,1.1,0.3,1.2,2.2s-0.8,2.8-1.2,3.3c-0.4,0.4-0.3,6.1-0.3,6.1h-60.1
                            l0.1,11.7c0,0,1.6,1.1,1.9,2s-0.1,5.1-0.1,5.1s-1,1.8-1.7,2.1v12.2h60.1l-0.2,6.3h4.7v4.5c0,0-0.2,0.2-0.8,1.1v5.7h-4.5h-8.8
                            c0,0-1.6-0.3-2.1-1.2h-59.5c0,0-0.2,0.8-1.2,1.2h-9.8L405,694c0,0-0.6-0.9-0.9-0.9s0-6.3,0-6.3s1.4-0.3,1.5-1.5V655h9.5
                            L415.6,656.3z"
                            fillColorC={louBlockColorNC} 
                            fillColorNC={louBlockColorC}/>

<BlockSVG  
                            name="第周苑N4楼"
                            menu={louBlockMenu} 
                            d="M677.5,337.6h50.8v1.2h3.5v12.6c0,0-2.7,0.1-3.1,0.7v1.8h-5.8v7.8h8.4c0,0,0.6,0.2,0.6,1.8v21h2.3v15.7h-2.6
                            V422c0,0,0.1,1.4-1.5,1.4h-7.6v7.4h5.8v2.9h3.6v9.2h-3.5v5.4h-50.9v-5.9h-3.2v-13.3h2.9v-7.2h19.9v-14.5v-45.3v-9.2h-3.7l0.3,9.3
                            h-16.2v-5.4h-3.2v-18.6L677.5,337.6z"
                            fillColorC={louBlockColorNC} 
                            fillColorNC={louBlockColorC}/>

<BlockSVG  
                            name="第周苑N3楼"
                            menu={louBlockMenu} 
                            d="M533.5,371.5c0.3,0,6.6,0,6.6,0v2.4H553c0,0,0.6-2.5,2.1-2.4h8.9v-13.9h-4.2v-2.3h23.4c0,0,0.9,1.9,2.1,2h14.1
    c0,0,0.8-0.8,0.9-2h23.9h3.9v1.8h-4.2v15.2h7v1.7h13.8v-2.3h6v-29.8h-8.4v-7.2h-39.6c0,0-1.7-0.3-1.8-1.8h-18.8
    c0,0,0.1,2.1-2.1,2.2h-37.9v5.2h-4v2.2h-4.7L533.5,371.5L533.5,371.5z"
                            fillColorC={louBlockColorNC} 
                            fillColorNC={louBlockColorC}/>

<BlockSVG  
                            name="第周苑N2楼"
                            menu={louBlockMenu} 
                            d="M396.9,371.7c0.3,0,6.6,0,6.6,0v2.4h12.9c0,0,0.6-2.5,2.1-2.4h8.9v-13.9h-4.2v-2.3h23.4c0,0,0.9,1.9,2.1,2
    h14.1c0,0,0.8-0.8,0.9-2h23.9h3.9v1.8h-4.2v15.2h7v1.7h13.8v-2.3h6V342h-8.4v-7.2h-39.6c0,0-1.7-0.3-1.8-1.8h-18.8
    c0,0,0.1,2.1-2.1,2.2h-37.9v5.2h-4v2.2h-4.7v29.1H396.9z"
                            fillColorC={louBlockColorNC} 
                            fillColorNC={louBlockColorC}/>


<BlockSVG  
                            name="第周苑N1楼"
                            menu={louBlockMenu} 
                            d="M373.8,447.9h-45.1v-1.2h-3.1v-12.6c0,0,2.4-0.1,2.8-0.7v-1.8h5.2v-7.8h-7.5c0,0-0.5-0.2-0.5-1.8v-21h-2.1
                            v-15.7h2.3v-21.8c0,0-0.1-1.4,1.3-1.4h6.7v-7.4h-5.2v-2.9h-3.2v-9.2h3.1v-5.4h45.2v5.9h2.9v13.3h-2.5v7.2h-17.7v14.5v45.3v9.2h3.3
                            l-0.2-9.3h14.4v5.4h2.9v18.6L373.8,447.9z"
                            fillColorC={louBlockColorNC} 
                            fillColorNC={louBlockColorC}/>

<BlockSVG  
                            name="第周苑N6楼"
                            menu={louBlockMenu} 
                            d="M514.4,411.3c-0.3,0-6.6,0-6.6,0v-2.4H495c0,0-0.6,2.5-2.1,2.4H484v13.9h4.2v2.3h-23.4c0,0-0.9-1.9-2.1-2
    h-14.1c0,0-0.8,0.8-0.9,2h-23.9h-3.9v-1.8h4.2v-15.2h-7v-1.7h-13.8v2.3h-6V441h8.4v7.2h39.6c0,0,1.7,0.3,1.8,1.8h18.8
    c0,0-0.1-2.1,2.1-2.2h37.9v-5.2h4v-2.2h4.7v-29.1H514.4z"
                            fillColorC={louBlockColorNC} 
                            fillColorNC={louBlockColorC}/>

<BlockSVG  
                            name="第周苑N5楼"
                            menu={louBlockMenu} 
                            d="M651,411.1c-0.3,0-6.6,0-6.6,0v-2.4h-12.9c0,0-0.6,2.5-2.1,2.4h-8.9V425h4.2v2.3h-23.4c0,0-0.9-1.9-2.1-2
                            h-14.1c0,0-0.8,0.8-0.9,2h-23.9h-3.9v-1.8h4.2v-15.2h-7v-1.7h-13.8v2.3h-6v29.8h8.4v7.2h39.6c0,0,1.7,0.3,1.8,1.8h18.8
                            c0,0-0.1-2.1,2.1-2.2h37.9v-5.2h4v-2.2h4.7L651,411.1L651,411.1z"
                            fillColorC={louBlockColorNC} 
                            fillColorNC={louBlockColorC}/>

<BlockSVG  
                            name="淦昌苑K4楼"
                            menu={louBlockMenu} 
                            d="M676.7,177.9h50.8v1.2h3.5v12.6c0,0-2.7,0.1-3.1,0.7v1.8H722v7.8h8.4c0,0,0.6,0.2,0.6,1.8v21h2.3v15.7h-2.6
    v21.8c0,0,0.1,1.4-1.5,1.4h-7.6v7.4h5.8v2.9h3.6v9.2h-3.5v5.4h-50.9v-5.9h-3.2v-13.3h2.9v-7.2h19.9v-14.5v-45.3v-9.2h-3.7l0.3,9.3
    h-16.2V197h-3.2v-18.6L676.7,177.9z"
                            fillColorC={louBlockColorNC} 
                            fillColorNC={louBlockColorC}/>

<BlockSVG  
                            name="淦昌苑K3楼"
                            menu={louBlockMenu} 
                            d="M532.6,211.7c0.3,0,6.6,0,6.6,0v2.4h12.9c0,0,0.6-2.5,2.1-2.4h8.9v-13.9h-4.2v-2.3h23.4c0,0,0.9,1.9,2.1,2
    h14.1c0,0,0.8-0.8,0.9-2h23.9h3.9v1.8H623v15.2h7v1.7h13.8v-2.3h6v-29.8h-8.4v-7.2h-39.6c0,0-1.7-0.3-1.8-1.8h-18.8
    c0,0,0.1,2.1-2.1,2.2h-37.9v5.2h-4v2.2h-4.7L532.6,211.7L532.6,211.7z"
                            fillColorC={louBlockColorNC} 
                            fillColorNC={louBlockColorC}/>

<BlockSVG  
                            name="淦昌苑K2楼"
                            menu={louBlockMenu} 
                            d="M396,212c0.3,0,6.6,0,6.6,0v2.4h12.9c0,0,0.6-2.5,2.1-2.4h8.9v-13.9h-4.2v-2.3h23.4c0,0,0.9,1.9,2.1,2h14.1
                            c0,0,0.8-0.8,0.9-2h23.9h3.9v1.8h-4.2v15.2h7v1.7h13.8v-2.3h6v-29.8h-8.4v-7.2h-39.6c0,0-1.7-0.3-1.8-1.8h-18.8
                            c0,0,0.1,2.1-2.1,2.2h-37.9v5.2h-4v2.2H396V212z"
                            fillColorC={louBlockColorNC} 
                            fillColorNC={louBlockColorC}/>

<BlockSVG  
                            name="淦昌苑K1楼"
                            menu={louBlockMenu} 
                            d="M373,288.2h-45.1V287h-3.1v-12.6c0,0,2.4-0.1,2.8-0.7v-1.8h5.2V264h-7.5c0,0-0.5-0.2-0.5-1.8v-21h-2.1v-15.7
    h2.3v-21.8c0,0-0.1-1.4,1.3-1.4h6.7V195h-5.2v-2.9h-3.2V183h3.1v-5.4H373v5.9h2.9v13.3h-2.5v7.2h-17.7v14.5v45.3v9.2h3.3l-0.2-9.3
    H373v5.4h2.9v18.6L373,288.2z"
                            fillColorC={louBlockColorNC} 
                            fillColorNC={louBlockColorC}/>


<BlockSVG  
                            name="淦昌苑K6楼"
                            menu={louBlockMenu} 
                            d="M513.6,256.6c-0.3,0-6.6,0-6.6,0v-2.4h-12.9c0,0-0.6,2.5-2.1,2.4h-8.9v13.9h4.2v2.3h-23.4c0,0-0.9-1.9-2.1-2
                            h-14.1c0,0-0.8,0.8-0.9,2h-23.9H419V271h4.2v-15.2h-7v-1.7h-13.8v2.3h-6v29.8h8.4v7.2h39.6c0,0,1.7,0.3,1.8,1.8H465
                            c0,0-0.1-2.1,2.1-2.2H505v-5.2h4v-2.2h4.7v-29H513.6z"
                            fillColorC={louBlockColorNC} 
                            fillColorNC={louBlockColorC}/>

<BlockSVG  
                            name="淦昌苑K5楼"
                            menu={louBlockMenu} 
                            d="M650.2,256.3c-0.3,0-6.6,0-6.6,0v-2.4h-12.9c0,0-0.6,2.5-2.1,2.4h-8.9v13.9h4.2v2.3h-23.4c0,0-0.9-1.9-2.1-2
    h-14.1c0,0-0.8,0.8-0.9,2h-23.9h-3.9v-1.8h4.2v-15.2h-7v-1.7H539v2.3h-6V286h8.4v7.2H581c0,0,1.7,0.3,1.8,1.8h18.8
    c0,0-0.1-2.1,2.1-2.2h37.9v-5.2h4v-2.2h4.7L650.2,256.3L650.2,256.3z"
                            fillColorC={louBlockColorNC} 
                            fillColorNC={louBlockColorC}/>

<BlockSVG  
                            name="华岗苑N楼"
                            menu={louBlockMenu} 
                            d="M132.8,187.4c0.6,0.1,10.6,0,10.6,0v-3.1H176l1.4-2.4h16l1,2.8h32.3v2.8h10.7V198h-10.2v3.6h-83.7v-2.9h-10.7
    V187.4z"
                            fillColorC={louBlockColorNC} 
                            fillColorNC={louBlockColorC}/>

<BlockSVG  
                            name="华岗苑E楼"
                            menu={louBlockMenu} 
                            d="M220.8,207.2v56.6h18.8v-18c0,0,5.4,1.7,5.5-3.2V231c0,0,1.1-4-4.9-3.7v-20.1H220.8z"
                            fillColorC={louBlockColorNC} 
                            fillColorNC={louBlockColorC}/>

<BlockSVG  
                            name="华岗苑S楼"
                            menu={louBlockMenu} 
                            d="M143.3,269.1h83v2.3h11.1v12.9h-9.6c0,0-1.1-0.1-1.1,2h-33.1v3.4H177v-2.9h-33.7v-2.9h-11.4v-11.5h11.2v-2.7
    L143.3,269.1z"
                            fillColorC={louBlockColorNC} 
                            fillColorNC={louBlockColorC}/>

<BlockSVG  
                            name="华岗苑W楼"
                            menu={louBlockMenu} 
                            d="M150.9,263.7v-56.5h-18.7v18c0,0-5.4-1.7-5.5,3.2v11.5c0,0-1.1,4,4.9,3.7v20.2L150.9,263.7L150.9,263.7z"
                            fillColorC={louBlockColorNC} 
                            fillColorNC={louBlockColorC}/>

<BlockSVG  
                            name="园林#6"
                            menu={groundBlockMenu} 
                            d="M56.7,170.5c0,0-4.1,1.8-5.9,7l-5.4,50.3c0,0,1.8,4.1,7.5,4.1h26c0,0,0.9,0,1.1-4.7v-54.9c0,0-1.2-2.1-3.1-1.8
                            H56.7z"
                            fillColorC={groundBlockColorC} 
                            fillColorNC={groundBlockColorNC}/>

<BlockSVG  
                            name="园林#5"
                            menu={groundBlockMenu} 
                            d="M32.5,332.2h38.4c0,0,5.4,2.4,5.4,6.3V453c0,0-2,3.8-4.9,3.8h-52c0,0-5-1.7-5.5-3.2l14.5-113.8
C28.4,339.8,29.6,334.7,32.5,332.2z"
                            fillColorC={groundBlockColorC} 
                            fillColorNC={groundBlockColorNC}/>

<BlockSVG  
                            name="园林#4"
                            menu={groundBlockMenu} 
                            d="M393.9,302.9h118.9c0,0,4.9,2,4.8,9.6c0,0,0.9,9-3.3,10.7H393.9c0,0-5.7-0.8-5.7-8.6S390.4,302.9,393.9,302.9z"
                            fillColorC={groundBlockColorC} 
                            fillColorNC={groundBlockColorNC}/>

<BlockSVG  
                            name="园林#3"
                            menu={groundBlockMenu} 
                            d="M530.9,302.9h118.9c0,0,4.9,2,4.8,9.6c0,0,0.9,9-3.3,10.7H530.9c0,0-5.7-0.8-5.7-8.6S527.4,302.9,530.9,302.9z"
                            fillColorC={groundBlockColorC} 
                            fillColorNC={groundBlockColorNC}/>

<BlockSVG  
                            name="园林#2"
                            menu={groundBlockMenu} 
                            d="M668.2,302.9h118.9c0,0,4.9,2,4.8,9.6c0,0,0.9,9-3.3,10.7H668.2c0,0-5.7-0.8-5.7-8.6S664.6,302.9,668.2,302.9z"
                            fillColorC={groundBlockColorC} 
                            fillColorNC={groundBlockColorNC}/>

<BlockSVG  
                            name="园林#1"
                            menu={groundBlockMenu} 
                            d="M321.8,302.9h56.7c0,0,2.3,2,2.3,9.6c0,0,0.4,9-1.6,10.7h-57.5c0,0-2.7-0.8-2.7-8.6S320.2,302.9,321.8,302.9z"
                            fillColorC={groundBlockColorC} 
                            fillColorNC={groundBlockColorNC}/>

<BlockSVG  
                            name="育贤广场地块"
                            menu={groundBlockMenu} 
                            d="M62.8,5.8h245c0,0,7,0.3,7,8.9v139.1c0,0,0,7-5.5,7.3H60.2c0,0-6.4-2.8-6.1-10.7v-137
C54.1,13.5,56.5,5.8,62.8,5.8z"
                            fillColorC={groundBlockColorC} 
                            fillColorNC={groundBlockColorNC}/>

<BlockSVG  
                            name="图书馆地块"
                            menu={groundBlockMenu} 
                            d="M325.3,5.8h106.4c0,0,4-0.9,4.9,5.5v140.9c0,0-1.8,6.7-6.4,7.3H327.4c0,0-6.1-2.4-6.1-9.2V12.3
C321.3,12.3,321.9,5.8,325.3,5.8z"
                            fillColorC={groundBlockColorC} 
                            fillColorNC={groundBlockColorNC}/>

<BlockSVG  
                            name="会文地块(东)"
                            menu={groundBlockMenu} 
                            d="M533,5.8h213.9c0,0,3.1,0,3.1,5.9v141.6c0,0-2.4,6.1-6.7,6.4H533c0,0-3.8-2.1-3.8-6.7V10.4
                            C529.2,10.4,530.1,5.8,533,5.8z"
                            fillColorC={groundBlockColorC} 
                            fillColorNC={groundBlockColorNC}/>

<BlockSVG  
                            name="会文地块(东)"
                            menu={groundBlockMenu} 
                            d="M533,5.8h213.9c0,0,3.1,0,3.1,5.9v141.6c0,0-2.4,6.1-6.7,6.4H533c0,0-3.8-2.1-3.8-6.7V10.4
                            C529.2,10.4,530.1,5.8,533,5.8z"
                            fillColorC={groundBlockColorC} 
                            fillColorNC={groundBlockColorNC}/>


<BlockSVG  
                            name="会文地块(西)"
                            menu={groundBlockMenu} 
                            d="M449.1,5.8h66c0,0,3.5,1.8,3.4,4.9s0,143.7,0,143.7s-2.2,4.9-8,5.2h-56.8c0,0-7.4-1.2-7.7-7.3V11
C446,11,446.9,5.8,449.1,5.8z"
                            fillColorC={groundBlockColorC} 
                            fillColorNC={groundBlockColorNC}/>        


<BlockSVG  
                            name="山大青岛博物馆"
                            menu={parkingBlockMenu} 
                            d="M315.8,604.2c0,0-7.2-1.6-9.2-11.7c0,0-1.8-8.4-8.6-8.6l-25.9-0.3c0,0-6.7,4.5-6.9,8.3
                            c-0.2,3.8-1.7,11.2-7.3,12.3h-36.6c0,0-7-3-6.4-15.3v-85.2c0,0,3.7-11.2,12.1-11l38.9-0.2c0,0,6.5-3.1,5.9-9.5H300c0,0,1,9.8,5,10.5
                            h38.4c0,0,9.2,1.8,9.8,6.8v94.1c0,0,0.8,9.6-5.4,9.8"
                            fillColorC={louBlockColorNC} 
                            fillColorNC={louBlockColorC}/>

<BlockSVG  
                            name="田径跑道"
                            menu={parkingBlockMenu} 
                            d="M690.9,494.7H704c0,0,9.6-13.4,29.4-12.8c0,0,39.6-2.2,43.6,31.3v76c0,0-1.3,27.8-41.9,29.4
                            c0,0-43.9-0.2-44.2-42.3V494.7z"
                            fillColorC={louBlockColorNC} 
                            fillColorNC={louBlockColorC}/>

<BlockSVG  
                            name="足球场"
                            menu={parkingBlockMenu} 
                            d="M702.3,510.4c0,0,6.8-20.3,33.2-20.4c0,0,27-0.7,33.3,20.4v79.8c0,0-7.9,20.1-34.3,20.3
    c-26.4,0.2-32.2-20.5-32.2-20.5V510.4z"
                            fillColorC={louBlockColorNC} 
                            fillColorNC={theme.palette.secondary.light}/>


<BlockSVG  
                            name="山大青岛图书馆"
                            menu={louBlockMenu} 
                            d="M342.2,31.9h64.7c0,0,2.1,0.2,2.1,3.3v5.4h17.3v72.6h-7.5v6.2h-8.4v20.2h-8v-2.5H346v2.5H338v-26.3h-9.3V40.1
                            h12.5v-6.2C341.2,33.9,340.9,32.9,342.2,31.9z"
                            fillColorC={louBlockColorNC} 
                            fillColorNC={louBlockColorC}/>

<BlockSVG  
                            name="曦园"
                            menu={louBlockMenu} 
                            d="M702.7,651.5H747v4.8h31c0,0,0.6,1.4,0.6,2.5v50.2h-26v1.2h-13.9V707h-37.9v3.3h-27.9v-24h3.5v-12.9h-3.5v-17.4
                            h29.8V651.5z"
                            fillColorC={louBlockColorNC} 
                            fillColorNC={louBlockColorC}/>

<BlockPolyGon
                            name="公寓1#"
                            menu={louBlockMenu} 
                            d="695.9,768.5 700.4,768.5 700.4,766.2 706,766.2 706,768.5 708.7,768.5 708.7,771.3 712.9,771.3 
                            712.9,768.7 716.2,768.7 716.2,766.7 721.3,766.7 721.3,768.7 724.4,768.7 724.4,771.3 729,771.3 729,768.7 732.3,768.7 
                            732.3,766.9 738.5,766.9 738.5,768.7 742.4,768.7 742.4,771.3 745.6,771.3 745.6,768.7 759.5,768.7 759.5,771.3 763.3,771.3 
                            763.3,775.7 768.3,775.7 768.3,769 776,769 776,773.6 778.6,773.6 778.6,782.2 774.2,782.2 774.2,784.5 761.7,784.5 761.7,781.6 
                            760.2,781.6 760.2,778.6 756.7,778.6 756.7,781.4 754.7,781.4 754.7,783.1 747.9,783.1 747.9,781.2 739.6,781.2 739.6,783 
                            730.5,783 730.5,781.3 723.2,781.3 723.2,782.9 714.7,782.9 714.7,780.7 707.1,780.7 707.1,782.7 697.1,782.7 697.1,779.7 
                            693.8,779.7 693.8,782.2 691.1,782.2 691.1,784.3 680,784.3 680,782.4 675.8,782.4 675.8,768.4 684.4,768.4 684.4,766.2 
                            690.2,766.2 690.2,768.5 	"
                            fillColorC={louBlockColorNC} 
                            fillColorNC={louBlockColorC}/>

<BlockPolyGon
                            name="公寓3#"
                            menu={louBlockMenu} 
                            d="695.9,857.4 700.4,857.4 700.4,855.1 706,855.1 706,857.4 708.7,857.4 708.7,860.2 712.9,860.2 
                            712.9,857.6 716.2,857.6 716.2,855.6 721.3,855.6 721.3,857.6 724.4,857.6 724.4,860.2 729,860.2 729,857.6 732.3,857.6 
                            732.3,855.8 738.5,855.8 738.5,857.6 742.4,857.6 742.4,860.2 745.6,860.2 745.6,857.6 759.5,857.6 759.5,860.2 763.3,860.2 
                            763.3,864.6 768.3,864.6 768.3,857.9 776,857.9 776,862.5 778.6,862.5 778.6,871.1 774.2,871.1 774.2,873.4 761.7,873.4 
                            761.7,870.5 760.2,870.5 760.2,867.5 756.7,867.5 756.7,870.3 754.7,870.3 754.7,872 747.9,872 747.9,870.1 739.6,870.1 
                            739.6,871.9 730.5,871.9 730.5,870.2 723.2,870.2 723.2,871.8 714.7,871.8 714.7,869.6 707.1,869.6 707.1,871.6 697.1,871.6 
                            697.1,868.6 693.8,868.6 693.8,871.1 691.1,871.1 691.1,873.2 680,873.2 680,871.3 675.8,871.3 675.8,857.3 684.4,857.3 
                            684.4,855.1 690.2,855.1 690.2,857.4 	"
                            fillColorC={louBlockColorNC} 
                            fillColorNC={louBlockColorC}/>

<BlockPolyGon
                            name="公寓5#"
                            menu={louBlockMenu} 
                            d="695.9,946.3 700.4,946.3 700.4,944 706,944 706,946.3 708.7,946.3 708.7,949.1 712.9,949.1 
                            712.9,946.5 716.2,946.5 716.2,944.5 721.3,944.5 721.3,946.5 724.4,946.5 724.4,949.1 729,949.1 729,946.5 732.3,946.5 
                            732.3,944.7 738.5,944.7 738.5,946.5 742.4,946.5 742.4,949.1 745.6,949.1 745.6,946.5 759.5,946.5 759.5,949.1 763.3,949.1 
                            763.3,953.5 768.3,953.5 768.3,946.8 776,946.8 776,951.4 778.6,951.4 778.6,960 774.2,960 774.2,962.3 761.7,962.3 761.7,959.4 
                            760.2,959.4 760.2,956.4 756.7,956.4 756.7,959.2 754.7,959.2 754.7,960.9 747.9,960.9 747.9,959 739.6,959 739.6,960.8 
                            730.5,960.8 730.5,959.1 723.2,959.1 723.2,960.7 714.7,960.7 714.7,958.5 707.1,958.5 707.1,960.5 697.1,960.5 697.1,957.5 
                            693.8,957.5 693.8,960 691.1,960 691.1,962.1 680,962.1 680,960.2 675.8,960.2 675.8,946.2 684.4,946.2 684.4,944 690.2,944 
                            690.2,946.3 	"
                            fillColorC={louBlockColorNC} 
                            fillColorNC={louBlockColorC}/>


<BlockPolyGon
                            name="公寓6#"
                            menu={louBlockMenu} 
                            d="758.5,1003.9 754,1003.9 754,1006.2 748.4,1006.2 748.4,1003.9 745.7,1003.9 745.7,1001.2 
                            741.5,1001.2 741.5,1003.7 738.2,1003.7 738.2,1005.7 733.1,1005.7 733.1,1003.7 730,1003.7 730,1001.2 725.4,1001.2 725.4,1003.7 
                            722.1,1003.7 722.1,1005.6 715.9,1005.6 715.9,1003.7 712,1003.7 712,1001.2 708.8,1001.2 708.8,1003.7 694.9,1003.7 694.9,1001.2 
                            691.1,1001.2 691.1,996.7 686.1,996.7 686.1,1003.5 678.3,1003.5 678.3,998.9 675.8,998.9 675.8,990.2 680.2,990.2 680.2,987.9 
                            692.7,987.9 692.7,990.8 694.2,990.8 694.2,993.9 697.7,993.9 697.7,991 699.7,991 699.7,989.3 706.5,989.3 706.5,991.2 
                            714.8,991.2 714.8,989.5 723.9,989.5 723.9,991.1 731.2,991.1 731.2,989.5 739.6,989.5 739.6,991.8 747.3,991.8 747.3,989.7 
                            757.3,989.7 757.3,992.7 760.6,992.7 760.6,990.3 763.3,990.3 763.3,988.1 774.4,988.1 774.4,990 778.6,990 778.6,1004.1 
                            770,1004.1 770,1006.2 764.2,1006.2 764.2,1003.9 	"
                            fillColorC={louBlockColorNC} 
                            fillColorNC={louBlockColorC}/>

<BlockPolyGon
                            name="公寓4#"
                            menu={louBlockMenu} 
                            d="758.5,915 754,915 754,917.3 748.4,917.3 748.4,915 745.7,915 745.7,912.3 741.5,912.3 741.5,914.8 
                            738.2,914.8 738.2,916.8 733.1,916.8 733.1,914.8 730,914.8 730,912.3 725.4,912.3 725.4,914.8 722.1,914.8 722.1,916.7 
                            715.9,916.7 715.9,914.8 712,914.8 712,912.3 708.8,912.3 708.8,914.8 694.9,914.8 694.9,912.3 691.1,912.3 691.1,907.8 
                            686.1,907.8 686.1,914.6 678.3,914.6 678.3,910 675.8,910 675.8,901.3 680.2,901.3 680.2,899 692.7,899 692.7,901.9 694.2,901.9 
                            694.2,905 697.7,905 697.7,902.1 699.7,902.1 699.7,900.4 706.5,900.4 706.5,902.3 714.8,902.3 714.8,900.6 723.9,900.6 
                            723.9,902.3 731.2,902.3 731.2,900.6 739.6,900.6 739.6,902.9 747.3,902.9 747.3,900.8 757.3,900.8 757.3,903.8 760.6,903.8 
                            760.6,901.4 763.3,901.4 763.3,899.2 774.4,899.2 774.4,901.1 778.6,901.1 778.6,915.2 770,915.2 770,917.3 764.2,917.3 764.2,915 
                                "
                            fillColorC={louBlockColorNC} 
                            fillColorNC={louBlockColorC}/>

                        <BlockPolyGon
                            name="公寓2#"
                            menu={louBlockMenu} 
                            d="758.5,826.1 754,826.1 754,828.5 748.4,828.5 748.4,826.1 745.7,826.1 745.7,823.4 741.5,823.4 
                            741.5,825.9 738.2,825.9 738.2,827.9 733.1,827.9 733.1,825.9 730,825.9 730,823.4 725.4,823.4 725.4,825.9 722.1,825.9 
                            722.1,827.8 715.9,827.8 715.9,825.9 712,825.9 712,823.4 708.8,823.4 708.8,825.9 694.9,825.9 694.9,823.4 691.1,823.4 
                            691.1,818.9 686.1,818.9 686.1,825.7 678.3,825.7 678.3,821.1 675.8,821.1 675.8,812.4 680.2,812.4 680.2,810.1 692.7,810.1 
                            692.7,813 694.2,813 694.2,816.1 697.7,816.1 697.7,813.2 699.7,813.2 699.7,811.5 706.5,811.5 706.5,813.4 714.8,813.4 
                            714.8,811.7 723.9,811.7 723.9,813.4 731.2,813.4 731.2,811.7 739.6,811.7 739.6,814 747.3,814 747.3,811.9 757.3,811.9 
                            757.3,814.9 760.6,814.9 760.6,812.5 763.3,812.5 763.3,810.3 774.4,810.3 774.4,812.2 778.6,812.2 778.6,826.3 770,826.3 
                            770,828.5 764.2,828.5 764.2,826.1 	"
                            fillColorC={louBlockColorNC} 
                            fillColorNC={louBlockColorC}/>


                      <BlockSVG  
                            name="凤凰居S11"
                            menu={louBlockMenu} 
                            d="M419.6,944h56.7c0,0,1.8,1.3,1.8,2.2V975c0,0-1,2.9-6.6,1.7l-52-12.9c0,0-1.7-2.6-1.8-5.2v-11.9
                            C417.8,946.6,418.4,944,419.6,944z"
                            fillColorC={louBlockColorNC} 
                            fillColorNC={louBlockColorC}/>

                      <BlockSVG  
                            name="双创中心"
                            menu={louBlockMenu} 
                            d="M566.1,945.6h67.5v3.3h3.8v8.6h-3.3v1.9h3.3v1.6h-3.6v31.8l-10.9,20.1l8.7,3.7l-3.3,9.4c0,0-4.4,1.5-5.7,1.9
                            s-6.8,2.3-6.8,2.3l-64.1-24.8l-1-20.2l47.2,21l9.4-13.9l-56.6-15.6l2.4-24h2.5v3h10.4V945.6z"
                            fillColorC={louBlockColorNC} 
                            fillColorNC={louBlockColorC}/>


                        <BlockPolyGon
                            name="会文南楼B"
                            menu={louBlockMenu} 
                            d="551,112.8 577.3,112.8 578.5,111.7 582.1,111.7 583.1,112.8 593.4,112.8 593.4,111 597.1,111 
                            597.1,112.8 601,112.8 601,129.6 595.3,129.6 595.3,131.8 592.1,131.8 592.1,129.8 587.1,129.8 587.1,128.6 585.3,128.6 
                            585.3,129.8 580.1,129.8 580.1,131.8 561.7,131.8 561.7,129.4 558.4,129.4 558.4,131.8 551,131.8 551,126.7 547.4,126.7 
                            547.4,115.8 551,115.8 	"
                            fillColorC={louBlockColorNC} 
                            fillColorNC={louBlockColorC}/>

                        <BlockPolyGon
                            name="会文南楼A"
                            menu={louBlockMenu} 
                            d="620.8,120.9 647.5,120.9 647.5,122.3 654.7,122.3 708.8,122.3 708.8,116.3 710.2,116.3 710.2,112.8 
                            731.7,112.8 731.7,129.7 719.3,129.7 719.3,127.7 718.2,127.7 718.2,130.1 716.9,130.1 716.9,136.2 714.1,136.2 714.1,141 
                            702.8,141 702.8,142.1 699.2,142.1 619.1,142.1 619.1,140.7 614.1,140.7 614.1,139.5 613.2,139.5 613.2,123.4 614.2,123.4 
                            614.2,121.8 620.9,121.8 	"
                            fillColorC={louBlockColorNC} 
                            fillColorNC={louBlockColorC}/>

                        <BlockPolyGon
                            name="会文北楼B"
                            menu={louBlockMenu} 
                            d="552.6,52.9 579,52.9 580.1,54 583.8,54 584.8,52.9 595,52.9 595,54.7 598.8,54.7 598.8,52.9 
                            602.6,52.9 602.6,36.1 597,36.1 597,33.9 593.8,33.9 593.8,35.9 588.8,35.9 588.8,37.1 586.9,37.1 586.9,35.9 581.7,35.9 
                            581.7,33.9 563.4,33.9 563.4,36.3 560.1,36.3 560.1,33.9 552.6,33.9 552.6,39 549.1,39 549.1,49.9 552.6,49.9 	"
                            fillColorC={louBlockColorNC} 
                            fillColorNC={louBlockColorC}/>

                        <BlockPolyGon
                            name="会文北楼A"
                            menu={louBlockMenu} 
                            d="622.4,44.8 649.2,44.8 649.2,43.4 656.4,43.4 710.5,43.4 710.5,49.4 711.8,49.4 711.8,52.9 
                            733.3,52.9 733.3,36 720.9,36 720.9,38 719.8,38 719.8,35.6 718.6,35.6 718.6,29.5 715.8,29.5 715.8,24.7 704.4,24.7 704.4,23.6 
                            700.8,23.6 620.8,23.6 620.8,25 615.8,25 615.8,26.2 614.8,26.2 614.8,42.3 615.8,42.3 615.8,43.9 622.5,43.9 	"
                            fillColorC={louBlockColorNC} 
                            fillColorNC={louBlockColorC}/>

                        <BlockSVG  
                            name="振声苑停车场1"
                            menu={parkingBlockMenu} 
                            d="M86.3,170.5h22.2c0,0,3.5,0.1,3.5,2.5v56.5c0,0,0,2.4-3.7,2.4h-22c0,0-3.5-0.3-3.5-2.2v-57.8
                                C82.8,171.9,84.5,170.5,86.3,170.5z" 
                            fillColorC={louBlockColorNC} 
                            fillColorNC={louBlockColorC}/>

                        <BlockSVG  
                            name="振声苑停车场2"
                            menu={parkingBlockMenu} 
                            d="M87.2,239.3h21.4c0,0,3.4,0.1,3.4,2.2v49.6c0,0,0,2.1-3.5,2.1H87.2c0,0-3.4-0.3-3.4-1.9v-50.8
                            C83.8,240.5,85.4,239.3,87.2,239.3z" 
                            fillColorC={louBlockColorNC} 
                            fillColorNC={louBlockColorC}/>

                        <BlockSVG  
                            name="振声苑停车场3"
                            menu={parkingBlockMenu} 
                            d="M86.3,332.2h22.2c0,0,3.5,0.2,3.5,5.1v114.6c0,0,0,4.9-3.7,4.9h-22c0,0-3.5-0.6-3.5-4.5V335.1
                            C82.8,335.1,84.5,332.2,86.3,332.2z"
                            fillColorC={louBlockColorNC} 
                            fillColorNC={louBlockColorC}/>


                        <BlockSVG  
                            name="淦昌苑停车场1"
                            menu={parkingBlockMenu} 
                            d="M748.6,455.8h34.2c0,0,5.7-2.5,5.8-7.2v-113c0,0-1.7-5.5-5.5-5.5h-29.7c0,0-5.4,1.5-5.4,9L748.6,455.8z"
                            fillColorC={louBlockColorNC} 
                            fillColorNC={louBlockColorC}/>

                        <BlockSVG  
                            name="淦昌苑停车场2"
                            menu={parkingBlockMenu} 
                            d="M748.4,172.2h34.2c0,0,5.7,2.5,5.8,7.2v113c0,0-1.7,5.5-5.5,5.5h-29.7c0,0-5.4-1.5-5.4-9L748.4,172.2z"
                            fillColorC={louBlockColorNC} 
                            fillColorNC={louBlockColorC}/>

                    </svg>
            </Grid>
        </>
    );
}

const NMap = () => {

    return(
        <Grid container spacing={2}>
                <PerfectScrollbar
                    component="div"
                    style={{
                        // height: !matchUpMd ? 'calc(100vh - 56px)' : 'calc(100vh - 88px)',
                        paddingLeft: '16px',
                        paddingRight: '16px'
                    }}
                >

                <Grid item xs={12}>
                    <Block1/>
                </Grid>
            </PerfectScrollbar>
      </Grid>
    );
}

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
    const theme = useTheme();

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <MainCard content={false}>
        <CardContent>
            <Grid container spacing={gridSpacing} justifyContent="center">

            <Grid item xs={12} sx={{ pt: '43px !important' }}>
                    
                    </Grid>
                    
                <Grid item xs={12}>
                    <Grid container spacing={1} alignContent="center" >
                        <Grid container item xs={1} justifyContent="flex-end">
                            <ChevronRightOutlinedIcon />
                        </Grid>
                        <Grid  container item xs={10} justifyContent="flex-start" direction="column">
                            <Typography variant="h2">NeighborMap</Typography>
                            <Typography variant="body">平面图管理社区</Typography>
                        </Grid>

                        <Grid item xs={1}>
                            <MenuOpenRoundedIcon
                                sx={{
                                    color: theme.palette.primary.main,
                                    cursor: 'pointer'
                                }}
                                aria-controls="menu-popular-card"
                                aria-haspopup="true"
                                onClick={handleClick}
                            />
                            <Menu
                                id="menu-popular-card"
                                anchorEl={anchorEl}
                                keepMounted
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                                variant="selectedMenu"
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'right'
                                }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right'
                                }}
                            >
                                <MenuItem onClick={handleClose}> Today</MenuItem>
                                <MenuItem onClick={handleClose}> This Month</MenuItem>
                                <MenuItem onClick={handleClose}> This Year </MenuItem>
                            </Menu>
                        </Grid>

                    </Grid>
                </Grid>
          
                    <Grid   item xs={11} justifyContent="center" >
                        <SubCard title="">
                            <NMap/>
                        </SubCard>
                    </Grid>
                    

            </Grid>

        </CardContent>

    </MainCard>
    );
}

const Work = () => {

    const [loading, setLoading] = useState(true);

 //本页面关闭权限验证
    const [insufPermission, setInsufPermission] = useState(false);
        // const [insufPermission, setInsufPermission] = useState(true);

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
                        // 　　alert(error);
                        });
                
                //结束加载
                setLoading(false);
            }
        }).catch(function (error) {
        // 　　alert(error);
        });


    return loading? <EmptyContent/> : insufPermission? <NoPermissionContent/> : <Contents/>;
}
    
export default Work;
