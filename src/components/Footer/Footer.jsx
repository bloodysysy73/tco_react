/*eslint-disable*/
import React from "react";
import { Container, Row } from "reactstrap";
// used for making the prop types of this component
import PropTypes from "prop-types";

class Footer extends React.Component {
  render() {
    return (
      <footer
        className={"footer" + (this.props.default ? " footer-default" : "")}
      >
        <Container fluid={this.props.fluid ? true : false}>
          <Row>
            <nav className="footer-nav">
              <ul>
                <li>
                  <a
                    href=""
                    target="_blank"
                  >
                    CALCULATOR

                </a>
                </li>
                <li>
                  <a
                    href=""
                    target="_blank"
                  >

                  </a>
                </li>
              </ul>
            </nav>
            <div className="credits ml-auto">
              <div className="copyright">
                <a
                  href="http://localhost:3000/admin/about"
                  target="_blank"
                > &copy; {1900 + new Date().getYear()}, made by Guehria Paris</a>
              </div>
            </div>
          </Row>
        </Container>
      </footer>
    );
  }
}

Footer.propTypes = {
  default: PropTypes.bool,
  fluid: PropTypes.bool
};

export default Footer;
