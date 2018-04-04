import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';

import Home from '../container/Home/home'
import Callback from './callback';
import Profile from './profile';
import Rackets from './rackets';
import TestPage from '../container/TestPage/test';
import {PrivateRoute} from './extensions/privateRoute';
//<Route exact path='/' component={Home}/>
export class Main extends Component {

    render() {
        return (< div > < Switch > < Route exact path = '/' component = {
            Home
        } /> < PrivateRoute exact path = '/profile' component = {
            Profile
        } /> < PrivateRoute exact path = '/rackets' component = {
            Rackets
        } /> < Route exact path = '/test' component = {
            TestPage
        } /> < Route exact path = '/callback' component = {
            Callback
        } /> < /Switch>
            < /div >)
    }
}
export default Main
