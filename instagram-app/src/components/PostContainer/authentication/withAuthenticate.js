import React from 'react';

import Login from '../../Login/Login';


/*HOC (Higher Order Component) */

const withAuthenticate = Component =>
    class extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                loggedIn: null
            }
        }

        componentDidMount() {
        }

        render() {
                return (
                    <Component
                        dummyData={this.props.dummyData} 
                    />
                ); 
            }
        }


export default withAuthenticate;