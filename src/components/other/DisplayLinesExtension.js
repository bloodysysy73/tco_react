import React from 'react';
import imgWarranty from "assets/img/imgWarranty.png";

class DisplayLinesExtension extends React.Component {

    renderList = () => {
        return (
            <tr ><td className="no">{this.props.label}</td>
                <td className="text-left"><h3><a target="" href="https://www.mecalac.com/en/consumer-services/spare-parts.html">
                description </a></h3></td>
                <td className="photo"><img width="20" height="20" border="0" align="center" src={imgWarranty} alt="imgWarranty"/></td>
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
                <><tr></tr>
                    {this.renderList()}
                </>
            );
        } else { return <div></div> }
    }

}

export default (DisplayLinesExtension);
