import React from 'react';
import styled from 'styled-components';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';

const AppContainer = styled.div`
  display: flex;
`;

const MainContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

function App() {
  return (
    <AppContainer>
      <Sidebar />
      <MainContainer>
        <Navbar />
        <Dashboard />
      </MainContainer>
    </AppContainer>
  );
}

export default App;
