import React from 'react';

class DisplayLinesExtension extends React.Component {

    renderList = () => {
        return (
            <tr ><td className="no">{this.props.label}</td>
                <td className="text-left"><h3><a target="" href="https://www.mecalac.com/en/consumer-services/spare-parts.html">
                description </a></h3></td>
                <td className="photo"></td>
                <td className="text-left"></td>
                <td className="unit">{this.props.prixExtension ? this.getCost() : 0} € / heure</td>
                <td className="discount"></td>
                <td className="total">{this.props.prixExtension} €  </td>
            </tr>
        );
    }

    getCost() {
        let cost = parseFloat(this.props.prixExtension) / parseInt(this.props.dureeContratH, 10)
        return Number.parseFloat(cost).toFixed(2);
    }


    render() {
        if (this.props.prixExtension) {
            return (
                <><tr>.</tr>
                    {this.renderList()}
                    <tr>
                        <td colSpan="2"></td>
                        <td colSpan="4">Total Extension de Garantie</td>
                        <td>€ {this.props.prixExtension}</td>
                    </tr>
                </>
            );
        } else { return <div></div> }
    }

}

export default (DisplayLinesExtension);
