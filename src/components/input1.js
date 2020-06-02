import React from 'react';

import {
    Card,
    CardBody,
    CardFooter,
    CardTitle,
    Row,
    Col
} from "reactstrap";

class Input1 extends React.Component {

    onchange(value) {
        this.setState({ value });
    }
    render() {

        return (
            <Card className="card-stats">
                <CardBody>
                    <Row>
                        <Col md="4" xs="5">
                            <div className="icon-big text-center icon-warning">
                                <i className="nc-icon nc-globe text-warning" />
                            </div>
                        </Col>
                        <Col md="8" xs="7">
                            <div className="numbers">
                                <p className="card-category">Capacity</p>
                                <CardTitle tag="p">150GB</CardTitle>
                                <p />
                            </div>
                        </Col>
                    </Row>
                </CardBody>
                <CardFooter>
                    <hr />
                    <form>
                        <input type="text"
                            name="name"
                        />
                        <button className="ui button" onClick={() => this.props.onsubmit(92)}>Valider</button>
                    </form>
                </CardFooter>
            </Card>
        );
    }
}

export default Input1