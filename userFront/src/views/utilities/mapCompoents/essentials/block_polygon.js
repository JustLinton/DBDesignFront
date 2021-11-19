import { useState } from 'react';

// project imports
// import axios from 'axios';

import * as React from 'react';
import Tooltip from '@mui/material/Tooltip';

import MenuParking from './menu_parking'

// ===============================|| COLOR BOX ||=============================== //

const Content = (props) =>{
    // const theme = useTheme();
    
    const [chosen, setChosen] = useState(false);

    const MouseHoverHandler = () =>{
        // console.log("hover");
        setChosen(true);
    }
    
    const MouseOutHandler = () =>{
        // console.log("out");
        setChosen(false);
    }
    
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.target);
    };

    return(
        <>

            {props.menu==="parking"&&<MenuParking name={props.name} setAnchorEl={setAnchorEl} anchorEl={anchorEl}/>}

            {/* 以下是建筑平面图SVG */}
            <Tooltip title={props.name} placement="left" arrow>
                  <polygon  points={props.d}  onClick={handleClick}     onMouseOver={MouseHoverHandler} onMouseOut={MouseOutHandler}   fill={chosen? props.fillColorC: props.fillColorNC}/>
            </Tooltip>
            {/* 建筑平面图SVG截止 */}
    
    </>
    );
}

export default Content;