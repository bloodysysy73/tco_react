import React from 'react';

class DisplayPieces extends React.Component {

    renderList = () => {
        return (
            <tr ><td className="no">{this.props.label}</td>
                <td className="text-left"><h3><a target="" href="https://www.mecalac.com/en/consumer-services/spare-parts.html">
                   description </a></h3></td>
                <td className="photo"></td>
                <td className="text-left"></td>
                <td className="unit">{(this.props.clim === 'non') ? this.getCost2() : this.getCost() } € / heure</td>
                <td className="discount"></td>
                <td className="total"> {(this.props.clim === 'non') ? (this.props.prixPieces2) : (this.props.prixPieces) } € </td>
            </tr>
        );
    }



    getCost() {
        let cost = parseFloat(this.props.prixPieces) / parseInt(this.props.dureeContratH, 10)
        return Number.parseFloat(cost).toFixed(2);
    }

    getCost2() {
        let cost2 = parseFloat(this.props.prixPieces2) / parseInt(this.props.dureeContratH, 10)
        return Number.parseFloat(cost2).toFixed(2);
    }


    render() {
        if (this.props.prixPieces) {
            return (
                <>
                    {this.renderList()}

                </>
            );
        } else { return <div></div> }
    }

}


export default (DisplayPieces);
