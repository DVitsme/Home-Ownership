import React from 'react';
import { Jumbotron, Button, Col, Row, Container } from 'reactstrap';

const Example = props => {
  return (
    <div>
      <Jumbotron>
        <Container>
          <h1 className="display-3">Hello and Welcome</h1>
          <p className="lead">
            This website is a tool I use to help collect data for my disortation
            on home owners in DC. All your data is completely anonomous and
            safe.
          </p>
          <hr className="my-2" />
          <p>If you have any questions please read the FQA below or email me</p>
          <Row>
            <Col sm={{ size: 'auto' }}>
              <p className="lead">
                <Button color="primary">Get Started</Button>
              </p>
            </Col>
            <Col sm={{ size: 'auto' }}>
              {' '}
              <p className="lead">
                <Button color="success">Common Questions</Button>
              </p>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Example;
