import React, {Component} from 'react';
import '../styles/bulma.css';
import '../styles/app.css';
import '../styles/animate.css';

class NavbarComponent extends Component {

    render() {
        return (
            <div>
                <nav className="navbar is-transparent drag">
                    <div className="navbar-brand no-drag">
                        <a className="navbar-item">
                            <img src={require('../assets/logo.png')} width="70" height="45"/>
                        </a>
                    </div>

                    <div id="navbarExampleTransparentExample" className="navbar-menu">
                        <div className="navbar-start">
                            <a className={this.props.currentPage === "home" ? "navbar-item hover-blue no-drag hover-blue-active is-unselectable" : "navbar-item hover-blue no-drag is-unselectable"} style={{marginLeft: 10}}>
                                Accueil
                            </a>
                            <a className={this.props.currentPage === "clients" ? "navbar-item hover-blue no-drag hover-yellow-active is-unselectable" : "navbar-item hover-yellow no-drag is-unselectable"}>
                                Clients <span className="tag is-rounded" style={{marginLeft: 5}}>Bientôt...</span>
                            </a>
                            <a className={this.props.currentPage === "virements" ? "navbar-item hover-blue no-drag hover-pink-active is-unselectable" : "navbar-item hover-pink no-drag is-unselectable"}>
                                Virements
                            </a>
                        </div>

                        <div className="navbar-end">
                            <div className="navbar-item">
                                <div className="field is-grouped">
                                    <p className="control">
                                        <a className="button is-rounded no-drag">
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

                <section className="hero is-small" style={{backgroundColor: '#5465FC'}}>
                    <div className="hero-body">
                        <p className="title is-4 has-text-white is-unselectable animated fadeInUp">
                            Accueil
                        </p>
                        <p className="subtitle is-6 subtitle-hero is-unselectable animated fadeInUp">
                            Situation de votre compte.
                        </p>
                        <hr/>
                        {this.props.heroContent}
                    </div>
                </section>
            </div>
        );
    }
}

export default NavbarComponent;
