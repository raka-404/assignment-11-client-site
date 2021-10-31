import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row,Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";

const TourPackage = () => {

  const [packages,setPackage] = useState([])

  useEffect(()=>{
    fetch('https://scary-spell-89229.herokuapp.com/card')
    .then(res => res.json())
    .then(data => setPackage(data))
  },[])


  return (
    <>
    {
      (packages.length !== 0) ? <div className="my-5">
       <h1>Most popular package</h1>
      <div className="tour-card">
        <Container>
          <Row xs={1} md={3} className="g-4">
            {
              packages.map(pack => <Col>
                <Card>
                  <Card.Img
                  style={{height:'220px'}}
                    variant="top"
                    src={pack.img}
                  />
                  <Card.Body>
                    <Card.Title>{pack.name}</Card.Title>
                    <Card.Text>${pack.price}</Card.Text>
                    <Card.Text>Country Name: {pack.country}</Card.Text>
                  </Card.Body>
                  <Link to={`/selected/${pack._id}`}><button className="btn mx-1 bg-info text-white ">
                    Book Now
                  </button></Link>
                </Card>
              </Col>)
            }
          </Row>
        </Container>
      </div>
    </div> : <h1><Spinner animation="border" /></h1>
    }
    </>
    
  );
};

export default TourPackage;
