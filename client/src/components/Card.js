import React, { useState, useContext } from 'react';
import { Card, CardDeck, Row, Col, Container, CardColumns, Button } from 'react-bootstrap';

// import context for global state
import UserInfoContext from '../utils/UserInfoContext';
// import ItemInfoContext from '../utils/ItemInfoContext';

import * as API from '../utils/API';
import AuthService from '../utils/auth';

function AllItems() {
  // get whole userData state object from App.js
  const userData = useContext(UserInfoContext);
  // const itemData = useContext(ItemInfoContext);

  //   // get username out of context object to display in nav
    const { username } = useContext(UserInfoContext);

  return (
    <>
      <Container fluid>
         <Row>
          <Col> 
        {/* <CardColumns>
          {itemData.map((item) => {
            return (
              <Card border="primary" bg="dark" text="light" style={{ padding: "20px", margin: "20px" }}>
                {/* <Card.Header style={{ fontSize: "25px" }}>{userData.username}
                </Card.Header> */}
                {/* <Card.Img variant="top" src="https://images.fineartamerica.com/images-medium-large-5/downtown-richmond-in-black-and-white-gordon-cain.jpg" />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>Description: {item.description}</Card.Text>
                  <Card.Text>Price: ${item.price}</Card.Text>
                  <a href={`mailto: ${userData.email}`} style={{ color: "white", fontSize: "45px"}}>&#9993;</a>
                </Card.Body>
              </Card>
            );
          })}
        </CardColumns> */}
        <h1>test</h1>
         </Col>
        </Row>
      </Container>
    </>
  );
}

export default AllItems;