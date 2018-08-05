import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Redirect, Route} from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';
import AuthScreen from "./screens/auth/AuthScreen";
import HomeScreen from "./screens/home/HomeScreen";

export const fakeAuth = {
    isAuthenticated: false,
    authenticate(cb) {
        this.isAuthenticated = true;
        setTimeout(cb, 100);
    },
    signout(cb) {
        this.isAuthenticated = false;
        setTimeout(cb, 100);
    }
};

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            fakeAuth.isAuthenticated ? (
                <Component {...props} />
            ) : (
                <Redirect
                    to={{
                        pathname: "/",
                        state: { from: props.location }
                    }}
                />
            )
        }
    />
);

const LoginRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            fakeAuth.isAuthenticated ? (
                <Redirect
                    to={{pathname: "/home", state: { from: props.location }}}
                />
            ) : (
                <Component {...props} />
            )
        }
    />
);

ReactDOM.render((
    <BrowserRouter>
        <div>
            <LoginRoute exact path="/" component={AuthScreen}/>
            <PrivateRoute exact path="/home" component={HomeScreen}/>
        </div>
    </BrowserRouter>
), document.getElementById('root'));

registerServiceWorker();
