import React, {Component} from 'react';
import '../../styles/bulma.css';
import '../../styles/app.css';
import '../../styles/animate.css';
import TransactionCardComponent from "../elements/TransactionCardComponent";

class TransactionsComponent extends Component {

    render() {
        return (
            <section className="hero is-white is-small" style={{background: '#f8f8f8'}}>
                <div className="hero-body">
                    <hr className="separator"/>
                    <h2 className="title is-4 has-text-secondary"><i className="fas fa-hand-holding-usd"></i> Transactions</h2>
                    <h2 className="subtitle is-6 has-text-grey-light subtitle-hero-grey">Consultez vos dernières
                        transactions sur votre compte Shine.</h2>
                    <hr className="separator"/>
                    <h2 className="date-label">5 août 2018</h2>
                    <TransactionCardComponent name="Paiement à Total" type="payment" price="54.00€"/>
                    <h2 className="date-label">4 août 2018</h2>
                    <TransactionCardComponent name="Paiement à Carrefour" type="payment" price="5.38€"/>
                    <TransactionCardComponent name="Virement de Compte perso." type="virement" price="430.00€"/>
                    <TransactionCardComponent name="Virement de Compte épargne." type="virement" price="100.00€"/>
                    <h2 className="date-label">1 août 2018</h2>
                    <TransactionCardComponent name="Paiement à Shine" type="payment" price="1.00€"/>
                    <TransactionCardComponent name="Paiement à Apple" type="payment" price="1054.00€"/>
                </div>
            </section>
        );
    }
}

export default TransactionsComponent;
