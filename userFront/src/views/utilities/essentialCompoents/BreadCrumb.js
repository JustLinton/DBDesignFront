import * as React from 'react';
import { emphasize, styled } from '@mui/material/styles';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Chip from '@mui/material/Chip';
import HomeIcon from '@mui/icons-material/Home';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Grid} from '@mui/material';

const StyledBreadcrumb = styled(Chip)(({ theme }) => {
  const backgroundColor =
    theme.palette.mode === 'light'
      ? theme.palette.grey[200]
      : theme.palette.grey[800];
  return {
    backgroundColor,
    height: theme.spacing(3),
    color: theme.palette.text.primary,
    fontWeight: theme.typography.fontWeightRegular,
    '&:hover, &:focus': {
      backgroundColor: emphasize(backgroundColor, 0.06),
    },
    '&:active': {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(backgroundColor, 0.12),
    },
  };
}); // TypeScript only: need a type cast here because https://github.com/Microsoft/TypeScript/issues/26591

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function CustomizedBreadcrumbs(props) {
  return (
 
    <Grid container 
      // backgroundColor="#ffab91"
    >
        {
          props.third?
          <Breadcrumbs aria-label="breadcrumb">
          <StyledBreadcrumb component="a" href="/manage/dashboard" label="主页" icon={<HomeIcon fontSize="small" />} />
          <StyledBreadcrumb component="a" href={props.secondh} label={props.second} />   
          <StyledBreadcrumb  label={props.third} deleteIcon={<ExpandMoreIcon />} onDelete={handleClick}/> 
        </Breadcrumbs>

          :  props.second? 
          <Breadcrumbs aria-label="breadcrumb">
          <StyledBreadcrumb
          component="a"
          href="/manage/dashboard"
          label="主页"
          icon={<HomeIcon fontSize="small" />}
        />
          <StyledBreadcrumb component="a" href={props.secondh} label={props.second} /></Breadcrumbs>
          :
          <Breadcrumbs aria-label="breadcrumb">
          <StyledBreadcrumb
            component="a"
            href="/manage/dashboard"
            label="主页"
            icon={<HomeIcon fontSize="small" />}
          /> </Breadcrumbs>
        }
           </Grid>
  );
}