import React, {Component} from 'react';
import '../../styles/bulma.css';
import '../../styles/app.css';
import '../../styles/animate.css';
import NavbarComponent from "../../components/NavbarComponent";
import FastActionsComponent from "../../components/widget/FastActionsComponent";

class VirementsScreen extends Component {

    componentDidMount() {

    }

    render() {
        return (
            <div>
                <NavbarComponent title="Virements" subtitle="Gérez vos virements bancaires." color="#FF3C87" currentPage="virements" heroContent={(
                    <div style={{display: 'flex'}}>
                        <div className="animated fadeInRight delay-200ms">
                            <a className="button is-white has-text-danger is-rounded">Effectuer un virement</a>
                        </div>
                    </div>
                )}/>

            </div>
        );
    }
}

export default VirementsScreen;
