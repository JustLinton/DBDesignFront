import PropTypes from 'prop-types';
// import { useState } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import {  Checkbox, CardContent, Grid, Typography } from '@mui/material';
// import {  Menu,MenuItem } from '@mui/material';

import * as React from 'react';
// import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import DeleteIcon from '@mui/icons-material/Delete';
import Snackbar from '@mui/material/Snackbar';
// import FilterListIcon from '@mui/icons-material/FilterList';
import { visuallyHidden } from '@mui/utils';
// import MenuOpenRoundedIcon from '@mui/icons-material/MenuOpenRounded';
import CloseIcon from '@mui/icons-material/Close';
// project imports
// import BajajAreaChartCard from './BajajAreaChartCard';
import MainCard from 'ui-component/cards/MainCard';
import SkeletonNewPostCard from 'ui-component/cards/Skeleton/NewPostCard';
// import { gridSpacing } from 'store/constant';

// assets
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';

import UsermanDataCard from 'views/utilities/cards/userman/compoents/UsermanDataCard.js';
import Breadcrumb from 'views/utilities/essentialCompoents/BreadCrumb.js'

import EditDialog from 'views/utilities/essentialCompoents/dialog_uoverview_edit.js'
import axios from 'axios';

// ==============================|| DASHBOARD DEFAULT - POPULAR CARD ||============================== //

function createData(name, calories, fat, carbs, protein) {
    return {
      name,
      calories,
      fat,
      carbs,
      protein,
    };
  }
  
  var rows = [
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Donut', 452, 25.0, 51, 4.9),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
    createData('Honeycomb', 408, 3.2, 87, 6.5),
  ];
  
  function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  }
  
  function getComparator(order, orderBy) {
    return order === 'desc'
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  }
  
  // This method is created for cross-browser compatibility, if you don't
  // need to support IE11, you can use Array.prototype.sort() directly
  function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) {
        return order;
      }
      return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
  }
  
  const headCells = [
    {
      id: 'name',
      numeric: false,
      disablePadding: true,
      label: '姓名',
    },
    {
      id: 'phone',
      numeric: true,
      disablePadding: false,
      label: '电话',
    },
    {
      id: 'pgname',
      numeric: true,
      disablePadding: false,
      label: '权限',
    },
    {
      id: 'idcard',
      numeric: true,
      disablePadding: false,
      label: '身份证',
    },
    {
      id: 'email',
      numeric: true,
      disablePadding: false,
      label: '邮箱',
    }
//     {
//       id: 'uid',
//       numeric: false,
//       disablePadding: false,
//       label: 'UID',
//     }
  ];
  

  function EnhancedTableHead(props) {
    const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
      props;
    const createSortHandler = (property) => (event) => {
      onRequestSort(event, property);
    };
  
    return (
      <TableHead>
        <TableRow>


          {props.multiSel&& <TableCell padding="checkbox">
            <Checkbox
              color="primary"
              indeterminate={numSelected > 0 && numSelected < rowCount}
              checked={rowCount > 0 && numSelected === rowCount}
              onChange={onSelectAllClick}
              inputProps={{
                'aria-label': 'select all desserts',
              }}
            />
          </TableCell>}


          {headCells.map((headCell) => (
            <TableCell
              key={headCell.id}
              align={headCell.numeric ? 'right' : 'left'}
              padding={headCell.disablePadding ? 'none' : 'normal'}
              sortDirection={orderBy === headCell.id ? order : false}
            >
              <TableSortLabel
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : 'asc'}
                onClick={createSortHandler(headCell.id)}
              >
                {headCell.label}
                {orderBy === headCell.id ? (
                  <Box component="span" sx={visuallyHidden}>
                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                  </Box>
                ) : null}
              </TableSortLabel>
            </TableCell>
          ))}


          {/* 从这里添加操作（表头） */}
          <TableCell padding="checkbox">
                 操作
          </TableCell>

        </TableRow>
      </TableHead>
    );
  }
  
  EnhancedTableHead.propTypes = {
    numSelected: PropTypes.number.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    onSelectAllClick: PropTypes.func.isRequired,
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired,
  };
  
  const EnhancedTableToolbar = (props) => {
    const { numSelected } = props;
  
    return (
      
      <Grid container  sx={{pt:2}} 
        // backgroundColor="#ffab91"
      >
	    <FormControlLabel
		control={<Switch checked={props.multiSwitchChecked} onChange={props.onMultiSwitchChange} />}
		label="多选"
		/>
         {numSelected > 0 ?
           <Toolbar
           sx={{
             pl: { sm: 2 },
             pr: { xs: 1, sm: 1 }
           }}
         >
           {numSelected > 0 ? (
             
             <Typography
               sx={{ flex: '1 1 100%' }}
               color="inherit"
               variant="subtitle1"
               component="div"
             >
              已选择 {numSelected} 个
             </Typography>
           ) : (
             // <Typography
             //   sx={{ flex: '1 1 100%' }}
             //   variant="h4"
             //   id="tableTitle"
             //   component="div"
             // >
             //   用户简表
             // </Typography>
             <></>
           )}
     
           {numSelected > 0 ? (
             <Tooltip title="Delete">
               <IconButton>
                 <DeleteIcon />
               </IconButton>
             </Tooltip>
           ) : (
             <></>
             // <Tooltip title="Filter list">
             //   <IconButton>
             //     <FilterListIcon />
             //   </IconButton>
             // </Tooltip>
           )}
     
         </Toolbar>:<></>
        }
    
      </Grid>
    );
  };
  
  EnhancedTableToolbar.propTypes = {
    numSelected: PropTypes.number.isRequired,
  };
  
