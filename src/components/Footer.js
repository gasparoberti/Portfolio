import { Grid } from '@material-ui/core';
import React from 'react';
import IconButtons from './IconButtons';

function Footer(props) {
    return (
        <div style={ {margin: '40px'} }>
            <Grid 
                container
                justify="center"
                alignItems="center"
            >
                <IconButtons/>
            </Grid>
        </div>
    );
}

export default Footer;