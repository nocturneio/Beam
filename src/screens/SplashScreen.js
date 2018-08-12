import React, {Component} from 'react';
import '../styles/bulma.css';
import '../styles/app.css';
import '../styles/animate.css';
import {withRouter} from "react-router-dom";
import SystemBarComponent from "../components/SystemBarComponent";
import {auth} from "../index";
import ShineClient from "../api";

class SplashScreen extends Component {

    componentDidMount() {
        // Check if user is logged and if the access token isn't expired
        setTimeout(() => {
            if (localStorage.getItem("user") !== null) {
                let user = JSON.parse(localStorage.getItem('user'));
                ShineClient.make().refreshToken(user.refresh_token).then((user) => {
                    localStorage.setItem('user', JSON.stringify(user.data));
                    auth.authenticate(() => {
                        this.props.history.push('/home');
                    })
                }).catch(() => {
                    auth.signout(() => {
                        localStorage.removeItem('user');
                        this.props.history.push('/login');
                    });
                })
            }else {
                auth.signout(() => {
                    localStorage.removeItem('user');
                    this.props.history.push('/login');
                });
            }
        }, 2000);
    }

    render() {
        return (
            <div>
                <SystemBarComponent/>
                <section className="hero is-white is-fullheight is-bold">
                    <div className="hero-body">
                        <div className="container auth-box">
                            <img src={require('../assets/beam.png')} className="auth-logo animated fadeInDown"/>
                            <div className="lds-ripple animated fadeInDown">
                                <div></div>
                                <div></div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default withRouter(SplashScreen);
