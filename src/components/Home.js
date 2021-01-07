import { Grid, Typography } from '@material-ui/core';
import React from 'react';

import backgroundImage from '../images/coast-5870088_1920.jpg'

const styles={    
    paperContainer:{
        display:'flex',
        backgroundImage: `url(${backgroundImage})`,
        height:"100vh",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    }
}

function Home(props) {
    return (
        <div>
            <div style={styles.paperContainer}>
                <Grid container direction="column" justify='center' alignItems='center'>
                    <Grid item>
                        <Typography variant="h2" component="h2">
                            Nombre y apellido
                        </Typography>
                    </Grid>

                    <Grid item>
                        <Typography variant="h5" component="h2">
                            Descripción
                        </Typography>
                    </Grid>

                    <Grid item>
                        <Typography>
                            Redes
                        </Typography>
                    </Grid>
                    
                    
                </Grid>
            </div>
        </div>
    );
}

export default Home;