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
                <td className="total"> {(this.props.clim === 'non') ? this.getClimCost2() : this.getClimCost() } € </td>
            </tr>
        );
    }

    getClimCost() {
        let climRech = parseFloat(this.props.prixPieces) + (parseFloat(this.props.climCost)-293)
        let climRech2 = parseFloat(this.props.prixPieces) + (parseFloat(this.props.climCost)-293)+ (parseFloat(this.props.climCost)-293)
        let climRech3 = parseFloat(this.props.prixPieces) + (parseFloat(this.props.climCost)-293)+ (parseFloat(this.props.climCost)-293)+ (parseFloat(this.props.climCost)-293)
        if (this.props.dureeContratH < '6000') {
            return Number.parseFloat(climRech).toFixed(2);
        } else if ('5500' < this.props.dureeContratH < '9000') { 
            return Number.parseFloat(climRech2).toFixed(2);
        } else { 
            return Number.parseFloat(climRech3).toFixed(2)
        }
    }

    getClimCost2() {
        let climRech = parseFloat(this.props.prixPieces2) + (parseFloat(this.props.climCost)-293)
        let climRech2 = parseFloat(this.props.prixPieces2) + (parseFloat(this.props.climCost)-293)+ (parseFloat(this.props.climCost)-293)
        let climRech3 = parseFloat(this.props.prixPieces2) + (parseFloat(this.props.climCost)-293)+ (parseFloat(this.props.climCost)-293)+ (parseFloat(this.props.climCost)-293)
        if (this.props.dureeContratH < '6000') {
            return Number.parseFloat(climRech).toFixed(2);
        } else if ('5500' < this.props.dureeContratH < '9000') { 
            return Number.parseFloat(climRech2).toFixed(2);
        } else { 
            return Number.parseFloat(climRech3).toFixed(2)
        }
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
