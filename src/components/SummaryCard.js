import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  background: ${(props) => props.color || "#1e2226"};
  padding: 20px;
  border-radius: 10px;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function SummaryCard({ title, value, change, color }) {
  return (
    <CardContainer color={color}>
      <h3>{title}</h3>
      <h1>{value}</h1>
      <p>{change}</p>
    </CardContainer>
  );
}

export default SummaryCard;
