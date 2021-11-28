// material-ui
import { Link, Typography, Stack } from '@mui/material';

// ==============================|| FOOTER - AUTHENTICATION 2 & 3 ||============================== //

const ForumFooter = () => (
    <Stack direction="row" justifyContent="space-between">
        <Typography variant="subtitle2" component={Link} href="http://a.cupof.beer" target="_blank" underline="hover">
            Copyright&copy; 2021-2022 JustLinton
        </Typography>
        <Typography variant="subtitle2" component={Link} target="_blank">
            Database System Design 2021
        </Typography>
    </Stack>
);

export default ForumFooter;
