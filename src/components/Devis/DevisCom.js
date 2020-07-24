import React from 'react';
import { connect } from "react-redux";
import { defineTime } from 'actions';

import "assets/css/invoice.css";
import contact from "assets/img/contact.png"; 

class DevisCom extends React.Component {

    componentDidMount() {

        let today = new Date(),
            date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        this.props.date ? console.log("date", this.props.date) : this.props.defineTime("date", date);

    }

    render() {
        return (
            <div><div id="invoice">
                <div className="invoice overflow-auto">
                    <div style={{ minWidth: '600px' }}>
                        <header>
                            <div className="row">
                                <div className="col">
                                    <a id="img" target="" href="https://www.mecalac.com/">
                                    </a>
                                </div>
                                <div className="col company-details">
                                    <h2 className="name">
                                        <a target="" href="https://www.mecalac.com/">
                                            MECALAC GROUP SERVICES
                                </a>
                                    </h2>
                                    <div>Parc des Glaisins 2 av. du Pré de Challes</div>
                                    <div>F-74940 Annecy-le-Vieux</div>
                                    <div>services-parts@mecalac.com</div>
                                </div>
                            </div>
                        </header>
                        <main>
                            <div className="row contacts">
                                <div className="col invoice-to">
                                    <div className="text-gray-light">INVOICE TO:</div>
                                    <h2 className="to">{this.props.prenomNom}</h2>
                                    <div className="address">{this.props.adresse}</div>
                                    <div className="email"><a href="mailto:jeremy.paris17@gmail.com">{this.props.email}</a></div>
                                </div>
                                <div className="col invoice-details">
                                    <h1 className="invoice-id">MECALAC CALCULATOR</h1>
                                    <div className="date">  Date: {this.props.date}</div>
                                    <div className="date">  Lieu: {this.props.lieu}</div>
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
                                        <th className="text-right">HOUR PRICE</th>
                                        <th className="text-right">DISCOUNT</th>


                                        <th className="text-right">TOTAL</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="no">CODE-SERVICE</td>
                                        <td className="text-left"><h3>
                                            <a target="" href="https://www.youtube.com/channel/UC_UMEcP_kF0z4E6KbxCpV1w">
                                                Titre service #1
                                    </a>
                                        </h3>
                                                Description service
                                        </td>
                                        <td className="photo"></td>
                                        <td className="qty">0</td>
                                        <td className="unit">$0.00</td>
                                        <td className="discount">$0.00</td>
                                        <td className="total">$0.00</td>
                                    </tr>
                                    <tr>
                                        <td className="no">CODE-SERVICE</td>
                                        <td className="text-left"><h3>
                                            <a target="" href="https://www.youtube.com/channel/UC_UMEcP_kF0z4E6KbxCpV1w">
                                                Titre service #1
                                    </a>
                                        </h3>
                                                Description service
                                        </td>
                                        <td className="photo"></td>
                                        <td className="qty">0</td>
                                        <td className="unit">$0.00</td>
                                        <td className="discount">$0.00</td>
                                        <td className="total">$0.00</td>
                                    </tr>
                                    <tr>
                                        <td className="no">CODE-SERVICE</td>
                                        <td className="text-left"><h3>
                                            <a target="" href="https://www.youtube.com/channel/UC_UMEcP_kF0z4E6KbxCpV1w">
                                                Titre service #1
                                    </a>
                                        </h3>
                                                Description service
                                        </td>
                                        <td className="photo"></td>
                                        <td className="qty">0</td>
                                        <td className="unit">$0.00</td>
                                        <td className="discount">$0.00</td>
                                        <td className="total">$0.00</td>
                                    </tr>
                                    <tr>
                                        <td className="no">CODE-SERVICE</td>
                                        <td className="text-left"><h3>
                                            <a target="" href="https://www.youtube.com/channel/UC_UMEcP_kF0z4E6KbxCpV1w">
                                                Titre service #1
                                    </a>
                                        </h3>
                                                Description service
                                        </td>
                                        <td className="photo"></td>
                                        <td className="qty">0</td>
                                        <td className="unit">$0.00</td>
                                        <td className="discount">$0.00</td>
                                        <td className="total">$0.00</td>
                                    </tr>
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <td colSpan="2"></td>
                                        <td colSpan="4">SUBTOTAL</td>
                                        <td>$X,000.00</td>
                                    </tr>
                                    <tr>
                                        <td colSpan="2"></td>
                                        <td colSpan="4">TAX 25%</td>
                                        <td>$Y,000.00</td>
                                    </tr>
                                    <tr>
                                        <td colSpan="2"></td>
                                        <td colSpan="4">GRAND TOTAL</td>
                                        <td>$Z,000.00</td>
                                    </tr>
                                </tfoot>
                            </table>
                            <div className="thanks">Merci</div>
                            <div className="notices">
                                <div>NOTES:</div>
                                <div className="notice">Précisions</div>
                            </div>
                        </main>
                        <footer>
                            Disclamer,legal, etc.
                        <div> <img src={contact} alt="Contact"/> 
                        <a id="img" target="" href="https://www.mecalac.com/">
                        </a>
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
        prenomNom: state.clientReducer.prenomNom,
        adresse: state.clientReducer.adresse,
        email: state.clientReducer.email,
        date: state.infocomplementaireReducer.date,
        lieu: state.infocomplementaireReducer.lieu
    };
};

export default connect(mapStateToProps, { defineTime })(DevisCom);