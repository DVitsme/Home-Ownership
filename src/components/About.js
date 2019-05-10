import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'reactstrap';

export default class Example extends React.Component {
  render() {
    const Subtitle = styled.h2`
      font-size: 3.2em;
      text-align: center;
      font-weight: 300;
      color: rgba(0, 0, 0, 0.3);
    `;
    const About__text = styled.p`
      font-size: 1.3em;
      text-align: center;
      color: black;
    `;

    return (
      <Container>
        <Row>
          <div className="d-flex justify-content-center">
            <Col sm="12" md="8">
              <Subtitle>A Quick About</Subtitle>
              <About__text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Placeat, expedita! Minima, hic. Accusamus quae harum impedit
                quos molestiae nesciunt, maxime maiores rerum quia beatae
                voluptates! Consequatur, in officia temporibus numquam adipisci
                perferendis modi accusantium rem.
              </About__text>
            </Col>
          </div>
        </Row>
      </Container>
    );
  }
}
