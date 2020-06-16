import React from "react";
import history from "../../variables/history";
import { Link } from 'react-router-dom'
import Modal from './Modaux'

import {
    Card,
    CardFooter,
    CardBody,
    CardTitle
} from "reactstrap";


class SettingModal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            prixLavage: null,
            prixDeplacement: null,
            nbSemaine: null,
            nbHeure: null,
            periodicite: false
        };
    }

    renderContent = () => {
        return (
            <div className="content">
                <Card className="card-user">
                    <br />
                    <CardTitle>Setting</CardTitle>
                    <CardBody>

                    </CardBody>
                    <CardFooter>
                        <hr />

                    </CardFooter>
                </Card></div>);
    }
    renderActions = () => {

        return (
            <React.Fragment>
                <Link to="/admin/dashboard" className="ui button">Cancel</Link>
            </React.Fragment>
        )
    }

    render() {
        return (
            <Modal
                title="Choix type déplacement."
                content={this.renderContent()}
                actions={this.renderActions()}
                onDismiss={() => history.push('/admin/dashboard')}
            />
        )
    }
}

export default (SettingModal);
