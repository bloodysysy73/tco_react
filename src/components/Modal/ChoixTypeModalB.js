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

/* Ce module calcule les frais de déplacement au plus juste en ajoutant les coûts horaires de main d'œuvre aux coûts kilométriques.
Renseigner le rayon d'action le plus grand concernant votre concession; 
les coûts kilométriques correspondants a vos véhicules ainsi que la vitesse moyenne de circulation dans votre zone d'activité,
*/

class ChoixTypeModalB extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            montantForfait: null
        };
    }


    setMontantForfait = () => {
        this.props.definiMontantForfait(this.state.montantForfait);
    }

    setStateMontantForfait(value) {
        this.setState({ montantForfait: value });
        console.log("montantForfait : ", value)
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
                                name="montantForfait"
                                type="number"
                                placeholder="€"
                                //value={dureeContratA}
                                style={{ direction: "rtl", textAlign: "right" }}
                                min="1" max="1000"
                                onChange={e => this.setStateMontantForfait(e.target.value)}
                                required />
                        </label><br />
                        <br />
                        <label><br />
                            <div className="ui animated button" tabIndex="0">
                                <div className="visible content">Sauvegarder et retour</div>
                                <div className="hidden content">
                                    <React.Fragment>
                                        <Link to="/"> <button className="ui button" onClick={() => this.setMontantForfait()}>
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
    return {};
};

export default connect(mapStateToProps, { definiMontantForfait })(ChoixTypeModalB);
