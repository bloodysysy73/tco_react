import React from 'react';

class DisplayDeplacement extends React.Component {


    renderList = () => {
        return (
            <tr ><td className="no"> {this.props.label} </td>
                <td className="text-left"><h3><a target="" href="https://www.mecalac.com/en/consumer-services/spare-parts.html">
                description  </a></h3></td>
                <td className="photo">{(this.props.optionDeplacement === 'c') ? 0 : this.getNbDep()}</td>
                <td className="text-left">déplacements</td>
                <td className="unit">{(this.props.optionDeplacement === 'c') ? 0 : (parseFloat(this.getDepCost())/(parseInt(this.props.dureeContratH, 10))).toFixed(2)} € / heure</td>
                <td className="discount"></td>
                <td className="total">{(this.props.optionDeplacement === 'c') ? 0 : this.getDepCost()} €  </td>
            </tr>
        );
    }



    getDepCost() {
        let depCost1 = (parseFloat(this.props.prixForfait)*parseFloat(this.getNbDep()))
        let depCost2 = (2*((parseFloat(this.props.tripWfCost)*(parseFloat(this.props.geoScope)/(parseFloat(this.props.averageSpeed))))+((parseFloat(this.props.kmCost)*(parseFloat(this.props.geoScope))))))*(parseFloat(this.getNbDep()))
        if (this.props.optionDeplacement === 'a') {
            return Number.parseFloat(depCost2).toFixed(2);
        } else { return Number.parseFloat(depCost1).toFixed(2);}
    }

    getNbDep() {
        let nbDep1 = (parseInt(this.props.dureeContratH, 10))/250
        let nbDep2 = (parseInt(this.props.dureeContratH, 10))/500
        if (this.props.entretien250 === 'Client final') {
            return Number.parseFloat(nbDep2).toFixed(0);
        } else { return Number.parseFloat(nbDep1).toFixed(0);}
    }

    render() {
        if (this.props.dureeContratH) {
            return (
                <>
                    {this.renderList()}


                </>
            );
        } else { return <div></div> }
    }

}

export default (DisplayDeplacement);
