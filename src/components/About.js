import React from 'react';
import { Container, Row, Col } from 'reactstrap';

export default class Example extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col
            sm="12"
            md={{ size: 6 }}
            className="d-flex justify-content-center"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
            expedita! Minima, hic. Accusamus quae harum impedit quos molestiae
            nesciunt, maxime maiores rerum quia beatae voluptates! Consequatur,
            in officia temporibus numquam adipisci perferendis modi accusantium
            rem.
          </Col>
        </Row>
      </Container>
    );
  }
}
