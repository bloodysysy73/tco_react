import React from 'react';

class DisplayHuiles extends React.Component {

    renderList = () => {
        return (
            <tr ><td className="no">{this.props.label}</td>
                <td className="text-left"><h3><a target="" href="https://www.mecalac.com/en/consumer-services/spare-parts.html">
                description  </a></h3></td>
                <td className="photo"></td>
                <td className="text-left"></td>
                <td className="unit">{this.props.prixHuiles ? this.getCost() : 0} € / heure</td>
                <td className="discount"></td>
                <td className="total">{this.props.prixHuiles} €  </td>
            </tr>
        );
    }

    getCost() {
        let cost = parseFloat(this.props.prixHuiles) / parseInt(this.props.dureeContratH, 10)
        return Number.parseFloat(cost).toFixed(2);
    }


    render() {
        if (this.props.prixHuiles) {
            return (
                <>
                    {this.renderList()}

                </>
            );
        } else { return <div></div> }
    }

}

export default (DisplayHuiles);
