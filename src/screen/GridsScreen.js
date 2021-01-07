import React from 'react';
import {Grid} from '@material-ui/core';

import AppCard from '../components/AppCard';
import dataList from '../data/dataList';

function GridsScreen(props) {
    return (
        <div>
            <Grid 
                container
                spacing={3}
                justify="center"
                alignItems="center"
            >
            {dataList.map(item=>
                <Grid item>
                    <AppCard title={item.title} desc={item.desc} img={item.img}/>
                </Grid>
            )}
            </Grid>
        </div>
    );
}

export default GridsScreen;