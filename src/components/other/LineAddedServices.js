import React from 'react';
import { connect } from "react-redux";
import { definiAttributline } from 'actions/actionServiceajoutes'


import {
    Card,
    CardFooter,
    Row,
    Col
} from "reactstrap";
import Line from './Line';

class LineAddedService extends React.Component {

    line = () => {
        let numbers = Array.from({ length: this.props.numberofline }, (v, i) => i)
        return (
            <div>
                {numbers.map((number) =>
                    <Line key={number}
                        key1={number.toString()}
                        key2={-number.toString()}
                        value={number}
                    />
                )}

            </div>
        );
    }

    render() {
        return (
            <Card>
                <CardFooter>
                    <form className="ui form">

                        <Row>
                            <Col md="6" xs="6"> Nom de l'élément</Col>
                            <Col md="6" xs="6"> Coût de l'élémént</Col>
                        </Row>
                        <br />
                        {this.line()}
                    </form>
                </CardFooter>
            </Card >
        );
    }

}

const mapStateToProps = (state) => {
    return {
        numberofline: state.serviceAjoutesReducer.numberService,
    };
};

export default connect(mapStateToProps, { definiAttributline })(LineAddedService);

