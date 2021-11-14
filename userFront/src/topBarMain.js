import * as React from 'react';
import ReactDOM from 'react-dom';

import { makeStyles } from '@material-ui/styles';
import { styled, alpha } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NearMeIcon from '@material-ui/icons/NearMe';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const useStyles = makeStyles({
	root: {
		background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
		border: 0,
		borderRadius: 3,
		boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
		color: 'black',
		height: 48,
		padding: '0 30px',
	},
	
});

const StyledTabs = styled((props) => (
	<Tabs
	  {...props}
	  TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
	/>
  ))({
	'& .MuiTabs-indicator': {
	  display: 'flex',
	  justifyContent: 'center',
	  backgroundColor: 'transparent',
	},
	'& .MuiTabs-indicatorSpan': {
	  maxWidth: 40,
	  width: '100%',
	  backgroundColor: '#FFFFFF',
	},
  });
  
  const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
	({ theme }) => ({
	  textTransform: 'none',
	  fontWeight: theme.typography.fontWeightRegular,
	  fontSize: theme.typography.pxToRem(15),
	  marginRight: theme.spacing(1),
	  color: 'rgba(255, 255, 255, 0.7)',
	  '&.Mui-selected': {
		color: '#fff',
	  },
	  '&.Mui-focusVisible': {
		backgroundColor: 'rgba(100, 95, 228, 0.32)',
	  },
	}),
  );
  

