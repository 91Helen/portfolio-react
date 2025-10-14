import { Container, Row, Col } from "react-bootstrap";


export const SubscribeForm = () => {
  return (
    <section className="newsletter">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6} xl={7}>
          </Col>
          <Col size={12} md={6} xl={5}>
            <form action="https://formspree.io/f/xblobapj" method="POST">
              <div className="new-email-bx">
                <input type="email" name="email" placeholder="Email Address" required />
                <button type="submit">Submit</button>
              </div>
            </form>
          </Col>
        </Row>
      </Container>
  
    </section>
  );
};