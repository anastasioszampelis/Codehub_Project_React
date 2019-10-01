import React from "react";
import UserContext from '../Context/UserContext';
import FooterUser from '../components/FooterUser';
import { Row, Col } from "reactstrap";


function Footer() {
  return (
    <UserContext.Consumer>
      {({user, isLoadingUser}) => (  
        <Row>
            <Col xs={12}>
                <footer>
                  <FooterUser isLoading={isLoadingUser} user={user}/>
                  <div>
                    Made with ❤️ in Athens, Greece | <a href="https://tsevdos.me">tsevdos.me</a>
                  </div>
                </footer>
            </Col>
        </Row>
      )}
    </UserContext.Consumer>
  );
}

export default Footer;