import * as React from 'react';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import { yellow } from '@mui/material/colors';
import Button from '@mui/material/Button';
import CheckIcon from '@mui/icons-material/Check';

export default function CircularIntegration(props) {
  // const [loading, setLoading] = React.useState(false);
  // const [success, setSuccess] = React.useState(false);
  // const timer = React.useRef();

  const buttonSx = {
    ...(props.success && {
      bgcolor: yellow[400],
	color:'#ffffff',
      '&:hover': {
        bgcolor: yellow[500],
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

      <Box sx={{ m: 1, position: 'relative' }}>

        <Button
          variant="text"
          sx={buttonSx}
          disabled={props.loading}
          color="secondary"
          onClick={props.handleButtonClick}
        >
		{props.success?<CheckIcon/> :<div>{props.text}</div>}
        </Button>

        {props.loading && (
          <CircularProgress
            size={24}
            sx={{
              color: yellow[500],
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