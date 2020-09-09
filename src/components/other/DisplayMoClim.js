import React from 'react';

class DisplayMoClim extends React.Component {


    renderList = () => {
        return (
            <tr ><td className="no">CODE-SERVICE</td>
                <td className="text-left"><h3><a target="" href="https://www.youtube.com/channel/UC_UMEcP_kF0z4E6KbxCpV1w">
                    {this.props.label}</a></h3></td>
                <td className="photo"></td>
                <td className="qty">0</td>
                <td className="unit">{(this.props.entretien250 === 'Client final') ? this.getCost() : this.getCost2()} €</td>
                <td className="discount">$0.00</td>
                <td className="total">€  {(this.props.entretien250 === 'Client final') ? this.getMoCost() : (parseFloat(this.getMoCost())+(parseFloat(this.props.coefMo)*parseFloat(this.props.entWfCost)*parseFloat(this.props.heure250)*((parseInt(this.props.dureeContratH, 10))/500)))}</td>
            </tr>
        );
    }

    getMoCost() {
        let moCost = (parseFloat(this.props.heureMo) * parseFloat(this.props.entWfCost)*parseFloat(this.props.coefMo))
        let moCost2 = (parseFloat(this.props.heureMo2) *parseFloat(this.props.entWfCost)*parseFloat(this.props.coefMo))
        if (this.props.clim === 'non') {
            return Number.parseFloat(moCost2).toFixed(2);
        } else { return Number.parseFloat(moCost).toFixed(2);}
    }

    getCost() {
        let cost = (this.getMoCost()) / parseInt(this.props.dureeContratH, 10)
        return Number.parseFloat(cost).toFixed(2);
    }

    getCost2() {
        let cost2 = (parseFloat(this.getMoCost())+(parseFloat(this.props.entWfCost)*parseFloat(this.props.heure250)*((parseInt(this.props.dureeContratH, 10))/500))) / parseInt(this.props.dureeContratH, 10)
        return Number.parseFloat(cost2).toFixed(2);
    }

    render() {
        if (this.props.dureeContratH) {
            return (
                <><tr> Main d'oeuvre :</tr>
                    {this.renderList()}


                </>
            );
        } else { return <div></div> }
    }

}

export default (DisplayMoClim);
