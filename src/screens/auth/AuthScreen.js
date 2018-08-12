import React, {Component} from 'react';
import '../../styles/bulma.css';
import '../../styles/app.css';
import '../../styles/animate.css';
import SystemBarComponent from "../../components/SystemBarComponent";
import {withRouter, Link} from "react-router-dom";
import {auth} from "../../index";

class AuthScreen extends Component {

    componentDidMount() {

    }

    render() {
        return (
            <div>
                <SystemBarComponent/>
                <section className="hero is-white is-fullheight is-bold">
                    <div className="hero-body">
                        <div className="container auth-box">
                            <img src={require('../../assets/beam.png')} className="auth-logo animated fadeInDown"/>
                            <h2 className="subtitle animated fadeInUp is-unselectable">
                                Le client desktop de Shine.
                            </h2>
                            <a className="button is-primary is-rounded animated fadeInUp delay-200ms" onClick={() => {
                                window.location = 'https://api.shine.fr/v2/authentication/oauth2/authorize?client_id=b6fbbf9d-785c-40b1-af27-abbe24aa04e5&scope=openid%20profile%20email%20phone%20user:profile:read%20user:companies:read&redirect_uri=http://localhost:3000/validate&state=test'
                            }}>Connexion</a>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default withRouter(AuthScreen);
