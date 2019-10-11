import React from 'react';
import PropTypes from 'prop-types';

import Login from '../../Login/Login';

/*HOC (Higher Order Component) */

const withAuthenticate = Component =>
    class extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                loggedIn: false,
                username: '',
                password: ''
            }
        }

        componentDidMount() {
            if ( (localStorage.getItem('username') === 'jzanderson09')
            && (localStorage.getItem('password') === 'password') ) {
                this.setState({loggedin: true});
            }
        }

        updateCredentials = event => {
            event.preventDefault();
            this.setState({[event.target.name]: event.target.value});
            localStorage.setItem([event.target.name], event.target.value);
        }

        loginOnSubmit = event => {
            event.preventDefault();
            if (localStorage.getItem('username') === 'jzanderson09' 
            && localStorage.getItem('password') === 'password') {
                this.setState({loggedIn: true});
            }
            else if (localStorage.getItem('username') !== 'jzanderson09'
            || localStorage.getItem('password') !== 'password') {
                alert('Sorry, wrong username/password!');
            }
        }

        logOut = event => {
            event.preventDefault();
            this.setState({
                loggedIn: false,
                username: '',
                password: ''
            });
        }

        render() {
            if (this.state.loggedIn === true) {
                return (
                    //PostPage in this instance:
                    <Component
                        dummyData={this.props.dummyData}
                        logOut={this.logOut}
                    />
                );          
            }
            else if (this.state.loggedIn === false) {
                return (
                    <Login
                        username={this.state.username}
                        password={this.state.password}
                        updateCredentials={this.updateCredentials}
                        loginOnSubmit={this.loginOnSubmit}
                    />
                );
            }
        }
    }

    withAuthenticate.propTypes = {
        username: PropTypes.string.isRequired,
        password: PropTypes.string.isRequired
    }


export default withAuthenticate;