function EnhancedTable() {

  const timer = React.useRef();
	
	const [editDialogState, setEditDialogState] = React.useState({
		open: false,
		scroll: 'body',
		row: {'name':'null'},
		gotData: {'Name':'null'},
	});

	const [snackState, setSnackState] = React.useState({
		open: false,
		message: '成功',
		undo: false,
	});


	const [multiSel, setMultiSel] = React.useState(false);

    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('calories');
    const [selected, setSelected] = React.useState([]);
    const [page, setPage] = React.useState(0);
    // const [dense, setDense] = React.useState(false);
    const [rowsPerPage, setRowsPerPage] = React.useState(15);


  
    const handleRequestSort = (event, property) => {
      const isAsc = orderBy === property && order === 'asc';
      setOrder(isAsc ? 'desc' : 'asc');
      setOrderBy(property);
    };
  


    const handleClickEdit = (event,row) => {
		// setEditOpenDialog(true);
		// setEditDialogScroll('body');
		// curEditRow=row;
		// setEditDialogUserName(row);

    setEditDialogState({
      open: true,
      scroll: 'body',
      row: row,
      loading: true,
      gotData:{'Name':'null'},
      insufPermission:false
    })


    axios.get("/api/haveperm", {
      　　params: { 'permid': 209 }
      }).then(function (response) {
      // 　　alert(''.concat(response.data, '\r\n', response.status, '\r\n', response.statusText, '\r\n', response.headers, '\r\n', response.config));
      if(response.status===200){
         //鉴权请求
      
	   if(response.data==="notlogged"){
            window.location='/auth/login';
        }

          if(response.data==="ok"){
          //该用户有相应的权限
          setEditDialogState({
            open: true,
            scroll: 'body',
            row: row,
            loading: true,
            gotData:{'Name':'null'},
            insufPermission:true
          })
          }
      
          axios.get("/api/userinfo", {
          　　params: { 'uid': row.uid}
          }).then(function (response) {
              // 　　alert(''.concat(response.data, '\r\n', response.status, '\r\n', response.statusText, '\r\n', response.headers, '\r\n', response.config));
              if(response.status===200){
             
          
              if(response.data==="notlogged"){
              window.location='/auth/login';
              }


            //   console.log(response.data);

              //结束加载(并强制欣赏加载动画)
              timer.current = window.setTimeout(() => {
   
                  setEditDialogState({
                    open: true,
                    scroll: 'body',
                    row: row,
                    loading: false,
                    gotData:response.data,
                  })

			// console.log(editDialogState.gotData);

              },450)
              
              }
                }).catch(function (error) {
                // 　　alert(error);
                });
          
          // console.log(userData);
          }
      }).catch(function (error) {
      // 　　alert(error);
      });

    };

    const handleClickSnack = (event,reason) => {
	if (reason === 'clickaway') {
		return;
	}

	setSnackState({
		open: false,
		message:snackState.message,
		undo: false,
	})
};


    const handleSelectAllClick = (event) => {
      if (event.target.checked) {
        const newSelecteds = rows.map((n) => n.name);
        setSelected(newSelecteds);
        return;
      }
      setSelected([]);
    };
  
    const handleClick = (event, name) => {

	    //如果不是多选，就不用处理
	    if(!multiSel)return;

      const selectedIndex = selected.indexOf(name);
      let newSelected = [];
  
      if (selectedIndex === -1) {
        newSelected = newSelected.concat(selected, name);
      } else if (selectedIndex === 0) {
        newSelected = newSelected.concat(selected.slice(1));
      } else if (selectedIndex === selected.length - 1) {
        newSelected = newSelected.concat(selected.slice(0, -1));
      } else if (selectedIndex > 0) {
        newSelected = newSelected.concat(
          selected.slice(0, selectedIndex),
          selected.slice(selectedIndex + 1),
        );
      }
  
      setSelected(newSelected);
    };
  
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
    };
  
    const handleSwitchMultiSel = (event) => {
      setMultiSel(event.target.checked);
      if(!event.target.checked) setSelected([]);
    };

    const isSelected = (name) => selected.indexOf(name) !== -1;
  
    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
      page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;
  

	const snackbarActionWithUNDO = (
		<React.Fragment>
		  <Button color="secondary" size="small" onClick={handleClickSnack}>
		    撤销
		  </Button>
		  <IconButton
		    size="small"
		    aria-label="close"
		    color="inherit"
		    onClick={handleClickSnack}
		  >
		    <CloseIcon fontSize="small" />
		  </IconButton>
		</React.Fragment>
	    );

	    const snackbarAction = (
		<React.Fragment>
		  <IconButton
		    size="small"
		    aria-label="close"
		    color="inherit"
		    onClick={handleClickSnack}
		  >
		    <CloseIcon fontSize="small" />
		  </IconButton>
		</React.Fragment>
	    );

    return (
      <Box sx={{ width: '100%' }}>
			

	<Snackbar
		open={snackState.open}
		autoHideDuration={2000}
		onClose={handleClickSnack}
		message={snackState.message}
		action={snackState.undo?snackbarActionWithUNDO:snackbarAction}
		anchorOrigin={{vertical:'bottom', horizontal:'right'}}
	/>

	<EditDialog
		state={editDialogState}
		setState={setEditDialogState}
		setSnackState={setSnackState}
	/>

        <Paper sx={{ width: '100%' }}>

        <UsermanDataCard isLoading={false} />

          <EnhancedTableToolbar multiSwitchChecked={multiSel} onMultiSwitchChange={handleSwitchMultiSel} numSelected={selected.length}  />
          
          <TableContainer>

            <Table
              sx={{ minWidth: 750 }}
              aria-labelledby="tableTitle"
              size={'medium'}
            >
	
              <EnhancedTableHead
                numSelected={selected.length}
		    multiSel={multiSel}
                order={order}
                orderBy={orderBy}
                onSelectAllClick={handleSelectAllClick}
                onRequestSort={handleRequestSort}
                rowCount={rows.length}
              />
              <TableBody>
                {/* if you don't need to support IE11, you can replace the `stableSort` call with:
                   rows.slice().sort(getComparator(order, orderBy)) */}
                {stableSort(rows, getComparator(order, orderBy))
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => {
                    const isItemSelected = isSelected(row.phone);
                    const labelId = `enhanced-table-checkbox-${index}`;
  
                    return (
                      <TableRow
                        hover
                        onClick={(event) => handleClick(event, row.phone)}
                        role="checkbox"
                        aria-checked={isItemSelected}
                        tabIndex={-1}
                        key={row.phone}
                        selected={isItemSelected}
                      >

				    {
						multiSel&&     
						<TableCell padding="checkbox">
							<Checkbox
							color="primary"
							checked={isItemSelected}
							inputProps={{
							'aria-labelledby': labelId,
							}}
							/>
						</TableCell>
				    }
                   

                        <TableCell
                          component="th"
                          id={labelId}
                          scope="row"
                          padding="none"
                        >
                          {row.name}

                          {/* 从这里修改列名 */}
                        </TableCell>
                        <TableCell align="right">{row.phone}</TableCell>
                        <TableCell align="right">{row.pgname}</TableCell>
                        <TableCell align="right">{row.idcard}</TableCell>
                        <TableCell align="right">{row.email}</TableCell>

                          {/* 从这里添加操作（每行） */}
                        <TableCell padding="checkbox">
                        	<Button 
						variant="outlined" 
						// onClick={() => {

						// 	}} 
						onClick={(event) => handleClickEdit(event,row)}
						>
						修改
					</Button>
                        </TableCell>

                      </TableRow>
                    );
                  })}
                {emptyRows > 0 && (
                  <TableRow
                    style={{
                      height: (53) * emptyRows,
                    }}
                  >
                    <TableCell colSpan={6} />
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 15, 25,40]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />



        </Paper>
    
      </Box>
    );
  }

