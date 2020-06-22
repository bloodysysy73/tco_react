import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";


class Logo extends React.Component {
  render() {
    return (

      <MDBContainer className="mt-5">
        <MDBRow className="mb-4">
          <MDBCol md="4">
            <img src="https://media-exp1.licdn.com/dms/image/C4D0BAQELJdZeAb4dPA/company-logo_200_200/0?e=1600905600&v=beta&t=F6ZsmtXt7BLhhQBMfB6XqclM_nomTYLtsW-XM-Zt3IU" className="img-fluid" alt="" />
          </MDBCol>
        </MDBRow>
      </MDBContainer>

    );
  }
}

export default Logo;