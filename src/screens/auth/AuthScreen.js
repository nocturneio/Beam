import React, {Component} from 'react';
import '../../styles/bulma.css';
import '../../styles/app.css';
import '../../styles/animate.css';
import SystemBarComponent from "../../components/SystemBarComponent";
import {withRouter, Link} from "react-router-dom";
import {fakeAuth} from "../../index";

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
                            <img src={require('../../assets/logo.png')} className="auth-logo animated fadeInDown"/>
                            <h2 className="subtitle animated fadeInUp is-unselectable">
                                Le compte pro gratuit des indépendant.
                            </h2>
                            <a className="button is-primary is-rounded animated fadeInUp delay-200ms" onClick={() => {
                                fakeAuth.authenticate(() => {

                                });
                                this.props.history.push('/home');
                            }}>Connexion</a>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default withRouter(AuthScreen);
