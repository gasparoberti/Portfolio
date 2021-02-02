import React from 'react';
import PropTypes from 'prop-types';
import {Grid} from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import { Button } from '@material-ui/core';
import { Link } from 'react-scroll';

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default function HideAppBar(props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar color="primary">
          <Toolbar>
            {/* <Typography variant="h6">Scroll to Hide App Bar</Typography> */}
            <Grid 
                container
                spacing={3}
                justify="center"
                alignItems="center"
            >
                <Link activeClass="active" to="home" spy={true} smooth={true} offset={50} duration={500}>
                    <Button color="inherit">Home</Button>
                </Link>
                <Link activeClass="active" to="sobremi" spy={true} smooth={true} offset={50} duration={500}>
                    <Button color="inherit">Sobre Mí</Button>
                </Link>
                <Link activeClass="active" to="skills" spy={true} smooth={true} offset={50} duration={500}>
                    <Button color="inherit">Skills</Button>
                </Link>
                <Link activeClass="active" to="portfolio" spy={true} smooth={true} offset={50} duration={500}>
                    <Button color="inherit">Portfolio</Button>
                </Link>
                
            </Grid>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </React.Fragment>
  );
}
