import React from 'react';
import styled from 'styled-components';

const TransactionsContainer = styled.div`
  background: #1e2226;
  padding: 20px;
  border-radius: 10px;
  color: #fff;
`;

function TransactionCard() {
  return (
    <TransactionsContainer>
      <h3>Transactions</h3>
      <ul>
        <li>Figma - $15.00</li>
        <li>Grammarly - $10.00</li>
        <li>Blender - $15.00</li>
      </ul>
    </TransactionsContainer>
  );
}

export default TransactionCard;
