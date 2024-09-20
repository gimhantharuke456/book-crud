import React from "react";
import styled from "styled-components";
import { Avatar } from "antd";

// Styled Components
const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #d0d0d0; /* Approximation from the image */
  width: 100%;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
`;

const LogoImage = styled.img`
  height: 50px;
`;

const CompanyName = styled.h1`
  font-size: 24px; /* Approximate size */
  font-weight: bold;
  margin-left: 10px;
  color: #000;
`;

const UserIcon = styled.div`
  font-size: 24px;
  color: #000;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>
        <LogoImage src="lgo.jpg" alt="Company Logo" />
      </Logo>{" "}
      <CompanyName>INDIKA MOTORS & TRANSPORT (PVT) LTD</CompanyName>
      <UserIcon>
        <Avatar icon={<img src="path-to-your-user-icon" alt="User Icon" />} />
      </UserIcon>
    </HeaderContainer>
  );
};

export default Header;
