import React from 'react';
import { Row, Col, Jumbotron } from 'react-bootstrap';

const Index = () => (
  <div className="Index">
    <Row>
      <Col xs={ 12 } sm={ 6 } md={ 6 }>
        <img src="/Android_robot.png"  width="100%"/>
      </Col>
      <Col xs={ 12 } sm={ 6 } md={ 6 }>
      </Col>
    </Row>
    <Row className="text-center">
      <Col xs={ 12 } sm={ 6 } md={ 3 }>
        <img className="img-circle" src="/ActionButton_studylogo.png" alt="Generic placeholder image" width="140" height="140" />
      </Col>
      <Col xs={ 12 } sm={ 6 } md={ 3 }>
        <img className="img-circle" src="/ActionButton_studylogo.png" alt="Generic placeholder image" width="140" height="140" />
      </Col>
      <Col xs={ 12 } sm={ 6 } md={ 3 }>
        <img className="img-circle" src="/ActionButton_studylogo.png" alt="Generic placeholder image" width="140" height="140" />
      </Col>
      <Col xs={ 12 } sm={ 6 } md={ 3 }>
        <img className="img-circle" src="/ActionButton_studylogo.png" alt="Generic placeholder image" width="140" height="140" />
      </Col>
    </Row>
  </div>
);

export default Index;
