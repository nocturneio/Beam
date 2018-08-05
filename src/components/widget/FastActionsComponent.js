import React, {Component} from 'react';
import '../../styles/bulma.css';
import '../../styles/app.css';
import '../../styles/animate.css';

class FastActionsComponent extends Component {

    render() {
        return (
            <section className="hero is-small" style={{backgroundColor: '#f7f7f7'}}>
                <div className="hero-body">
                    <h2 className="title is-4">Actions rapides</h2>
                    <h2 className="subtitle is-6 has-text-grey-light subtitle-hero-grey">Vous permez d'effectuer une action rapidement sur votre compte.</h2>
                    <div>
                        <a className="button is-primary is-rounded">Passer un virement</a>
                        <a className="button is-danger is-rounded">Ajouter un client</a>
                        <a className="button is-warning is-rounded">Passer un virement</a>
                        <a className="button is-primary is-rounded">Passer un virement</a>
                    </div>
                </div>
            </section>
        );
    }
}

export default FastActionsComponent;
