import React from 'react';
import { connect } from "react-redux";
import { saveLine, definiAttribut_sa, update_tot_cost } from 'actions/actionServiceajoutes'

import {
    Row,
    Col
} from "reactstrap";

class Line extends React.Component {

    constructor() {
        super();
        this.state = { value: '' };
    }

    handleChange(e) {
        let id = e.target.getAttribute('mykey');
        let attributname = e.target.name;
        let attributvalue = e.target.value;

        //this.props.definiAttributline(attributname.concat(key), attributvalue);

        //meme chose que dessus avec un objet
        if (attributname === 'label') {
            this.props.saveLine(
                {
                    'id': id,
                    'label': attributvalue
                }
            );
        }

        if (attributname === 'cost') {

            if (!e.target.value) {
                this.setState({ value: 0 })
                this.props.saveLine(
                    {
                        'id': id,
                        'cost': '0'
                    }
                );
                this.props.update_tot_cost();
            }

            if (e.target.value) {
                const re = /^\d+(\.\d{1,2})?$/;
                if (e.target.value === '' || re.test(e.target.value)) {
                    this.setState({ value: e.target.value })
                }
                this.props.saveLine(
                    {
                        'id': id,
                        'cost': attributvalue
                    }
                );
                this.props.update_tot_cost();
            }
        }
    }

    render() {
        return (
            <div>
                <Row>
                    <Col md="6" xs="6">
                        <input
                            key={this.props.key1}
                            name="label"
                            type="text"
                            placeholder="Elément à ajouter"
                            mykey={this.props.key1}
                            onChange={e => this.handleChange(e)}
                        />
                    </Col>

                    <Col md="6" xs="6">
                        <input
                            key={this.props.key2}
                            mykey={this.props.key1}
                            name="cost"
                            type="text"
                            value={this.state.value}
                            onChange={e => this.handleChange(e)}
                            placeholder="€"
                            style={{ direction: "rtl", textAlign: "right" }} /></Col>
                </Row>
                <br />
            </div>
        );
    }

}

const mapStateToProps = (state) => {
    return {
    };
};
export default connect(mapStateToProps, { saveLine, definiAttribut_sa, update_tot_cost })(Line);
