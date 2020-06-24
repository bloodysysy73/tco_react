import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import { Card } from "reactstrap";


class MachineFleet extends React.Component {
  render() {
    return (
        <Card>
      <MDBContainer className="mt-5">

        <MDBRow className="mb-4">
          <MDBCol md="12">
            <img src="https://www.mecalac.com/medias/1551780207_star-mecalac-mwr-series-png.png" className="img-fluid" alt="" />
          </MDBCol>
        </MDBRow>
        
      </MDBContainer>
      </Card>
    );
  }
}

export default MachineFleet;