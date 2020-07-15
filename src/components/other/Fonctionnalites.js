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

class Fonctionnalites extends React.Component {

    render() {
        return <Card className="card-stats">
            <CardBody>
                <Row>
                    <Col md="4" xs="5">
                        <div className="icon-big text-center icon-warning">
                            <i className="nc-icon nc-controller-modern text-warning" />
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
                <label>
                    calculer <br />
                    <Link to='/admin/Parametres/' >
                        <div className="ui animated button" tabIndex="0">
                            <div className="visible content">Calculer</div>
                            <div className="hidden content">
                                <i aria-hidden="true" className="calculator icon"></i>
                            </div></div>
                    </Link>
                </label>
                <button className="ui vertical animated button">
                    <div className="hidden content">Calculer</div>
                    <div className="visible content"><i aria-hidden="true" className="calculator icon"></i></div>
                </button><br />
                <label>
                    paramètrer <br />
                    <Link to='/admin/Parametres/' >
                        <div className="ui animated button" tabIndex="0">
                            <div className="visible content">Paramètres</div>
                            <div className="hidden content">
                                <i aria-hidden="true" className="setting icon"></i>
                            </div></div>
                    </Link>
                </label>
                <Link to='/admin/SettingModal/' >
                    <div className="ui animated button" tabIndex="0">
                        <div className="visible content"><i aria-hidden="true" className="setting icon"></i></div>
                        <div className="hidden content">
                            Options
                        </div></div>
                </Link><br />
                <br />
                <button className="ui vertical animated button">
                    <div className="hidden content"><Printer></Printer></div>
                    <div className="visible content"><i aria-hidden="true" className="print icon"></i></div>
                </button>
                <button className="ui vertical animated button">
                    <div className="hidden content">Excel</div>
                    <div className="visible content"><i aria-hidden="true" className="file excel icon"></i></div>
                </button>
                <Link to='/admin/HelpModal/' >
                    <div className="ui animated button" tabIndex="0">
                        <div className="visible content"><i aria-hidden="true" className="help circle icon"></i></div>
                        <div className="hidden content">
                            Help
                        </div></div>
                </Link>


            </CardFooter>
        </Card>
    }
}

export default Fonctionnalites;