import React from 'react';
import entretien from "assets/img/entretien.png";

class DisplayExpertiseFG extends React.Component {

    renderList = () => {
        return (
            <tr ><td className="no">{this.props.label}</td>
                <td className="text-left"><h3><a href="https://www.mecalac.com/en/consumer-services/spare-parts.html" target="_blank" rel="noopener noreferrer">
                Description  </a></h3></td>
                <td className="photo"><img width="20" height="20" border="0" align="center" src={entretien} alt="entretien"/></td>
                <td className="text-left"></td>
                <td className="unit">{(this.props.optionDeplacement === 'c') ? (parseFloat(this.props.expertiseCost)/(parseInt(this.props.dureeContratH, 10))).toFixed(2) : (parseFloat(this.getExpCost())/(parseInt(this.props.dureeContratH, 10))).toFixed(2)} € / heure</td>
                <td className="discount"></td>
                <td className="total">{(this.props.optionDeplacement === 'c') ? (this.props.expertiseCost) : (this.getExpCost())} €  </td>
            </tr>
        );
    }

    getExpCost() {
        let expCost1 = (parseFloat(this.props.prixForfait) + parseFloat(this.props.expertiseCost))
        let expCost2 = ((2*((parseFloat(this.props.tripWfCost)*(parseFloat(this.props.geoScope)/(parseFloat(this.props.averageSpeed))))+((parseFloat(this.props.kmCost)*(parseFloat(this.props.geoScope))))))+parseFloat(this.props.expertiseCost))
        if (this.props.optionDeplacement === 'a') {
            return Number.parseFloat(expCost2).toFixed(2);
        } else { return Number.parseFloat(expCost1).toFixed(2);}
    }

    render() {
        if (this.props.expertise === "oui") {
            return (
                <>
                    {this.renderList()}

                </>
            );
        } else { return <div></div> }
    }

}

export default (DisplayExpertiseFG);
