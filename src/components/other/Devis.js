import React from 'react';
import { connect } from "react-redux";
import "assets/css/invoice.css";

class Devis extends React.Component {

    constructor() {
        super();

        var today = new Date(),
            date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

        this.state = {
            date: date
        };
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
                                        <img alt="" src="img/blue.png" data-holder-rendered="true" />
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
                                    <div className="date">  Date: {this.state.date}</div>
                                    <div className="Label">Label: FR 30/07/2020</div> à définir
                            <div className="Order type">Order type: FR</div>  à définir
                        </div>
                            </div>
                            <div className="row contacts">
                                Order : WEB1598607  à définir
                    </div>
                            <table border="0" cellspacing="0" cellpadding="0">
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
                                        <td colspan="2"></td>
                                        <td colspan="4">SUBTOTAL</td>
                                        <td>$X,000.00</td>
                                    </tr>
                                    <tr>
                                        <td colspan="2"></td>
                                        <td colspan="4">TAX 25%</td>
                                        <td>$Y,000.00</td>
                                    </tr>
                                    <tr>
                                        <td colspan="2"></td>
                                        <td colspan="4">GRAND TOTAL</td>
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
    };
};

export default connect(mapStateToProps, {})(Devis);