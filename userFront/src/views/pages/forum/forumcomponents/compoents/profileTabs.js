import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs(props) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    props.setPBody(newValue);
  };

  return (
    <Grid container sx={{ width: '100%' }} alignItems="flex-end" justifyContent="flex-end">

		<Grid item sx={{
			maxWidth: { xs: 270, md: 450 }
			}}>
			<Tabs 
				value={value} 
				onChange={handleChange} 
				aria-label="basic tabs example"
				textColor="secondary"
				indicatorColor="secondary"
				variant="scrollable"
				scrollButtons="auto"
			>
				<Tab label="主页" {...a11yProps(0)} />
        <Tab label="帖子" {...a11yProps(1)} />
				<Tab label="相册" {...a11yProps(2)} />
				<Tab label="留言板" {...a11yProps(3)} />
			</Tabs>
		</Grid>
    </Grid>
  );
}