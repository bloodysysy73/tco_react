import React from "react";
import history from "../../variables/history";
import { Link } from 'react-router-dom'
import Modal from './Modaux'

//pour redux
import { connect } from "react-redux";
import { definiMontantForfait, definiAttribut } from "../../actions/actionMachine"


import {
    Card,
    CardFooter,
    CardBody,
    CardTitle
} from "reactstrap";

/* Ce module calcule les frais de déplacement au plus juste en ajoutant les coûts horaires de main d'œuvre aux coûts kilométriques.
Renseigner le rayon d'action le plus grand concernant votre concession; 
les coûts kilométriques correspondants a vos véhicules ainsi que la vitesse moyenne de circulation dans votre zone d'activité,
*/

class ChoixTypeModalB extends React.Component {


    handleChange(e) {
        this.props.definiAttribut(e.target.name, e.target.value);
    }

    renderContent = () => {
        return (
            <div className="content">
                <Card className="card-user">
                    <br />
                    <CardTitle>Paramétrer B </CardTitle>
                    <CardBody>

                        <form className="ui form"  ></form>

                        <label>
                            Définir le prix du forfait de déplacement
                               <br /> <br />  <input
                                name="prixForfait"
                                type="number"
                                placeholder="€"
                                value={this.props.prixForfait}
                                style={{ direction: "rtl", textAlign: "right" }}
                                min="1" max="1000"
                                onChange={e => this.handleChange(e)}
                                required />
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
                <Link to="/admin/calculator" className="ui button">Valider</Link>
            </React.Fragment>
        )
    }

    render() {
        return (
            <Modal
                title="Choix type déplacement."
                content={this.renderContent()}
                actions={this.renderActions()}
                onDismiss={() => history.push('/admin/calculator')}
            />
        )
    }


}

const mapStateToProps = (state) => {
    return {
        prixForfait: state.specMachineReducer.prixForfait,
    };
};

export default connect(mapStateToProps, { definiMontantForfait, definiAttribut })(ChoixTypeModalB);
