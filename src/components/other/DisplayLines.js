import React from 'react';

class DisplayLines extends React.Component {

    renderList = () => {
        return this.props.lines.map(line => {
            return (
                <tr key={line.id}><td className="no">{line.label}</td>
                    <td className="text-left"><h3><a target="" href="https://www.mecalac.com/en/consumer-services/spare-parts.html">
                    description </a></h3></td>
                    <td className="photo"></td>
                    <td className="text-left"></td>
                    <td className="unit">{line.cost ? this.getCost(line) : 0} € / heure</td>
                    <td className="discount"></td>
                    <td className="total">{line.cost} € </td>
                </tr>
            )
        })
    }

    getCost(line) {
        let cost = parseFloat(line.cost) / parseInt(this.props.dureeContratH, 10)
        return Number.parseFloat(cost).toFixed(2);
    }


    render() {
        if (this.props.lines) {
            return (
                <>

                    {this.renderList()}
                    <tr>
                        <td colSpan="2"></td>
                        <td colSpan="4">Total Autres Services</td>
                        <td>€ {this.props.totalCost_autreService}</td>
                    </tr>
                </>
            );
        } else { return <div></div> }
    }

}

export default (DisplayLines);
