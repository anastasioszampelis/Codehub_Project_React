import React from "react";
import { Container } from "reactstrap";
import ErrorBoundary from '../components/ErrorBoundary';
import Header from "../containers/Header";
import Footer from "../containers/Footer";


function Layout(props) {

    return (
      <Container>
        <ErrorBoundary>
          <Header />
            {props.children}
          <Footer />
        </ErrorBoundary>
      </Container>

    );
}
export default Layout;