import React from "react";
import ReactToPrint from "react-to-print";
import Resume from "./resume";



class Printer extends React.Component {
    render() {
        return (
            <div>
                <ReactToPrint
                    trigger={() => <a href="#">Imprimer</a>}
                    content={() => this.componentRef}
                />
                <div style={{ display: "none" }}>
                    <Resume ref={el => (this.componentRef = el)} />
                </div>
            </div>
        );
    }
}

export default Printer;