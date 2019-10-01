import React from "react";
import { Row, Col, Navbar, NavbarBrand, Nav} from "reactstrap";
import HeaderUser from '../components/HeaderUser';
import UserContext from '../Context/UserContext';


function Header() {

  return (
    <Row>
      <Col xs={12}>
        <Navbar color="light" light>
          <NavbarBrand href="#">Code.Hub Dashboard</NavbarBrand>
            <Nav className="ml-auto" navbar>
              <UserContext.Consumer>
                {({user, isLoadingUser}) => (  
                  <HeaderUser user={user} isLoading={isLoadingUser} />
                )}
              </UserContext.Consumer>
            </Nav>
        </Navbar>
      </Col>
    </Row>
  );
}

export default Header;
