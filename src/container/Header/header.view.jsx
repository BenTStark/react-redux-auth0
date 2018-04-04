import React, {Component} from 'react';
import {Link} from 'react-router-dom';

//import LoginComponent from './Login';
import Login from '../Login/login'

// The Header creates links that can be used to navigate
// between routes.

export class HeaderView extends Component {
    getItems() {
        return {
            headerList: [
                {
                    link: '/',
                    headerText: 'Home',
                    loginRespect: true
                }, {
                    link: '/profile',
                    headerText: 'Profil',
                    loginRespect: this.props.authentication.get('isAuthenticated')
                }, {
                    link: '/rackets',
                    headerText: 'Rackets',
                    loginRespect: this.props.authentication.get('isAuthenticated')
                }, {
                    link: '/test',
                    headerText: 'Test',
                    loginRespect: true
                }
            ]
        }
    }


    render() {
        return (

            <header>
              <nav>
                <ul>
                  {this.getItems().headerList.map((item,index) => item.loginRespect && <li key={item.headerText} >
                    <Link to={item.link}>{item.headerText}</Link>
                  </li>)}
                </ul>
              </nav>

              <div>
                <Login/>
              </div>

            </header>

        )
    }
}
export default HeaderView;
