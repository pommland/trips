import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {isAuth} from '../helpers/auth'
const PrivateRoute = ({ component: Component, ...rest }) => {
    let parts = isAuth();
    return (
        <Route
            {...rest}
            render=
                {(props) =>
                    parts ? (
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