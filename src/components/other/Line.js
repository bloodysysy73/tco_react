import React from 'react';
import { connect } from "react-redux";
import { definiAttributline } from 'actions/actionServiceajoutes'

import {
    Row,
    Col
} from "reactstrap";

class Line extends React.Component {

    handleChange(e) {
        let key = e.target.getAttribute('mykey');
        let attributname = e.target.name;
        let attributvalue = e.target.value;

        this.props.definiAttributline(attributname.concat(key), attributvalue);
    }


    render() {
        return (
            <div>
                <Row>
                    <Col md="6" xs="6">
                        <input
                            key={this.props.key1}
                            name="name"
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
                            name="cout"
                            type="text"                                                    
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
export default connect(mapStateToProps, { definiAttributline })(Line);
