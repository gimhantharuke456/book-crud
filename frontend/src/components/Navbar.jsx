import React from "react";
import styled from "styled-components";
import { Input, Avatar, Typography } from "antd";
import { SearchOutlined, UserOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const { Text } = Typography;

const NavbarContainer = styled.div`
  background-color: #1a3557;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MenuContainer = styled.div`
  display: flex;
  gap: 24px;
`;

const MenuItem = styled(Text)`
  color: #ffffff;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    color: #cfcfcf;
  }

  ${(props) =>
    props.active &&
    `
    font-weight: bold;
  `}
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
`;

const SearchInput = styled(Input)`
  border-radius: 20px;
  width: 200px;
`;

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <NavbarContainer>
      <MenuContainer>
        <MenuItem active>Home</MenuItem>
        <MenuItem>Vehicle Profiles</MenuItem>
        <MenuItem>Bus Timetables</MenuItem>
        <MenuItem
          onClick={() => {
            navigate("/my-bookings");
          }}
        >
          My Bookings
        </MenuItem>
      </MenuContainer>

      <SearchContainer>
        <SearchInput placeholder="Search" prefix={<SearchOutlined />} />
      </SearchContainer>

      <Avatar
        icon={<UserOutlined />}
        style={{ backgroundColor: "#ffffff", color: "#1A3557" }}
      />
    </NavbarContainer>
  );
};

export default Navbar;
