import React from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import { definiTextBox } from 'actions';
import { connect } from "react-redux";

import {
    Card,
    CardBody,
    CardFooter,
    Row,
    Col
} from "reactstrap";


class TextBox extends React.Component {
    
    handleChange(e) {
        this.props.definiTextBox(e.target.name, e.target.value);
    }

      
    render() {
        return <Card className="card-stats">
            <CardBody>
                <Row>
                    <Col md="4" xs="5">
                        <div className="icon-big text-center icon-warning">
                            <i className="nc-icon nc-laptop text-warning" />
                        </div>
                    </Col>
                    <Col md="8" xs="7">
                        <div className="numbers">
                            <p className="card-category">Notes et commentaires</p>
                            <p />
                        </div>
                    </Col>
                </Row>
            </CardBody>
            <CardFooter>
            <form className="ui form" onSubmit={this.onSubmitForm}>

               
            <Row>
                <Col md="12" xs="12">
                <TextareaAutosize 
                name="textBox"
                placeholder="Ajouter des commentaires ou des notes / Faire régulièrement des sauts à la ligne"
                value={this.props.textBox}                 
                onChange={e => this.handleChange(e)}
                          />                         
                </Col>

                </Row>
                </form>
            </CardFooter>
        </Card>
    }
}

const mapStateToProps = (state) => {
    return {
        textBox: state.textBoxReducer.textBox,

    };
};


export default connect(mapStateToProps, { definiTextBox })(TextBox);

