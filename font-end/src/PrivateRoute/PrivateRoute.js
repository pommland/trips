import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
    let value = '; ' + document.cookie;
    let parts = value.split('; accessToken=');
    return (
        <Route
            {...rest}
            render=
                {(props) =>
                    parts[1] ? (
                        <Component {...props} />
                    ) : (
                        <Redirect
                            to={{
                                pathname: '/login',
                                state: { from: props.location },
                            }}
                        />
                    )
                }
        />
    );
};

export default PrivateRoute;