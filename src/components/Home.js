import { Container, Grid, Typography } from '@material-ui/core';
import React from 'react';

import backgroundImage from '../images/coast-5870088_1920.jpg'
import IconButtons from './IconButtons';

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
                    <Grid container spacing={4} direction="column" justify='center' alignItems='center'>
                        <Grid item>
                            <Typography variant="h2" component="h2">
                                Nombre y apellido
                            </Typography>
                        </Grid>

                        <Container maxWidth="md">
                            <Grid item>
                                <Typography align="center" variant="h6" component="h6">
                                Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset".
                                </Typography>
                            </Grid>
                        </Container>

                        <Grid item>
                            <IconButtons/>
                        </Grid>
                        
                        
                        
                    </Grid>
            </div>
        </div>
    );
}

export default Home;