import * as React from 'react';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import { green } from '@mui/material/colors';
import Button from '@mui/material/Button';
import CheckIcon from '@mui/icons-material/Check';
import SendRoundedIcon from '@mui/icons-material/SendRounded';

export default function CircularIntegration(props) {
  // const [loading, setLoading] = React.useState(false);
  // const [success, setSuccess] = React.useState(false);
  // const timer = React.useRef();

  const buttonSx = {
    ...(props.success && {
      bgcolor: green[400],
	color:'#ffffff',
      '&:hover': {
        bgcolor: green[500],
	  color:'#ffffff',
      },
    }),
  };

  // React.useEffect(() => {
  //   return () => {
  //     clearTimeout(timer.current);
  //   };
  // }, []);

  // const handleButtonClick = () => {
  //   if (!props.loading) {
  //     props.setSuccess(false);
  //     props.setLoading(true);
  //     timer.current = window.setTimeout(() => {
  //       props.setSuccess(true);
  //       props.setLoading(false);
  //     }, 2000);
  //   }
  // };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>

      <Box sx={{ m: 0, position: 'relative' }}>

        <Button
          variant="outlined"
          sx={buttonSx}
          disabled={props.loading}
          onClick={props.handleButtonClick}
        >
		{props.success?<CheckIcon/> :<SendRoundedIcon/>}
        </Button>

        {props.loading && (
          <CircularProgress
            size={24}
            sx={{
              color: green[500],
              position: 'absolute',
              top: '50%',
              left: '50%',
              marginTop: '-12px',
              marginLeft: '-12px',
            }}
          />
        )}

      </Box>

    </Box>
  );
}