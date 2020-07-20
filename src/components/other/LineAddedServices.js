import React from 'react';

import {
    Card,
    CardBody,
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
                            <Col > Nom de l'élément</Col>
                            <Col > Coût de l'élémént</Col>
                        </Row>
                        <br />
                        <Row>
                            <Col ><input
                                name="name"
                                type="text"
                                //value={dureeContratH}
                                //onChange={e => this.setMin(e.target.value)}
                                required />
                            </Col>

                            <Col > <input
                                name="cout"
                                type="text"
                                //value={dureeContratH}
                                //onChange={e => this.setMin(e.target.value)}
                                required /></Col>
                        </Row>
                    </form>
                </CardFooter>
            </Card >
        );
    }

}
export default LineAddedService;