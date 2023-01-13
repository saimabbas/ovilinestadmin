import React, { useState } from "react";
import { Dropdown, Table } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import styled from "styled-components";
import { MdInfoOutline, MdLogout, MdClose } from "react-icons/md";

const Header = styled.header`
  width: 100%;
  height: 3.5rem;
  background-color: var(--neutral-1000);
  border-bottom: 1px solid var(--neutral-700);
  position: sticky;
  top: 0;
  left: 0;
  padding: 0 1.5rem;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  & h1 {
    font-size: 1.35rem;
    color: var(--neutral-200);
    margin: 0;
  }
  & > .time-and-date {
    color: var(--neutral-200);
    font-size: 0.9rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  & .dropdown-item {
    display: flex;
    align-items: center;
    &:active,
    &:focus {
      background-color: #198754;
    }
    & svg {
      font-size: 1.25rem;
      margin: 0 0.5rem 0 0;
    }
  }
`;

const TopHeader = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Header>
      <h1>{props.pageName}</h1>
      {props.showTime ? (
        <p className="time-and-date">2023-00-00 (Mon) 01:00 PM</p>
      ) : null}
      {props.showAdminDropdown ? (
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Admin001
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item onClick={handleShow}>
              <MdInfoOutline />
              My Info
            </Dropdown.Item>
            <Dropdown.Item href="#/action-2">
              <MdLogout /> Logout
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      ) : null}
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            My Info{" "}
            <span onClick={handleClose}>
              <MdClose />
            </span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Table striped bordered hover>
            <tbody>
              <tr>
                <td>ID</td>
                <td>Admin001</td>
              </tr>
              <tr>
                <td>Name</td>
                <td>Manager A</td>
              </tr>
              <tr>
                <td>Belong</td>
                <td>Yongpyong Resort</td>
              </tr>
              <tr>
                <td>Contact</td>
                <td>010 -1234 -5678</td>
              </tr>
              <tr>
                <td>Email</td>
                <td>admin001@mail.com</td>
              </tr>
              <tr>
                <td>Admin Authority</td>
                <td>Super Admin</td>
              </tr>
            </tbody>
          </Table>
        </Modal.Body>
      </Modal>
    </Header>
  );
};
export default TopHeader;
