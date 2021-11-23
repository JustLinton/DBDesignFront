import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const options = ['业主用户', '水务员','超级管理员'];

export default function ControllableStates(props) {
  // const [value, setValue] = React.useState(props.default);
  // const [inputValue, setInputValue] = React.useState('');

  return (
    <div>
      <Autocomplete
        value={props.value}
        onChange={props.onChange}
        inputValue={props.inputValue}
        onInputChange={(event, newInputValue) => {
          props.setInputValue(newInputValue);
        }}
        id="csa"
        options={options}
        renderInput={(params) => <TextField {...params}  />}
      />
    </div>
  );
}