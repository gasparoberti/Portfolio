import './App.css';
import { Container, createMuiTheme, Paper, ThemeProvider, Typography} from '@material-ui/core';
import GridsScreen from './screen/GridsScreen';
import Home from './components/Home';
import HideAppBar from './components/HideAppBar';
import { blueGrey, grey } from '@material-ui/core/colors';
import Section from './components/Section';
import Footer from './components/Footer';


const theme = createMuiTheme({
  palette: {
    // type: "light",
    type: "dark",
    primary: {
      main: blueGrey[500],
    },
    secondary: {
      main: grey[500],
    },
  },
});

theme.typography.h2 = {
  fontSize: '5rem',
  '@media (min-width:0px)': {
    fontSize: '3rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '5rem',
  },
};

function App() {
  return (

    <ThemeProvider theme = {theme}>
      <Paper>
      <HideAppBar/>
      <div id="home">
        <Home/>
      </div>
        <Container maxWidth="md">
          
          <div id="skills">
            <Section title="Skills"/>
          </div>

          <div id="portfolio">
            <Section title="Portfolio"/>
            <GridsScreen/>
          </div>

          {/* {data.map(item => 
            <Route path={`/item/${item.id}`}>
              <ItemScreen item={item}/>
              </Route>
            )} */}
          

            <Footer/>
          
        </Container>

      </Paper>
      
    </ThemeProvider>
  );
}

export default App;
