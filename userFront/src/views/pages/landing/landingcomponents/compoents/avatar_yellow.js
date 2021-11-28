import { styled } from '@mui/material/styles';
import { Avatar} from '@mui/material';


const YellowAvatar = styled(Avatar)(({ theme }) => ({
      '&.MuiAvatar-colorDefault': {
            backgroundColor: theme.palette.secondary.main,
            color: '#fff',
      },
}));

export default YellowAvatar;