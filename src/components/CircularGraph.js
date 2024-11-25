import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import styled from 'styled-components';

const CircularGraphContainer = styled.div`
  background: #1e2226;
  padding: 20px;
  border-radius: 10px;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function CircularGraph() {
  const data = {
    labels: ['Food', 'Clothes', 'Other'],
    datasets: [
      {
        data: [950, 420, 480],
        backgroundColor: ['#7e3ff2', '#28a745', '#ffc107'],
      },
    ],
  };

  return (
    <CircularGraphContainer>
      <h3>Available</h3>
      <Doughnut data={data} />
    </CircularGraphContainer>
  );
}

export default CircularGraph;
