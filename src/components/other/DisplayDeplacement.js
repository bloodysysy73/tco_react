import React from 'react';

class DisplayDeplacement extends React.Component {


    renderList = () => {
        return (
            <tr ><td className="no"> CODE-SERVICE </td>
                <td className="text-left"><h3><a target="" href="https://www.youtube.com/channel/UC_UMEcP_kF0z4E6KbxCpV1w">
                    {this.props.label}</a></h3></td>
                <td className="photo"></td>
                <td className="qty">0</td>
                <td className="unit">{(this.props.optionDeplacement === 'c') ? 0 : (parseFloat(this.getDepCost())/(parseInt(this.props.dureeContratH, 10)))} €</td>
                <td className="discount">$0.00</td>
                <td className="total">€  {(this.props.optionDeplacement === 'c') ? 0 : this.getDepCost()}</td>
            </tr>
        );
    }



    getDepCost() {
        let depCost1 = (parseFloat(this.props.prixForfait)*((parseInt(this.props.dureeContratH, 10))/500))
        let depCost2 = ((parseFloat(this.props.tripWfCost)*(parseFloat(this.props.geoScope)/(parseFloat(this.props.averageSpeed))))+((parseFloat(this.props.kmCost)*(parseFloat(this.props.geoScope)))))*((parseInt(this.props.dureeContratH, 10))/500)
        if (this.props.optionDeplacement === 'a') {
            return Number.parseFloat(depCost2).toFixed(2);
        } else { return Number.parseFloat(depCost1).toFixed(2);}
    }

    render() {
        if (this.props.dureeContratH) {
            return (
                <><tr> Deplacement :</tr>
                    {this.renderList()}


                </>
            );
        } else { return <div></div> }
    }

}

export default (DisplayDeplacement);
