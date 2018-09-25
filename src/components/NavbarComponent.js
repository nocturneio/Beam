import React, {Component} from 'react';
import '../styles/bulma.css';
import '../styles/app.css';
import '../styles/animate.css';
import {withRouter} from "react-router-dom";

class NavbarComponent extends Component {

    render() {
        return (
            <div>
                <nav className="navbar is-transparent drag is-fixed-top">
                    <div className="navbar-brand">
                        <a className="navbar-item">
                            <img src={require('../assets/beam.png')} width="70" height="45"/>
                        </a>
                    </div>

                    <div id="navbarExampleTransparentExample" className="navbar-menu">
                        <div className="navbar-start">
                            <a onClick={() => this.props.history.push('/home')} className={this.props.currentPage === "home" ? "navbar-item hover-teal no-drag hover-teal-active is-unselectable" : "navbar-item hover-teal no-drag is-unselectable"} style={{marginLeft: 10}}>
                                Accueil
                            </a>
                            <a className={this.props.currentPage === "clients" ? "navbar-item hover-yellow no-drag hover-yellow-active is-unselectable" : "navbar-item hover-yellow no-drag is-unselectable"}>
                                Clients <span className="tag is-rounded" style={{marginLeft: 5}}>Bientôt...</span>
                            </a>
                            <a onClick={() => this.props.history.push('/virements')} className={this.props.currentPage === "virements" ? "navbar-item hover-pink no-drag hover-pink-active is-unselectable" : "navbar-item hover-pink no-drag is-unselectable"}>
                                Virements
                            </a>
                        </div>

                        <div className="navbar-end">
                            <div className="navbar-item">
                                <div className="field is-grouped">
                                    <p className="control">
                                        <a className="button is-rounded no-drag" onClick={() => this.props.history.push('/entreprise')}>
                                            <span className="nav-button-mine">
                                                 Mon Entreprise
                                            </span>
                                        </a>
                                    </p>
                                    <p className="control">
                                        <a className="button is-primary is-rounded no-drag" style={{backgroundColor: '#5465FC'}}>
                                            <span className="nav-button-mine">Mon Compte</span>
                                        </a>
                                    </p>
                                    <p className="control">
                                        <a className="delete no-drag close-app-nav" onClick={() => window.close()}></a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>

                <section className="hero is-small has-navbar-fixed-top" style={{backgroundColor: this.props.color === undefined ? '#1e2dbe' : this.props.color}}>
                    <div className="hero-body" style={{marginTop: 10}}>
                        <p className="title is-4 has-text-white is-unselectable animated fadeInUp">
                            {this.props.title}
                        </p>
                        <p className="subtitle is-6 subtitle-hero is-unselectable animated fadeInUp">
                            {this.props.subtitle}
                        </p>
                        <hr/>
                        {this.props.heroContent}
                    </div>
                </section>
            </div>
        );
    }
}

export default withRouter(NavbarComponent);
