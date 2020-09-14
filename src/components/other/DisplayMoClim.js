import React from 'react';

class DisplayMoClim extends React.Component {


    renderList = () => {
        return (
            <tr ><td className="no">{this.props.label}</td>
                <td className="text-left"><h3><a target="" href="https://www.mecalac.com/en/consumer-services/spare-parts.html">
                description  </a></h3></td>
                <td className="photo" >{(this.props.entretien250 === 'Client final') ? this.getHeure1() : this.getHeure2()}</td>
                <td className="text-left">heures </td>
                <td className="unit">{(this.props.entretien250 === 'Client final') ? this.getCost() : this.getCost2()} €</td>
                <td className="discount"></td>
                <td className="total">{(this.props.entretien250 === 'Client final') ? this.getMoCost() : ((parseFloat(this.getMoCost())+(parseFloat(this.props.coefMo)*parseFloat(this.props.entWfCost)*parseFloat(this.props.heure250)*((parseInt(this.props.dureeContratH, 10))/500))).toFixed(2))} €  </td>
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

    getHeure1() {
        let heure = (parseFloat(this.props.heureMo))
        let heure2 = (parseFloat(this.props.heureMo2))
        if (this.props.clim === 'non') {
            return Number.parseFloat(heure2).toFixed(0);
        } else { return Number.parseFloat(heure).toFixed(0);}
    }
    
    
    getHeure2() {
        let heure250 = parseFloat(this.getHeure1())+((parseFloat(this.props.heure250)*((parseInt(this.props.dureeContratH, 10))/500)))
        return Number.parseFloat(heure250).toFixed(0);
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

export default (DisplayMoClim);
