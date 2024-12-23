import { Container, Row, Col, Card } from 'react-bootstrap';

export const Info = () => {
  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>How to Play</Card.Title>
              <Card.Text>
                Explain the game rules and mechanics here. Make it clear and
                concise so players can quickly understand how to play your game.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Game Features</Card.Title>
              <ul className="list-unstyled">
                <li>• Feature 1 description</li>
                <li>• Feature 2 description</li>
                <li>• Feature 3 description</li>
              </ul>
            </Card.Body>
          </Card>

          <Card>
            <Card.Body>
              <Card.Title>Credits</Card.Title>
              <Card.Text>
                <small className="text-muted">
                  Created with React Game Base Template
                  <br />
                  © {new Date().getFullYear()} Your Name
                </small>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}; 