import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer()  {
  return (
    <footer className="mt-5 custom-footer">
      <Container>
        <Row className="footer-content">
          <Col className="text-center">
            <p>&copy; {new Date().getFullYear()} Crypto Exchange</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
