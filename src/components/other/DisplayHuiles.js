import React from 'react';
import consommables from "assets/img/consommables.png";

class DisplayHuiles extends React.Component {

    renderList = () => {
        return (
            <tr ><td className="no">{this.props.label}</td>
                <td className="text-left"><h3><a href="https://www.mecalac.com/fr/" target="_blank" rel="noopener noreferrer">
                Lubrifiants Premium Mecalac  </a></h3></td>
                <td className="photo"><img width="20" height="20" border="0" align="center" src={consommables} alt="consommables"/></td>
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
