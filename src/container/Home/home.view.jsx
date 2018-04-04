import React, {Component} from 'react';

export class HomeView extends Component {

    getProfile() {
        return this.props.authentication.getIn(['profile','nickname'])
    }

    render() {
        return (
            <div>
              <h1>
                Welcome on the StringDB Website !
              </h1>
              {this.props.authentication.get('isAuthenticated') && (
                <p>Hallo <b>{this.getProfile()}</b></p>
              )
              }
              {!this.props.authentication.get('isAuthenticated') && (
                <p>Du musst dich erst einloggen
                </p>
              )
              }

            </div>

        )
    }

}
export default HomeView;
