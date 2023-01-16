import React from "react";
import {
  Button,
  Dropdown,
  DropdownButton,
  Form,
  InputGroup,
  Pagination,
  Table,
} from "react-bootstrap";
import styled from "styled-components";
import { AppContainer } from "../components/AppContainer";
import { AppFlexContainer } from "../components/AppFlexContainer";
import TopHeader from "../components/Header";
import LeftMenu from "../components/LeftMenu";
import { RightContentBox } from "../components/RightContentBox";
import { BsDownload, BsLink45Deg, BsEye } from "react-icons/bs";

const ClaimInformationInquiryStyles = styled.div`
  .cii-top-grid {
    width: 100%;
    display: grid;
    grid-template-columns: 10rem 10rem 10rem 1fr;
    grid-gap: 1rem;
  }
  .nft-top-btn-grid {
    width: 100%;
    display: grid;
    grid-template-columns: 10rem 10rem 10rem;
    grid-gap: 1rem;
    margin: 1rem 0 0 0;
  }
  .nft-pagination {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 3rem;
    & ul {
      margin: 0;
    }
  }
`;
const ClaimInformationInquiry = () => {
  return (
    <ClaimInformationInquiryStyles>
      <AppContainer>
        <TopHeader
          pageName="NFT Lookup / Claim Information Inquiry"
          showTime={true}
          showAdminDropdown={true}
        />
        <AppFlexContainer>
          <LeftMenu />
          <RightContentBox>
            <h4>Claim Information Inquiry</h4>
            <div className="cii-top-grid">
              <Form.Control type="date" placeholder="Enter start date" />
              <Form.Control type="date" placeholder="Enter end date" />
              <Form.Select aria-label="Default select example">
                <option>Rarity</option>
                <option value="1">Superior</option>
                <option value="2">Deluxe</option>
                <option value="3">Executive</option>
                <option value="4">Presidential Suite</option>
                <option value="5">Royal Suite</option>
              </Form.Select>
              <InputGroup>
                <DropdownButton
                  variant="success"
                  title="Utility Selection"
                  id="input-group-dropdown-1"
                >
                  <Dropdown.Item href="#">Golf Round Free Pass 1</Dropdown.Item>
                  <Dropdown.Item href="#">Golf Round Free Pass 2</Dropdown.Item>
                  <Dropdown.Item href="#">Golf Round Free Pass 3</Dropdown.Item>
                </DropdownButton>
                <Form.Control aria-label="Text input with dropdown button" />
              </InputGroup>
            </div>
            <div className="nft-top-btn-grid">
              <Button variant="success">
                <BsEye /> Lookup
              </Button>
              <Button variant="outline-success">
                <BsDownload /> Download Excel
              </Button>
              <Button variant="outline-success">
                <BsLink45Deg /> Scope Link
              </Button>
            </div>
            <Table striped bordered hover className="my-5">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>NFTs</th>
                  <th>Wallet Address</th>
                  <th>Utility</th>
                  <th>Verification Mobile Number</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>2023-04-01 00:00:00</td>
                  <td>4</td>
                  <td>0xCAC12345678912345678912345678923456789</td>
                  <td>Private Room Reservation Ticket</td>
                  <td>010-1234-1234</td>
                </tr>
                <tr>
                  <td>2023-04-01 00:00:00</td>
                  <td>4</td>
                  <td>0xCAC12345678912345678912345678923456789</td>
                  <td>Private Room Reservation Ticket</td>
                  <td>010-1234-1234</td>
                </tr>
                <tr>
                  <td>2023-04-01 00:00:00</td>
                  <td>4</td>
                  <td>0xCAC12345678912345678912345678923456789</td>
                  <td>Private Room Reservation Ticket</td>
                  <td>010-1234-1234</td>
                </tr>
                <tr>
                  <td>2023-04-01 00:00:00</td>
                  <td>4</td>
                  <td>0xCAC12345678912345678912345678923456789</td>
                  <td>Private Room Reservation Ticket</td>
                  <td>010-1234-1234</td>
                </tr>
                <tr>
                  <td>2023-04-01 00:00:00</td>
                  <td>4</td>
                  <td>0xCAC12345678912345678912345678923456789</td>
                  <td>Private Room Reservation Ticket</td>
                  <td>010-1234-1234</td>
                </tr>
                <tr>
                  <td>2023-04-01 00:00:00</td>
                  <td>4</td>
                  <td>0xCAC12345678912345678912345678923456789</td>
                  <td>Private Room Reservation Ticket</td>
                  <td>010-1234-1234</td>
                </tr>
                <tr>
                  <td>2023-04-01 00:00:00</td>
                  <td>4</td>
                  <td>0xCAC12345678912345678912345678923456789</td>
                  <td>Private Room Reservation Ticket</td>
                  <td>010-1234-1234</td>
                </tr>
                <tr>
                  <td>2023-04-01 00:00:00</td>
                  <td>4</td>
                  <td>0xCAC12345678912345678912345678923456789</td>
                  <td>Private Room Reservation Ticket</td>
                  <td>010-1234-1234</td>
                </tr>
                <tr>
                  <td>2023-04-01 00:00:00</td>
                  <td>4</td>
                  <td>0xCAC12345678912345678912345678923456789</td>
                  <td>Private Room Reservation Ticket</td>
                  <td>010-1234-1234</td>
                </tr>
              </tbody>
            </Table>
            <div className="nft-pagination">
              <Pagination>
                <Pagination.First />
                <Pagination.Prev />
                <Pagination.Item>{1}</Pagination.Item>
                <Pagination.Ellipsis />
                <Pagination.Item>{10}</Pagination.Item>
                <Pagination.Item>{11}</Pagination.Item>
                <Pagination.Item active>{12}</Pagination.Item>
                <Pagination.Item>{13}</Pagination.Item>
                <Pagination.Item>{14}</Pagination.Item>
                <Pagination.Ellipsis />
                <Pagination.Item>{20}</Pagination.Item>
                <Pagination.Next />
                <Pagination.Last />
              </Pagination>
            </div>
          </RightContentBox>
        </AppFlexContainer>
      </AppContainer>
    </ClaimInformationInquiryStyles>
  );
};

export default ClaimInformationInquiry;