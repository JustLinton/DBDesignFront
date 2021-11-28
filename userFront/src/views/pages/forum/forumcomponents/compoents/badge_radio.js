import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';

const StyledBadge = styled(Badge)(({ theme }) => ({
      '& .MuiBadge-badge': {
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.secondary.main,
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
        width:  '10px',
        height: '10px',
        '&::after': {
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          borderRadius: '50%',
          animation: 'ripple 1.2s infinite ease-in-out',
          border: '1px solid currentColor',
          content: '""',
        },
      },
      '@keyframes ripple': {
        '0%': {
          transform: 'scale(.8)',
          opacity: 1,
        },
        '100%': {
          transform: 'scale(2.9)',
          opacity: 0,
        },
      },
    }));

    export default StyledBadge;