import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
// import {ThemeProvider} from '@material-ui/core/styles';
// import theme from './Themes/Default'

ReactDOM.render(
//  <ThemeProvider theme={theme}>
//    {/* <Router> */}
//      <App />
//    {/* </Router> */}
   
//  </ThemeProvider>
<Router>
  <App/>
</Router>
    
 ,
  document.getElementById('sunnyDale')
);

