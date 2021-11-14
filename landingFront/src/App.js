import * as React from 'react';
import ReactDOM from 'react-dom';

import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/styles';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import AddIcon from '@material-ui/icons/Add';
import { Box } from '@material-ui/core';


// import logo from './logo.svg';
// import './App.css';

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

function App() {
	const classes = useStyles();

	return (
		<div className="App">
			<Button  variant="contained" className={classes.root}>Hook</Button>
			Edit <code>src/App.js</code> and save to reload.
			<Button variant="contained">Hello, world!</Button>
			<Fab color="primary" aria-label="add">
			<AddIcon />
			</Fab>
		</div>
		);
}

export default App;
