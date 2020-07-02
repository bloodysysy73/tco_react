import React from "react";
import ReactToPrint from "react-to-print";
import Devis from "./Devis";



class Printer extends React.Component {
    render() {
        return (
            <div>
                <ReactToPrint
                    // eslint-disable-next-line
                    trigger={() => <a href="#">Imprimer</a>}
                    content={() => this.componentRef}
                />
                <div style={{ display: "none" }}>
                    <Devis ref={el => (this.componentRef = el)} />
                </div>
            </div>
        );
    }
}

export default Printer;