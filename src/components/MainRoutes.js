import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './landingPage';
import Resume from './resume';
import Services from './services';
import Contacts from './contacts';
import ErrorPage from './errorPage';

const MainRoutes = () => {
    return(
        <Switch>
            <Route exact path="/" component={LandingPage}/>
            <Route exact path="/resume" component={Resume}/>
            <Route exact path="/contacts" component={Contacts}/>
            <Route exact path="/services" component={Services}/>
            <Route component={ErrorPage}/>
        </Switch>
    )
}

export default MainRoutes;

/*
or...
          <Route path="/aboutme">
            <About />
          </Route>
          <Route path="/contacts">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
*/