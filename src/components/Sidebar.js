import React from 'react';
import { FaHome, FaCog } from 'react-icons/fa';
import styled from 'styled-components';

const SidebarContainer = styled.div`
  width: 80px;
  background-color: #1b1f22;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
`;

const IconWrapper = styled.div`
  margin: 20px 0;
  color: #61dafb;
  cursor: pointer;
`;

function Sidebar() {
  return (
    <SidebarContainer>
      <IconWrapper>
        <FaHome size={24} />
      </IconWrapper>
      <IconWrapper>
        <FaCog size={24} />
      </IconWrapper>
    </SidebarContainer>
  );
}

export default Sidebar;
