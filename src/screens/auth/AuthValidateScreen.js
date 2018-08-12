import React, {Component} from 'react';
import '../../styles/bulma.css';
import '../../styles/app.css';
import '../../styles/animate.css';
import SystemBarComponent from "../../components/SystemBarComponent";
import {withRouter, Link} from "react-router-dom";
import {fakeAuth} from "../../index";
import ShineClient from "../../api";

class AuthValidateScreen extends Component {

    componentDidMount() {
        const regex = /(?<=\?code=)(.*)(?=&state)/gm;
        let code = regex.exec(this.props.location.search);
        ShineClient.make().requestAccessToken(code[0]).then((user) => {
            localStorage.setItem('user', user.data);
            console.log(user.data);
            fakeAuth.authenticate(() => {
                this.props.history.push('/home');
            })
        }).catch(() => {
            // todo show a toast
            this.props.history.push('/');
            console.log('Une erreur s\'est produite !')
        })
    }

    render() {
        return (
            <div>
                <SystemBarComponent/>
                <section className="hero is-white is-fullheight is-bold">
                    <div className="hero-body">
                        <div className="container auth-box">
                            <h2 className="subtitle animated fadeInUp is-unselectable">
                                Chargement...
                            </h2>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default withRouter(AuthValidateScreen);
