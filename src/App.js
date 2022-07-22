import logo from './logo.svg';
import './App.css';
import { AppBar, Container, Grid, Typography } from '@mui/material';
import PrimarySearchAppBar from './conmponents/AppBar';
import RecipeReviewCard from './conmponents/Cards';
import StickyFooter from './conmponents/StickyFooter';

import Banner from './conmponents/Slider';
import Shop from './conmponents/Shop';
import Balance from './conmponents/Balance';

function App() {
  return (
    <>
    <PrimarySearchAppBar />
    {/* <Banner /> */}
    <Balance />
    <br></br>
    <Typography variant='h4' align='center' >Items </Typography>
    <Grid container style={{marginTop: '20px', justifyContent: 'center'}}>
      <Grid lg={4} md={6} sm={12} >
      <RecipeReviewCard />
      </Grid>
      <Grid lg={4} md={6}  sm={12}>
      <RecipeReviewCard />
      </Grid>
      <Grid lg={4} md={6}  sm={12}>
      <RecipeReviewCard />
      </Grid>
    </Grid>
    <br></br>
    <Shop />
    <StickyFooter />
  
    
    
    </>
 
  );
}

export default App;
