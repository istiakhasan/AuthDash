import { Button } from '@mui/material';
import React from 'react';

const JsButton = (props) => {
    return (<Button sx={{whiteSpace:"nowrap"}}  className='common-mui-button'   {...props}>{props.children}</Button> );
};

export default JsButton;