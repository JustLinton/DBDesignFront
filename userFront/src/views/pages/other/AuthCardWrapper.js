import PropTypes from 'prop-types';

// material-ui
import { Box,Grid } from '@mui/material';

// project import
import MainCard from 'ui-component/cards/MainCard';

// ==============================|| AUTHENTICATION CARD WRAPPER ||============================== //

const AuthCardWrapper = ({ children, ...other }) => (
    <Grid container>
		<MainCard
		sx={{
			maxWidth: { xs: 400, lg: 475 },
			margin: { xs: 2.5, md: 3 },
			'& > *': {
				flexGrow: 1,
				flexBasis: '50%'
			}
		}}
		content={false}
		{...other}
		>
		<Box sx={{ p: { xs: 2, sm: 3, xl: 5 } }}>{children}</Box>
		</MainCard>
    </Grid>

);

AuthCardWrapper.propTypes = {
    children: PropTypes.node
};

export default AuthCardWrapper;
