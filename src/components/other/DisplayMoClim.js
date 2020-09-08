import React from 'react';

class DisplayMoClim extends React.Component {


    renderList = () => {
        return (
            <tr ><td className="no">CODE-SERVICE</td>
                <td className="text-left"><h3><a target="" href="https://www.youtube.com/channel/UC_UMEcP_kF0z4E6KbxCpV1w">
                    {this.props.label}</a></h3></td>
                <td className="photo"></td>
                <td className="qty">0</td>
                <td className="unit">{this.props.heureMoClim ? this.getCost() : 0} €</td>
                <td className="discount">$0.00</td>
                <td className="total">€  {(this.props.heureMoClim) ? this.getMoCost() : 0}</td>
            </tr>
        );
    }

    getMoCost() {
        let moCost = (parseFloat(this.props.heureMoClim) * 70)
        return Number.parseFloat(moCost).toFixed(2);
    }

    getCost() {
        let cost = (this.getMoCost()) / parseInt(this.props.dureeContratH, 10)
        return Number.parseFloat(cost).toFixed(2);
    }

    render() {
        if (this.props.heureMoClim) {
            return (
                <><tr> Main d'oeuvre :</tr>
                    {this.renderList()}
                    <tr>
                        <td colSpan="2"></td>
                        <td colSpan="4">Total coûts de la main d'oeuvre</td>
                        <td>€ {this.getMoCost()}</td>
                    </tr>
                </>
            );
        } else { return <div></div> }
    }

}

export default (DisplayMoClim);
