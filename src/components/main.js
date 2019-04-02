import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Aboutme from './aboutme';
import Projects from './projects';

import ContactsResume from './contactResume'


const Main = () =>(
    <Switch>
        <Route exact path ="/" component={Aboutme} />
        <Route path ="/aboutme" component={Aboutme} />
        <Route path ="/projects" component={Projects} />
        
        <Route path ="/contactResume" component={ContactsResume} />

    </Switch>
)


export default Main;