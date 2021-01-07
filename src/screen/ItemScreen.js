import { Card, CardContent, Grid, Typography } from '@material-ui/core';
import React from 'react';
import Carrousel from '../components/Carrousel';
// import image from '../images/contemplative-reptile.jpg';

function ItemScreen({item}) {
    return (
        <Card>
            <CardContent>
                <Grid container spacing={3}>
                    <Grid item md={8}>
                        {/* <CardMedia component="img" image={item.img}/> */}
                        <Carrousel/>
                    </Grid>
                    <Grid item md={4}>
                        <Typography variant="h4" color="initial">
                            {item.title}
                        </Typography>
                        <Typography variant="h6" color="initial">
                            {item.desc}
                        </Typography>

                    </Grid>

                </Grid>
                
            </CardContent>
            
        </Card>
    );
}

export default ItemScreen;