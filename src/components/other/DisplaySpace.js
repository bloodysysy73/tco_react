import React from 'react';

class DisplaySpace extends React.Component {

    renderList = () => {
        return (
            <tr ><td className="total"></td>
                <td className="total"></td>
                <td className="total"></td>
                <td className="total"></td>
                <td className="total"></td>
                <td className="total"></td>
                <td className="total"></td>
            </tr>
        );
    }


    render() {
        if (this.props.prixExtension || this.props.totalCost_autreService) {
            return (
                <>
                    {this.renderList()}

                </>
            );
        } else { return <div></div> }
    }

}

export default (DisplaySpace);
