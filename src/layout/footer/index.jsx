import React, { Fragment } from 'react';
import { Container, Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'
const Footer = (props) => {
  return (
    <Fragment>
      <footer className="footer">
        <Container fluid={true}>
          <Row>
            <Col md="12" className="footer-copyright text-center">
              {/* <p className="mb-0">{"Copyright 2022 © VFS Tracker by codyPrashant"}</p> */}
              <p className="mb-0"> {"Copyright 2022 © VFS Tracker by "}<Link className="font-primary f-w-700" to={`https://github.com/codyprashant`}>{"codyPrashant"}</Link></p>
            </Col>
          </Row>
        </Container>
      </footer>
    </Fragment>
  );
}

export default Footer;