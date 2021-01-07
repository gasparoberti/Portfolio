import './App.css';
import { Container, createMuiTheme, Paper, ThemeProvider} from '@material-ui/core';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

import ItemScreen from './screen/ItemScreen';
import data from './data/dataList';
import GridsScreen from './screen/GridsScreen';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


const theme = createMuiTheme({
  palette: {
    // type: "light",
    type: "dark",
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
    },
  },
});

function App() {
  return (

    <ThemeProvider theme = {theme}>
      <Paper>
        <Container maxWidth="md">
          <Router>
            <Switch>
              {/* <Route exact path="/">
                <Carrousel/>
              </Route> */}
              <Route path="/list">
                <GridsScreen/>
              </Route>
              <Route path="/item">
                <ItemScreen item={data[2]}/>
              </Route>

            </Switch>
            
        
          </Router>
          
        </Container>

      </Paper>
      
    </ThemeProvider>
  );
}

export default App;
