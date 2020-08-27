import React from 'react';

class DisplayLinesExtension extends React.Component {

    renderList = () => {
        return (
            <tr ><td className="no">CODE-SERVICE</td>
                <td className="text-left"><h3><a target="" href="https://www.youtube.com/channel/UC_UMEcP_kF0z4E6KbxCpV1w">
                    {this.props.label}</a></h3></td>
                <td className="photo"></td>
                <td className="qty">0</td>
                <td className="unit">{this.props.prixExtension ? this.getCost() : 0} €</td>
                <td className="discount">$0.00</td>
                <td className="total">€  {this.props.prixExtension}</td>
            </tr>
        );
    }

    getCost() {
        let cost = parseFloat(this.props.prixExtension) / parseInt(this.props.dureeContratH, 10)
        return Number.parseFloat(cost).toFixed(2);
    }


    render() {
        if (this.props.prixExtension) {
            return (
                <><tr> Extension de Garantie :</tr>
                    {this.renderList()}
                    <tr>
                        <td colSpan="2"></td>
                        <td colSpan="4">Total Extension de Garantie</td>
                        <td>€ {this.props.prixExtension}</td>
                    </tr>
                </>
            );
        } else { return <div></div> }
    }

}

export default (DisplayLinesExtension);
