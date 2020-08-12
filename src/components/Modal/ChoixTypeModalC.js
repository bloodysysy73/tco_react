import React from "react";
import history from "../../variables/history";
import { Link } from 'react-router-dom'
import Modal from './Modaux'

//pour redux
import { connect } from "react-redux";
import { definiMontantForfait } from "../../actions/actionMachine"


import {
    Card,
    CardFooter,
    CardBody,
    CardTitle
} from "reactstrap";

/* Module rappel coût de déplacement nul
*/

class ChoixTypeModalC extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            zeroCoutDep: null
        };
    }

/*
    setZeroCoutDep = () => {
        this.props.definiZeroCoutDep(this.state.zeroCoutDep);
    }

    setStateZeroCoutDep(value) {
        this.setState({ zeroCoutDep: value });
        console.log("zeroCoutDep : ", value)
    }
**/

    renderContent = () => {
        return (
            <div className="content">
                <Card className="card-user">
                    <br />
                    <CardTitle>Aucun coût ne sera prévu pour le déplacement</CardTitle>
                    <CardBody>

                        <form className="ui form"  ></form>

                        <label
                                name="zeroCoutDep"
                                type="number"
                                placeholder="€"
                                value={0}
                                style={{ direction: "rtl", textAlign: "right" }}
                                min="1" max="1000"
                                required>
                                    Le coût du démplacement sera de zéro
                        </label><br />
                        <br />
                        <label><br />
                            <div className="ui animated button" tabIndex="0">
                                <div className="visible content">Sauvegarder et retour</div>
                                <div className="hidden content">
                                    <React.Fragment>
                                        <Link to="/"> <button className="ui button" onClick={0}>
                                            <i className="angle double right icon"></i></button>
                                        </Link>
                                    </React.Fragment>
                                </div></div>
                        </label><br />

                    </CardBody>
                    <CardFooter>
                        <hr />

                    </CardFooter>
                </Card></div >);
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

const mapStateToProps = (state) => {
    return {
        prixForfait: state.specMachineReducer.prixForfait,
    };
};

export default connect(mapStateToProps, { definiMontantForfait })(ChoixTypeModalC);
