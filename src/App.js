import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  useParams
} from 'react-router-dom'

import Landing from './pages/Landing'
import Profile from './pages/Profile';
import Editprofile from './pages/Editprofile';
import Login from './pages/Login'
import Register from './pages/Register';
import Postcompany from './pages/Postcompany';
import ListCompany from './pages/Listcompany';
import Postengineer from './pages/Postengineer';
import Work from './pages/Work';
import ProtectRoute from './auth/ProtectRoute'
import Form from './pages/Form'
import Project from './pages/Project'
import Editengineer from './pages/Editengineer';
import Listproject from './pages/Listproject';
import Pageproject from './pages/Pageproject';
import Myprofile from './pages/Myprofile'

// function Child(){
//   let { id } = useParams();
//   console.log(id);
//   return (<Profile name={id}/>)
  
// }

function App() {
  
  return (
    <Router>
      <Route 
      exact
      path={'/'}
      component={Login}
      />
    
      <Route 
      path={'/edit'}
      component={Editengineer}
      />
      <Route 
      path={'/profile/:idEngineer'}
      component={Profile}
      />

      <Route 
      path={'/myprofile'}
      component={Myprofile}
      />

      <Route 
      path={'/home'}
      component={Landing}
      />
      <Route 
      path={'/listproject'}
      component={Listproject}
      />
      <Route 
      path={'/listpro'}
      component={Pageproject}
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
      <Route path={'/project'} 
      component={Project}/>
     
      <Route 
      path={'/work'}
      component={Work}
      />
      <Route 
      path={'/allcomp'}
      component={ListCompany}
      />
    
     
       
    </Router>
  );
}



export default App;
