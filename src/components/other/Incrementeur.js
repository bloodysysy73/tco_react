import React from 'react';
import { setServiceNumber } from '../../actions/actionServiceajoutes'
import { connect } from "react-redux";

import {
    Card,
} from "reactstrap";

class Incrementeur extends React.Component {

    componentDidMount() {
        this.props.setServiceNumber(1);
    }

    render() {
        return (
            <Card>
                <div class="ui vertical animated button" tabindex="0">
                    <div class=" hidden content" onClick={() => this.props.setServiceNumber(this.props.serviceNumber + 1)}>Ajouter une ligne</div>
                    <div class="visible  content">
                        <i class="add icon"></i>
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

export default connect(mapStateToProps, { setServiceNumber })(Incrementeur);