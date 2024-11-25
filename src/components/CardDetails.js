import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  background: #1e2226;
  padding: 20px;
  border-radius: 10px;
  margin: 20px 0;
  color: #fff;
`;

function CardDetails() {
  return (
    <CardContainer>
      <h3>My Card</h3>
      <h1>$22,350.50</h1>
      <p>Card Number: 4358 4445 0968 2323</p>
      <p>Valid Thru: 08/24</p>
    </CardContainer>
  );
}

export default CardDetails;
