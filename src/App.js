import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import Landing from './pages/Landing'
import Profile from './pages/Profile';
import Editprofile from './pages/Editprofile';
import Login from './pages/Login'
import Register from './pages/Register';
import Postcompany from './pages/Postcompany';
import ListCompany from './pages/Listcompany';
import Postengineer from './pages/Postengineer';

function App() {
  return (
    <Router>
      <Route 
      exact
      path={'/'}
      component={Login}
      />
      <Route 
      path={'/profile'}
      component={Profile}
      />
      <Route 
      path={'/edit'}
      component={Editprofile}
      />
          <Route 
      path={'/home'}
      component={Landing}
      />
              <Route 
      path={'/register'}
      component={Register}
      />
                  <Route 
      path={'/regcompany'}
      component={Postcompany}
      />
                  <Route 
      path={'/regengineer'}
      component={Postengineer}
      />
                      <Route 
      path={'/allcomp'}
      component={ListCompany}
      />
       
    </Router>
  );
}

export default App;
