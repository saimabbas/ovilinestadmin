import React from "react";
import { Dropdown } from "react-bootstrap";
import styled from "styled-components";
const NavBarStyles = styled.nav`
  width: 100%;
  height: 3rem;
  /* border-bottom: 1px solid var(--neutral-400); */
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 3em;
  position: relative;
  & > .time-and-date {
    color: var(--neutral-700);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
const NavBar = () => {
  return (
    <NavBarStyles>
      <p className="time-and-date">2023-00-00 (월) 오후 01:00</p>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Admin
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </NavBarStyles>
  );
};

export default NavBar;
