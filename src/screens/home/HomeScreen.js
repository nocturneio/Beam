import React, {Component} from 'react';
import '../../styles/bulma.css';
import '../../styles/app.css';
import '../../styles/animate.css';
import NavbarComponent from "../../components/NavbarComponent";
import FastActionsComponent from "../../components/widget/FastActionsComponent";

class HomeScreen extends Component {

    componentDidMount() {

    }

    render() {
        return (
            <div>
                <NavbarComponent currentPage="home" heroContent={(
                    <div style={{display: 'flex'}}>
                        <div className="card animated fadeInRight delay-200ms">
                            <div className="card-content">
                                <p className="heading has-text-grey-light is-unselectable">Sur ton compte</p>
                                <p className="title secondary-color is-bold is-unselectable">564.00€</p>
                            </div>
                        </div>
                        <div style={{marginLeft: 40}}>
                            <div className="card animated fadeInRight delay-400ms">
                                <div className="card-content">
                                    <p className="heading has-text-grey-light is-unselectable">En Traitement</p>
                                    <p className="title secondary-color is-bold is-unselectable">564.00€</p>
                                </div>
                            </div>
                        </div>
                        <div style={{marginLeft: 40}}>
                            <div className="card animated fadeInRight delay-600ms">
                                <div className="card-content">
                                    <p className="heading has-text-grey-light is-unselectable">Charges</p>
                                    <p className="title secondary-color is-bold is-unselectable">123.00€</p>
                                </div>
                            </div>
                        </div>
                        <div style={{marginLeft: 40}}>
                            <div className="card animated fadeInRight delay-800ms">
                                <div className="card-content">
                                    <p className="heading has-text-grey-light is-unselectable">Salaire</p>
                                    <p className="title secondary-color is-bold is-unselectable">432.00€</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}/>
                <FastActionsComponent/>
            </div>
        );
    }
}

export default HomeScreen;
