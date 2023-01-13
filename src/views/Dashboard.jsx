import React from "react";
import { Table } from "react-bootstrap";
import styled from "styled-components";
import { AppContainer } from "../components/AppContainer";
import { AppFlexContainer } from "../components/AppFlexContainer";
import TopHeader from "../components/Header";
import LeftMenu from "../components/LeftMenu";
import NavBar from "../components/NavBar";
import { RightContentBox } from "../components/RightContentBox";

const DashboardStyles = styled.div`
  width: 100%;
  & .stats-grid {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto;
    grid-gap: 1.5rem;
    margin: 1rem 0 0 0;
    & .stats-grid-card {
      width: 100%;
      padding: 0.85rem 1rem;
      border-radius: 0.5rem;

      background-color: #fff;
      border: 1px solid var(--neutral-300);
      & h2 {
        color: var(--neutral-1000);
      }

      & p {
        margin: 0;
        color: var(--neutral-1000);
      }
    }
  }
  & .dashboard-table-grid {
    width: 100%;
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    grid-template-rows: auto;
    grid-gap: 1.5rem;
    margin: 2.5rem 0 0 0;
  }
`;
const Dashboard = () => {
  return (
    <DashboardStyles>
      <AppContainer>
        <TopHeader
          pageName="Dashboard"
          showTime={true}
          showAdminDropdown={true}
        />
        <AppFlexContainer>
          <LeftMenu />
          <RightContentBox>
            <div className="stats-section">
              <h4>NFT Stats</h4>
              <div className="stats-grid">
                <div className="stats-grid-card">
                  <h2>10,000</h2>
                  <p>Number of wallets owned by NFTs</p>
                </div>
                <div className="stats-grid-card">
                  <h2>12,345</h2>
                  <p>NFT transaction recovery </p>
                </div>
                <div className="stats-grid-card">
                  <h2>99,999,999.00 KLAY</h2>
                  <p>Contract Token Balance</p>
                </div>
              </div>
            </div>
            <div className="dashboard-table-grid">
              <div>
                <h5>Top 10 NFT Trading Price</h5>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>Price</th>
                      <th>Transaction Date</th>
                      <th>Rarity</th>
                      <th>NFT Number</th>
                      <th>Wallet Address</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>10,000 KLAY</td>
                      <td>2023-04-01</td>
                      <td>Royal Suite</td>
                      <td>31</td>
                      <td>0xCAC1234567891234567</td>
                    </tr>
                    <tr>
                      <td>10,000 KLAY</td>
                      <td>2023-04-01</td>
                      <td>Royal Suite</td>
                      <td>31</td>
                      <td>0xCAC1234567891234567</td>
                    </tr>
                    <tr>
                      <td>10,000 KLAY</td>
                      <td>2023-04-01</td>
                      <td>Royal Suite</td>
                      <td>31</td>
                      <td>0xCAC1234567891234567</td>
                    </tr>
                    <tr>
                      <td>10,000 KLAY</td>
                      <td>2023-04-01</td>
                      <td>Royal Suite</td>
                      <td>31</td>
                      <td>0xCAC1234567891234567</td>
                    </tr>
                    <tr>
                      <td>10,000 KLAY</td>
                      <td>2023-04-01</td>
                      <td>Royal Suite</td>
                      <td>31</td>
                      <td>0xCAC1234567891234567</td>
                    </tr>
                    <tr>
                      <td>10,000 KLAY</td>
                      <td>2023-04-01</td>
                      <td>Royal Suite</td>
                      <td>31</td>
                      <td>0xCAC1234567891234567</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
              <div>
                <h6>Top 10 by number of NFT Holdings</h6>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>NFT Count</th>
                      <th>Wallet Address</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>20</td>
                      <td>0xCAC123456789123456789012345</td>
                    </tr>
                    <tr>
                      <td>20</td>
                      <td>0xCAC123456789123456789012345</td>
                    </tr>
                    <tr>
                      <td>20</td>
                      <td>0xCAC123456789123456789012345</td>
                    </tr>
                    <tr>
                      <td>20</td>
                      <td>0xCAC123456789123456789012345</td>
                    </tr>
                    <tr>
                      <td>20</td>
                      <td>0xCAC123456789123456789012345</td>
                    </tr>
                    <tr>
                      <td>20</td>
                      <td>0xCAC123456789123456789012345</td>
                    </tr>
                    <tr>
                      <td>20</td>
                      <td>0xCAC123456789123456789012345</td>
                    </tr>
                    <tr>
                      <td>20</td>
                      <td>0xCAC123456789123456789012345</td>
                    </tr>
                    <tr>
                      <td>20</td>
                      <td>0xCAC123456789123456789012345</td>
                    </tr>
                    <tr>
                      <td>20</td>
                      <td>0xCAC123456789123456789012345</td>
                    </tr>
                    <tr>
                      <td>20</td>
                      <td>0xCAC123456789123456789012345</td>
                    </tr>
                    <tr>
                      <td>20</td>
                      <td>0xCAC123456789123456789012345</td>
                    </tr>
                    <tr>
                      <td>20</td>
                      <td>0xCAC123456789123456789012345</td>
                    </tr>
                    <tr>
                      <td>20</td>
                      <td>0xCAC123456789123456789012345</td>
                    </tr>
                    <tr>
                      <td>20</td>
                      <td>0xCAC123456789123456789012345</td>
                    </tr>
                    <tr>
                      <td>20</td>
                      <td>0xCAC123456789123456789012345</td>
                    </tr>
                    <tr>
                      <td>20</td>
                      <td>0xCAC123456789123456789012345</td>
                    </tr>
                    <tr>
                      <td>20</td>
                      <td>0xCAC123456789123456789012345</td>
                    </tr>
                    <tr>
                      <td>20</td>
                      <td>0xCAC123456789123456789012345</td>
                    </tr>
                    <tr>
                      <td>20</td>
                      <td>0xCAC123456789123456789012345</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </div>
          </RightContentBox>
        </AppFlexContainer>
      </AppContainer>
    </DashboardStyles>
  );
};

export default Dashboard;
