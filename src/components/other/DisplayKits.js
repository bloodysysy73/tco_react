import React from 'react';

class DisplayKits extends React.Component {

    renderList = () => {
        return (
            <tr ><td className="no">{this.props.label}</td>
                <td className="text-left"><h3><a target="" href="https://www.mecalac.com/en/consumer-services/spare-parts.html">
                description  </a></h3></td>
                <td className="photo"></td>
                <td className="text-left"></td>
                <td className="unit">{this.props.prixKits ? this.getCost() : 0} € / heure</td>
                <td className="discount"></td>
                <td className="total">{this.props.prixKits} €  </td>
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
                <>
                    {this.renderList()}

                </>
            );
        } else { return <div></div> }
    }

}

export default (DisplayKits);
