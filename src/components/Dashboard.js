import React from 'react';
import styled from 'styled-components';
import RevenueChart from './RevenueChart';
import CardDetails from './CardDetails';
import TransactionCard from './TransactionCard';

const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  flex: 1;
  background-color: #181b1e;
`;

function Dashboard() {
  return (
    <DashboardContainer>
      <RevenueChart />
      <CardDetails />
      <TransactionCard />
    </DashboardContainer>
  );
}

export default Dashboard;
