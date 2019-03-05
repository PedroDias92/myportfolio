import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Landingpage from './landingpage';
import Aboutme from './aboutme';
import Projects from './projects';
import Resume from './resume';
import Contact from './contact'


const Main = () =>(
    <Switch>
        <Route exact path ="/" component={Landingpage} />
        <Route path ="/aboutme" component={Aboutme} />
        <Route path ="/projects" component={Projects} />
        <Route path ="/resume" component={Resume} />
        <Route path ="/contact" component={Contact} />

    </Switch>
)


export default Main;