import React from "react";
import { NavLink } from "react-router-dom";
import { Nav } from "reactstrap";
import PerfectScrollbar from "perfect-scrollbar";


var ps;

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.activeRoute.bind(this);
    this.sidebar = React.createRef();
  }
  // verifies if routeName is the one active (in browser input)
  activeRoute(routeName) {
    return this.props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
  }
  componentDidMount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(this.sidebar.current, {
        suppressScrollX: true,
        suppressScrollY: false
      });
    }
  }
  componentWillUnmount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps.destroy();
    }
  }
  render() {
    return (
      <div
        className="sidebar"
        data-color={this.props.bgColor}
        data-active-color={this.props.activeColor}
      >
        <div className="logo">
          <a
            href="http://localhost:3000/admin/dashboard"
            className="simple-text logo-mini"
          >
            <div className="logo-img">
              <i className="nc-icon nc-button-play text-primary" />
            </div>
          </a>
          <a
            href="http://localhost:3000/admin/dashboard"
            className="simple-text logo-normal"
          >
            MECALAC CALCULATOR
          </a>
        </div>
        <div className="sidebar-wrapper" ref={this.sidebar}>
          <Nav>
            {this.props.routes.map((prop, key) => {

              if (prop.affiche !== false) {
                return (
                  <li
                    className={
                      this.activeRoute(prop.path) +
                      (prop.pro ? " active-pro" : "")
                    }
                    key={key}
                  > 
                    <NavLink
                      to={prop.layout + prop.path}
                      className="nav-link"
                      activeClassName="active"
                    >            
                      <p><img src="https://media-exp1.licdn.com/dms/image/C4D0BAQELJdZeAb4dPA/company-logo_200_200/0?e=1600905600&v=beta&t=F6ZsmtXt7BLhhQBMfB6XqclM_nomTYLtsW-XM-Zt3IU" 
                    className="img-fluid" alt="" border="1px" border-radius="1px" padding="1px" width="25px" />
                    . Calculator Dashboard</p>
                    
                    </NavLink>
                    
                  </li>
                );
              } else { return <div key={key}></div> }
            })}
          </Nav>
          
        </div>
      </div>
    );
  }
}

export default Sidebar;
