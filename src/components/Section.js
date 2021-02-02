import { Grid, Typography } from '@material-ui/core';
import React from 'react';

function Section(props) {
    return (
        <div style={ {margin: '40px'} }>
            <Grid 
                container
                justify="center"
                alignItems="center"
            >
                <Typography variant="h3" component="h2">{props.title} </Typography>
            </Grid>
        </div>
    );
}

export default Section;