const Search = styled('div')(({ theme }) => ({
	position: 'relative',
	borderRadius: theme.shape.borderRadius,
	backgroundColor: alpha(theme.palette.common.white, 0.15),
	'&:hover': {
	  backgroundColor: alpha(theme.palette.common.white, 0.25),
	},
	marginRight: theme.spacing(2),
	marginLeft: 0,
	width: '100%',
	[theme.breakpoints.up('sm')]: {
	  marginLeft: theme.spacing(3),
	  width: 'auto',
	},
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
	padding: theme.spacing(0, 2),
	height: '100%',
	position: 'absolute',
	pointerEvents: 'none',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
	color: 'inherit',
	'& .MuiInputBase-input': {
	  padding: theme.spacing(1, 1, 1, 0),
	  // vertical padding + font size from searchIcon
	  paddingLeft: `calc(1em + ${theme.spacing(4)})`,
	  transition: theme.transitions.create('width'),
	  width: '100%',
	  [theme.breakpoints.up('md')]: {
		width: '20ch',
	  },
	},
  }));
  
  export default function PrimarySearchAppBar() {

	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
	  setValue(newValue);
	};

	const [anchorEl, setAnchorEl] = React.useState(null);
	const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  
	const isMenuOpen = Boolean(anchorEl);
	const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  
	const handleProfileMenuOpen = (event) => {
	  setAnchorEl(event.currentTarget);
	};
  
	const handleMobileMenuClose = () => {
	  setMobileMoreAnchorEl(null);
	};
  
	const handleMenuClose = () => {
	  setAnchorEl(null);
	  handleMobileMenuClose();
	};
  
	const handleMobileMenuOpen = (event) => {
	  setMobileMoreAnchorEl(event.currentTarget);
	};
  
	const menuId = 'primary-search-account-menu';
	const renderMenu = (
	  <Menu
		anchorEl={anchorEl}
		anchorOrigin={{
		  vertical: 'top',
		  horizontal: 'right',
		}}
		id={menuId}
		keepMounted
		transformOrigin={{
		  vertical: 'top',
		  horizontal: 'right',
		}}
		open={isMenuOpen}
		onClose={handleMenuClose}
	  >
		<MenuItem onClick={handleMenuClose}>Profile</MenuItem>
		<MenuItem onClick={handleMenuClose}>My account</MenuItem>
	  </Menu>
	);
  
	const BootstrapButton = styled(Button)({
		boxShadow: 'none',
		textTransform: 'none',
		fontSize: 16,
		padding: '19px 12px',
		border: '1px solid',
		lineHeight: 1.5,
		backgroundColor: '#FFFFFF',
		color:'#0063cc',
		borderColor: '#0063cc',
		'&:hover': {
		  backgroundColor: '#0069d9',
		  borderColor: '#0062cc',
		  boxShadow: 'none',
		},
		'&:active': {
		  boxShadow: 'none',
		  backgroundColor: '#0062cc',
		  borderColor: '#005cbf',
		},
		'&:focus': {
		  boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
		},
	  });
	  

	const mobileMenuId = 'primary-search-account-menu-mobile';
	const renderMobileMenu = (
	  <Menu
		anchorEl={mobileMoreAnchorEl}
		anchorOrigin={{
		  vertical: 'top',
		  horizontal: 'right',
		}}
		id={mobileMenuId}
		keepMounted
		transformOrigin={{
		  vertical: 'top',
		  horizontal: 'right',
		}}
		open={isMobileMenuOpen}
		onClose={handleMobileMenuClose}
	  >
		<MenuItem>
		  <IconButton size="large" aria-label="show 4 new mails" color="inherit">
			<Badge badgeContent={4} color="error">
			  <MailIcon />
			</Badge>
		  </IconButton>
		  <p>Messages</p>
		</MenuItem>
		<MenuItem>
		  <IconButton
			size="large"
			aria-label="show 17 new notifications"
			color="inherit"
		  >
			<Badge badgeContent={17} color="error">
			  <NotificationsIcon />
			</Badge>
		  </IconButton>
		  <p>Notifications</p>
		</MenuItem>
		<MenuItem onClick={handleProfileMenuOpen}>
		  <IconButton
			size="large"
			aria-label="account of current user"
			aria-controls="primary-search-account-menu"
			aria-haspopup="true"
			color="inherit"
		  >
			<AccountCircle />
		  </IconButton>
		  <p>Profile</p>
		</MenuItem>
	  </Menu>
	);
  
	return (
	  <Box sx={{ flexGrow: 1 }}>
		<AppBar position="static">
		  <Toolbar>
		
		  <Box sx={{ p: 1}} />
		  <NearMeIcon/>
		  <Box sx={{ p: 1}} />
			<Typography
			  variant="h6"
			  noWrap
			  component="div"
			  sx={{ display: { xs: 'none', sm: 'block' } }}
			>
			   LibreFlights
			</Typography>
			
			<Box sx={{ p: 3}} />
			<StyledTabs
				value={value}
				onChange={handleChange}
				aria-label="styled tabs example"
				>
				<StyledTab label="Workflows" />
				<StyledTab label="Datasets" />
				<StyledTab label="Connections" />
			</StyledTabs>
       		 

			<Box sx={{ flexGrow: 1 }} />
			<Search>
			  <SearchIconWrapper>
				<SearchIcon />
			  </SearchIconWrapper>
			  <StyledInputBase
				placeholder="搜索…"
				inputProps={{ 'aria-label': 'search' }}
			  />
			</Search>
			<Box sx={{ display: { xs: 'none', md: 'flex' } }}>
			  <IconButton size="large" aria-label="show 4 new mails" color="inherit">
				<Badge badgeContent={4} color="error">
				  <MailIcon />
				</Badge>
			  </IconButton>
			  <IconButton
				size="large"
				aria-label="show 17 new notifications"
				color="inherit"
			  >
				<Badge badgeContent={17} color="error">
				  <NotificationsIcon />
				</Badge>
			  </IconButton>
			  <IconButton
				size="large"
				edge="end"
				aria-label="account of current user"
				aria-controls={menuId}
				aria-haspopup="true"
				onClick={handleProfileMenuOpen}
				color="inherit"
			  >
				<AccountCircle />
			  </IconButton>
			</Box>
			<Box sx={{ display: { xs: 'flex', md: 'none' } }}>
			  <IconButton
				size="large"
				aria-label="show more"
				aria-controls={mobileMenuId}
				aria-haspopup="true"
				onClick={handleMobileMenuOpen}
				color="inherit"
			  >
				<MoreIcon />
			  </IconButton>
			</Box>
		  </Toolbar>
		</AppBar>
		{renderMobileMenu}
		{renderMenu}
	  </Box>
	);
  }