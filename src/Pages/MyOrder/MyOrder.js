import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import useAuth from "../../Hooks/useAuth";

const MyOrder = () => {

  const {user} = useAuth()

  const [orders,setOrders] = useState([])

  useEffect(()=>{
    fetch('https://scary-spell-89229.herokuapp.com/users')
    .then(res => res.json())
    .then(data => {
      const myOrder = data.filter(order => order.email === user.email)
      setOrders(myOrder)
    })
  },[])


  const cancelBtn = id => {
    const confirm = window.confirm('Are you sure wanna remove this item?')
    if (confirm) {
      fetch(`https://scary-spell-89229.herokuapp.com/${id}`,{
        method:'DELETE'
    })
    .then(res => res.json())
    .then(data => {
        if (data.deletedCount > 0) {
            alert('Deleted Successfully')
            const newAllUser = orders.filter(a => a._id !== id)
            setOrders(newAllUser)
            
        }
    })
    }
}

  return (
    <>
      {
        (orders.length !==0) ? <Container className="my-5">
        <Row xs={1} md={4} sm={1} className="g-4">
          {
            orders.map(ordered => <Col key={ordered._id}>
              <Card>
                <Card.Img
                  variant="top"
                  src={ordered?.img}
                />
                <Card.Body>
                  <Card.Title className="fw-bold">{ordered?.title}</Card.Title>
                  <Card.Text>
                  <h4>{ordered?.name}</h4>
                  <h6>Thanks for booking</h6>
                    <p>{ordered?.date}</p>
                  </Card.Text>
                </Card.Body>
                <button onClick={()=>cancelBtn(ordered._id)} className="btn bg-warning text-white border-0">
                  Cancel
                </button>
              </Card>
            </Col>)
          }
        </Row>
      </Container> : <h1>Please wait ...</h1>
      }
    </>
  );
};

export default MyOrder;
