import React from 'react';
import styled from 'styled-components';

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #1b1f22;
  padding: 20px;
  color: #ffffff;
`;

const SearchInput = styled.input`
  background-color: #2c2f34;
  border: none;
  border-radius: 20px;
  padding: 10px;
  color: #ffffff;
`;

function Navbar() {
  return (
    <NavbarContainer>
      <SearchInput placeholder="Search payment" />
      <div>Hi Stefan!</div>
    </NavbarContainer>
  );
}

export default Navbar;
