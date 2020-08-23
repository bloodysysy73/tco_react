import React from 'react';
import { definiAttribut_sa } from '../../actions/actionServiceajoutes'
import { connect } from "react-redux";

import {
    Card,
} from "reactstrap";

class Incrementeur extends React.Component {

    componentDidMount() {
        this.props.definiAttribut_sa('numberService', 1);
    }

    render() {
        return (
            <Card>
                <div className="ui vertical animated button" tabIndex="0">
                    <div className=" hidden content" onClick={() => this.props.definiAttribut_sa('numberService', this.props.serviceNumber + 1)}>Ajouter une ligne</div>
                    <div className="visible  content">
                        <i className="add icon"></i>
                    </div>
                </div>
                <br />
                <div className="ui vertical animated button" tabIndex="0">
                    <div className=" hidden content" onClick={() => this.props.definiAttribut_sa('numberService', this.props.serviceNumber - 1)}>Supprimer une ligne</div>
                    <div className="visible  content">
                        <i className="minus icon"></i>
                    </div>
                </div>

            </Card >
        );
    }

}

const mapStateToProps = (state) => {
    return {
        serviceNumber: state.serviceAjoutesReducer.numberService
    };
};

export default connect(mapStateToProps, { definiAttribut_sa })(Incrementeur);