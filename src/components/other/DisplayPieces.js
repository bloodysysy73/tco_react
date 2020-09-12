import React from 'react';

class DisplayPieces extends React.Component {

    renderList = () => {
        return (
            <tr ><td className="no">CODE-SERVICE</td>
                <td className="text-left"><h3><a target="" href="https://www.youtube.com/channel/UC_UMEcP_kF0z4E6KbxCpV1w">
                    {this.props.label}</a></h3></td>
                <td className="photo"></td>
                <td className="qty">0</td>
                <td className="unit">{this.props.prixPieces ? this.getCost() : 0} €</td>
                <td className="discount">$0.00</td>
                <td className="total">€  {this.props.prixPieces}</td>
            </tr>
        );
    }

    getCost() {
        let cost = parseFloat(this.props.prixPieces) / parseInt(this.props.dureeContratH, 10)
        return Number.parseFloat(cost).toFixed(2);
    }


    render() {
        if (this.props.prixPieces) {
            return (
                <><tr> Pieces :</tr>
                    {this.renderList()}

                </>
            );
        } else { return <div></div> }
    }

}


export default (DisplayPieces);
