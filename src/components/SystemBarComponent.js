import React, {Component} from 'react';
import '../styles/bulma.css';
import '../styles/app.css';
import '../styles/animate.css';

class SystemBarComponent extends Component {

    render() {
        return (
            <div className="system-bar">
                <a onClick={() => window.close()} className="system-bar-icon">
                    <span className="icon has-text-black-ter is-medium">
                        <i className="far fa-times-circle"></i>
                    </span>
                </a>
            </div>
        );
    }
}

export default SystemBarComponent;
