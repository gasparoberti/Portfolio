import { Box, Grid, Typography } from '@material-ui/core';
import React from 'react';

function Section(props) {
    return (
        <div style={ {margin: '40px'} }>
            <Grid 
                container
                justify="center"
                alignItems="center"
            >
                <Typography variant="h3" component="h3">
                    <Box fontWeight="fontWeightBold">
                        {props.title} 
                    </Box>
                </Typography>
            </Grid>
        </div>
    );
}

export default Section;