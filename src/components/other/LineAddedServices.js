import React from 'react';

import {
    Card,

    CardFooter,
    Row,
    Col
} from "reactstrap";

class LineAddedService extends React.Component {

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
                        <Row>
                        <Col md="6" xs="6"> <input
                                name="name"
                                type="text"
                                placeholder="Elément à ajouter"
                                required />
                            </Col>

                            <Col md="6" xs="6">  <input
                                name="cout"
                                type="number"
                                placeholder="€"
                                required /></Col>
                        </Row>
                    </form>
                </CardFooter>
            </Card >
        );
    }

}
export default LineAddedService;