import React from 'react';

class DisplayLines extends React.Component {

    renderList = () => {
        return this.props.lines.map(line => {
            return (
                <tr key={line.id}><td className="no">CODE-SERVICE</td>
                    <td className="text-left"><h3><a target="" href="https://www.youtube.com/channel/UC_UMEcP_kF0z4E6KbxCpV1w">
                        {line.label}</a></h3></td>
                    <td className="photo"></td>
                    <td className="qty">0</td>
                    <td className="unit">{line.cost ? this.getCost(line) : 0} €</td>
                    <td className="discount">$0.00</td>
                    <td className="total">€ {line.cost}</td>
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
                <><tr> AUTRE COUT :</tr>
                    {this.renderList()}
                    <tr>
                        <td colSpan="2"></td>
                        <td colSpan="4">Total des autres couts</td>
                        <td>€ {this.props.totalCost_autreService}</td>
                    </tr>
                </>
            );
        } else { return <div></div> }
    }

}

export default (DisplayLines);
