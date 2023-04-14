import { Card, Container, Row, Col, Image } from "react-bootstrap";
import duneImage from "../assets/images/superhero/Ant-Man_poster.jpg";
import everything from "../assets/images/superhero/Avengers_Endgame_poster.jpg"
import doctor from "../assets/images/superhero/doctor.jpeg"
import invinity from "../assets/images/superhero/invinity.jpg"
import thor from "../assets/images/superhero/thor.jpeg"

const Trending = () => {
  return (
    <div>
      <Container>
        <br/>
        <h1 className="text-white text-center">TRENDING MOVIES</h1>
        <br/>
        <Row>
          <Col md="4" className="movieWrapper">
            <Card className="movieImage">
              <Image src={duneImage} alt="Dune Movies" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">ATN-MAN</Card.Title>
                  <Card.Text className="text-left">
                    This is a wider card with
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>

          <Col md="4" className="movieWrapper">
            <Card className="movieImage">
              <Image src={everything} alt="Dune Movies" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">AVENERS - ENDGAME</Card.Title>
                  <Card.Text className="text-left">
                    This is a wider card with
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>

          <Col md="4" className="movieWrapper">
            <Card className="movieImage">
              <Image src={thor} alt="Dune Movies" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">THOR LOVE & THUNDER</Card.Title>
                  <Card.Text className="text-left">
                    This is a wider card with
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>

          <Col md="4" className="movieWrapper">
            <Card className="movieImage">
              <Image src={doctor} alt="Dune Movies" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">DOCTOR STRANGE</Card.Title>
                  <Card.Text className="text-left">
                    This is a wider card with
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>

          <Col md="4" className="movieWrapper">
            <Card className="movieImage">
              <Image src={invinity} alt="Dune Movies" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">AVENGERS - INVINITY WAR</Card.Title>
                  <Card.Text className="text-left">
                    This is a wider card with
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>

          <Col md="4" className="movieWrapper">
            <Card className="movieImage">
              <Image src={invinity} alt="Dune Movies" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">AVENGERS - INVINITY WAR</Card.Title>
                  <Card.Text className="text-left">
                    This is a wider card with
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Trending;
