import React from "react";
import ReactToPrint from "react-to-print";
import HelperPrinter from "./HelperPrinter";



class PDF extends React.Component {
    render() {
        return (
            <div>
                <ReactToPrint
                    // eslint-disable-next-line
                    trigger={() => <a href="#">PDF</a>}
                    content={() => this.componentRef}
                />
                <div style={{ display: "none" }}>
                    <HelperPrinter ref={el => (this.componentRef = el)} />
                </div>
            </div>
        );
    }
}

export default PDF;