import React from "react";
import Question from './question'
import Confirm from './Confirm'
import Home from './Home';
import End from './End';
import { Route, Switch } from 'react-router';


const Survey=({match})=>{
    return (
        <>
            <Switch>
                <Route exact path={`${match.url}/:id/home`} component={Home} />
                <Route exact path={`${match.url}/:id/question`} component={Question}/>
                <Route exact path={`${match.url}/:id/confirm`} component={Confirm} />
                <Route exact path={`${match.url}/:id/end`} component={End} />
            </Switch>
        </>
    )
}

export default Survey;