const PostList = (props) =>{

  

    return(
        <Grid container direction="column" sx={{pt:2}}>
            <EnhancedTable/>                    
        </Grid>
    );
}

const NewpostCard = (props) => {
    const theme = useTheme();

    // const [anchorEl, setAnchorEl] = useState(null);

    // const handleClick = (event) => {
    //     setAnchorEl(event.currentTarget);
    // };

    // const handleClose = () => {
    //     setAnchorEl(null);
    // };

    rows=props.tableData;

    // console.log(props.tableData);
    // console.log(rows);

    return (
        <>
            {props.isLoading ? (
                <SkeletonNewPostCard />
            ) : (
                <MainCard content={false}>
              
                    <CardContent>    

                        <Grid container sx={{pl:"3%",pr:"3%"}}>

                              <Grid item xs={12} sx={{ pt: '43px !important' }}  ></Grid>
                              
                              <Grid item xs={12} md={7} >
                                  <Grid container spacing={1} alignContent="center" >
                                      <Grid container item  xs={1}  justifyContent="flex-start" >
                                          <ChevronRightOutlinedIcon />
                                      </Grid>
                                      <Grid  container item  xs={11}  justifyContent="flex-start" direction="column">


                                          <Breadcrumb
                                          second="业主和用户管理"
                                          secondh="#"
                                          third="用户总览"
                                          />


                                          {/* <Typography variant="h2">用户总览</Typography>
                                          <Typography variant="body">管理所有用户</Typography> */}
                                      </Grid>

                                    {/* <Grid item xs={1}>
                                        <MenuOpenRoundedIcon
                                            sx={{
                                                color: theme.palette.primary.main,
                                                cursor: 'pointer'
                                            }}
                                            aria-controls="menu-popular-card"
                                            aria-haspopup="true"
                                            onClick={handleClick}
                                        />
                                        <Menu
                                            id="menu-popular-card"
                                            anchorEl={anchorEl}
                                            keepMounted
                                            open={Boolean(anchorEl)}
                                            onClose={handleClose}
                                            variant="selectedMenu"
                                            anchorOrigin={{
                                                vertical: 'bottom',
                                                horizontal: 'right'
                                            }}
                                            transformOrigin={{
                                                vertical: 'top',
                                                horizontal: 'right'
                                            }}
                                        >
                                            <MenuItem onClick={handleClose}> Today</MenuItem>
                                            <MenuItem onClick={handleClose}> This Month</MenuItem>
                                            <MenuItem onClick={handleClose}> This Year </MenuItem> *
                                        </Menu>
                                    </Grid> */}

                                </Grid>
                            </Grid>


                            <PostList theme={theme} />

   

                        </Grid>

                    </CardContent>
                   
                </MainCard>
            )}
        </>
    );
};


export default NewpostCard;
