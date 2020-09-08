import React from 'react';
import { connect } from "react-redux";
import { defineTime } from 'actions';

import "assets/css/invoice.css";
import contact from "assets/img/contact.png";
import blue from "assets/img/blue.png";
import DisplayLines from 'components/other/DisplayLines';
import DisplayLinesExtension from 'components/other/DisplayLinesExtension';
import DisplayKits from 'components/other/DisplayKits';
import DisplayMoClim from 'components/other/DisplayMoClim';

class DevisCom extends React.Component {

    componentDidMount() {

        let today = new Date(),
            date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        this.props.date ? console.log("date", this.props.date) : this.props.defineTime("date", date);

    }

    getTotal() {
        let total = parseFloat(this.props.prixExtension) + parseFloat(this.props.prixKits) + (parseFloat(this.props.heureMo) * 70);
        return Number.parseFloat(total).toFixed(2);
    }

    render() {
        return (
            <div><div id="invoice">
                <div className="invoice overflow-auto">
                    <div style={{ minWidth: '600px' }}>
                        <header>
                            <div className="row">
                                <div className="col" >
                                <img src={blue} alt="blue" />
                                <a id="img" target="" href="https://www.mecalac.com/">
                                </a>
                                <h2 className="name">
                                        <a target="blank" href="https://www.mecalac.com/">
                                            MECALAC GROUP SERVICES</a> 
                                    </h2>
    
                                </div>
                                <div className="col company-details">
                                    <h2 className="to">{this.props.companyNameA}</h2>
                                    <h3 className="to">{this.props.prenomNomA}</h3>
                                    <div className="address">{this.props.adresseA}</div>
                                    <div className="ville">{this.props.villeA}</div>
                                    <div className="email"><a href={"mailto:" + this.props.emailA}>{this.props.emailA}</a></div>                                    
                                </div>
                            </div>
                        </header>
                        <main>
                            <div className="row contacts">
                                <div className="col invoice-to">
                                    <div className="text-gray-light">INVOICE TO:</div>
                                    <h2 className="to">{this.props.companyName}</h2>
                                    <h3 className="to">{this.props.prenomNom}</h3>
                                    <div className="address">{this.props.adresse}</div>
                                    <div className="email"><a href={"mailto:" + this.props.email}>{this.props.email}</a></div>
                                </div>
                                <div className="col invoice-details">
                                    <h1 className="invoice-id">MECALAC CALCULATOR</h1>
                                    <div className="date">  Date: {this.props.date}</div>
                                    <div className="date">  Lieu: {this.props.villeA} {this.props.lieu}</div>
                                    <div className="Label">Label: FR 30/07/2020</div>
                                    <div className="Order type">Order type: FR</div>
                                </div>
                            </div>
                            <div className="row contacts">
                                Order : WEB1598607  à définir
                    </div>
                            <table border="0" cellSpacing="0" cellPadding="0">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th className="text-left">LABEL</th>
                                        <th className="text-right">PICTURE</th>
                                        <th className="text-right">QTY</th>
                                        <th className="text-right">HOUR PRICE ({this.props.dureeContratH} hours)</th>
                                        <th className="text-right">DISCOUNT</th>


                                        <th className="text-right">TOTAL</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr><label> Entretien et maintenance : </label></tr>
                                    <tr>
                                        <td className="no">CODE-SERVICE</td>
                                        <td className="text-left"><h3>
                                            <a target="" href="https://www.youtube.com/channel/UC_UMEcP_kF0z4E6KbxCpV1w">
                                                Déplacements :
                                    </a>
                                        </h3>
                                                
                                        </td>
                                        <td className="photo"></td>
                                        <td className="qty">0</td>
                                        <td className="unit">$0.00</td>
                                        <td className="discount">$0.00</td>
                                        <td className="total">$0.00</td>
                                    </tr>
                                    <DisplayMoClim
                                        label="Main d'oeuvre"
                                        heureMo={this.props.heureMo}
                                        heureMo2={this.props.heureMo2}
                                        heure250={this.props.heure250}
                                        entretien250={this.props.entretien250}
                                        clim={this.props.clim}
                                        dureeContratH={this.props.dureeContratH}
                                    ></DisplayMoClim>
                                    
                                    <DisplayKits
                                        label='Kits'
                                        prixKits={this.props.prixKits}
                                        dureeContratH={this.props.dureeContratH}
                                    ></DisplayKits>

                                    
                                    <tr>
                                        <td colSpan="2"></td>
                                        <td colSpan="4">Total entretien et maintenace</td>
                                        <td> € {(this.props.prixKits) ? (this.getTotal()-parseFloat(this.props.prixExtension)).toFixed(2): 0}</td>
                                        
                                    </tr>
                                    
                                    <DisplayLinesExtension
                                        label='Extenson de garantie'
                                        prixExtension={this.props.prixExtension}
                                        dureeContratH={this.props.dureeContratH}
                                    ></DisplayLinesExtension>

                                    <DisplayLines
                                        lines={this.props.lines}
                                        totalCost_autreService={this.props.totalCost_autreService}
                                        dureeContratH={this.props.dureeContratH}
                                    ></DisplayLines>
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <td colSpan="2"></td>
                                        <td colSpan="4">GRAND TOTAL</td>
                                        <td>€ {(this.props.totalCost_autreService) ? (this.getTotal()-parseFloat(this.props.totalCost_autreService)).toFixed(2) : this.getTotal() }</td>
                                    </tr>
                                </tfoot>
                            </table>
                            <div className="notices">
                                <div>Commentaires et précisions :</div>
                            </div>
                        </main>
                        <footer>
                            Ce devis a été généré avec le configurateur de contrat de service de MECALAC
                        <div> <img src={contact} alt="Contact" />
                                <a id="img" target="" href="https://www.mecalac.com/">
                                </a>
                                <div>services-parts@mecalac.com</div>
                            </div>
                        </footer>
                    </div>
                    <div></div>
                </div>
            </div>
            </div>
        );
    }



}

const mapStateToProps = (state) => {
    return {
        companyNameA: state.concessReducer.companyNameA,
        prenomNomA: state.concessReducer.prenomNomA,
        adresseA: state.concessReducer.adresseA,
        villeA: state.concessReducer.villeA,
        emailA: state.concessReducer.emailA,
        companyName: state.clientReducer.companyName,
        prenomNom: state.clientReducer.prenomNom,
        adresse: state.clientReducer.adresse,
        email: state.clientReducer.email,
        date: state.infocomplementaireReducer.date,
        lieu: state.infocomplementaireReducer.lieu,
        lines: state.serviceAjoutesReducer.lines ? Object.values(state.serviceAjoutesReducer.lines) : null,
        prixExtension: state.specMachineReducer.prixExtension,
        totalCost_autreService: state.serviceAjoutesReducer.totalCost_autreService,
        dureeContratH: state.specMachineReducer.dureeContratH,
        prixKits: state.specMachineReducer.prixKits,
        heureMo: state.specMachineReducer.heureMo,
        heureMo2: state.specMachineReducer.heureMo2,
        heure250: state.specMachineReducer.heure250,
        entretien250: state.specMachineReducer.entretien250,
        clim: state.specMachineReducer.clim,
    };
};



export default connect(mapStateToProps, { defineTime })(DevisCom);