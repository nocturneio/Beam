import React, {Component} from 'react';

class TransactionCardComponent extends Component {

    render() {
        return (
            <div className="card" style={{marginTop: 20}}>
                <div className="card-content">
                    <article className="media">
                        <figure className="media-left">
                            <p className="is-64x64">
                                { this.props.type == "payment" ? (
                                    <i className="far fa-arrow-alt-circle-up has-text-danger" style={{fontSize: 32}}></i>
                                ) : (
                                    <i className="far fa-arrow-alt-circle-down has-text-primary" style={{fontSize: 32}}></i>
                                )}
                            </p>
                        </figure>
                        <div className="media-content">
                            <div className="content">
                                <p>
                                    <strong>{this.props.name}</strong>
                                    <br/>
                                    5 août 2018
                                </p>
                            </div>
                        </div>
                        <div className="media-right">
                            { this.props.type == "payment" ? (
                                <h1 className="tag is-white is-large transaction-price-shadow has-text-danger"><strong>-{this.props.price}</strong></h1>
                            ) : (
                                <h1 className="tag is-white is-large transaction-price-shadow has-text-primary"><strong>+{this.props.price}</strong></h1>
                            )}
                        </div>
                    </article>
                </div>
            </div>
    );
    }

    }

    export default TransactionCardComponent;