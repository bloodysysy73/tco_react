import React from 'react';
import { Link } from 'react-router-dom'

import {
    Card,
    CardBody,
    CardFooter,
    Row,
    Col
} from "reactstrap";
import Printer from '../Devis/Printer';
import PDF from '../Devis/PDF';


class Fonctionnalites extends React.Component {
    
    calculer() {
        let total =  parseInt(this.props.dureeContratH, 10)
        return Number.parseFloat(total).toFixed(2);
    }

    render() {
        return <Card className="card-stats">
            <CardBody>
                <Row>
                    <Col md="4" xs="5">
                        <div className="icon-big text-center icon-warning">
                            <i className="nc-icon nc-button-power text-warning" />
                        </div>
                    </Col>
                    <Col md="8" xs="7">
                        <div className="numbers">
                            <p className="card-category">Fonctionnalités</p>
                            <p />
                        </div>
                    </Col>
                </Row>
            </CardBody>
            <CardFooter>
                <hr />
                
                <Row>
                <Col md="2" xs="2">

                <label>
                Calculer<br />
                    <button 
                    className="ui vertical animated button" onClick={() => this.calculer()}>
                    <div className="hidden content"> Calculer</div>
                    <div className="visible content"><i aria-hidden="true" className="calculator icon"></i></div>
                </button><br />
                </label>
                </Col>
                <Col md="2" xs="2">

                <label>
                Paramètrer<br />
                    <Link to='/admin/SettingModal/' >
                    <div className="ui animated button" tabIndex="0">
                        <div className="visible content"><i aria-hidden="true" className="setting icon"></i></div>
                        <div className="hidden content">
                            Options
                        </div></div>
                </Link> </label>
                </Col>
                <Col md="2" xs="2">
                <label>
                Imprimer<br />
                <button className="ui vertical animated button">
                    <div className="hidden content"><Printer></Printer></div>
                    <div className="visible content"><i aria-hidden="true" className="print icon"></i></div>
                </button>
                </label>
                </Col>
                <Col md="2" xs="2">
                <label>
                Enregistrer<br />
                <button className="ui vertical animated button">
                    <div className="hidden content"><PDF></PDF></div>
                    <div className="visible content"><i aria-hidden="true" className="file pdf icon"></i></div>
                </button></label>
                </Col>
                <Col md="2" xs="2">
                <label>
                Documentation<br />
                <Link to='/admin/about/' >
                    <div className="ui animated button" tabIndex="0">
                        <div className="visible content"><i aria-hidden="true" className="help circle icon"></i></div>
                        <div className="hidden content">
                            Doc
                        </div></div>
                </Link></label>
                </Col></Row>
            </CardFooter>
        </Card>
    }
}


export default (Fonctionnalites);
