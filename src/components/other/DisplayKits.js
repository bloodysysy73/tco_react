import React from 'react';

class DisplayKits extends React.Component {

    renderList = () => {
        return (
            <tr ><td className="no">CODE-SERVICE</td>
                <td className="text-left"><h3><a target="" href="https://www.youtube.com/channel/UC_UMEcP_kF0z4E6KbxCpV1w">
                    {this.props.label}</a></h3></td>
                <td className="photo"></td>
                <td className="qty">0</td>
                <td className="unit">{this.props.prixKits ? this.getCost() : 0} €</td>
                <td className="discount">$0.00</td>
                <td className="total">€  {this.props.prixKits}</td>
            </tr>
        );
    }

    getCost() {
        let cost = parseFloat(this.props.prixKits) / parseInt(this.props.dureeContratH, 10)
        return Number.parseFloat(cost).toFixed(2);
    }


    render() {
        if (this.props.prixKits) {
            return (
                <><tr> Kits :</tr>
                    {this.renderList()}
                    <tr>
                        <td colSpan="2"></td>
                        <td colSpan="4">Total coûts des kits</td>
                        <td>€ {this.props.prixKits}</td>
                    </tr>
                </>
            );
        } else { return <div></div> }
    }

}

export default (DisplayKits);
