import React from "react";
import { Button, Form, Table } from "react-bootstrap";
import styled from "styled-components";
import { AppContainer } from "../components/AppContainer";
import { AppFlexContainer } from "../components/AppFlexContainer";
import TopHeader from "../components/Header";
import LeftMenu from "../components/LeftMenu";
import { RightContentBox } from "../components/RightContentBox";
import { BsDownload, BsLink45Deg, BsEye } from "react-icons/bs";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";
import Footer from "../components/Footer";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
};
export const options2 = {
  responsive: true,
};

const labels = [
  "2023-04-01",
  "2023-04-02",
  "2023-04-03",
  "2023-04-04",
  "2023-04-05",
  "2023-04-06",
];

export const data = {
  labels,
  datasets: [
    {
      label: "Trading Volume",
      data: [[10], [20], [30], [40], [50], [60]],
      borderColor: "#24292e",
      backgroundColor: "#24292e",
      color: "var(--fff-000)",
    },
  ],
};
export const data2 = {
  labels,
  datasets: [
    {
      label: "Sales Rate",
      data: [[10], [20], [30], [40], [50], [60]],
      borderColor: "#24292e",
      backgroundColor: "#24292e",
      color: "var(--fff-000)",
    },
  ],
};

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
    margin: 4rem 0 0 0;
  }
  .dashboard-chart-box {
    width: 100%;
    margin: 4rem 0 0 0;
    & .dashboard-chart-grid {
      width: 100%;
      display: grid;
      grid-template-columns: 10rem 10rem 10rem;
      grid-gap: 1rem;
      margin: 0 0 1.5rem 0;
    }
    & canvas {
      max-height: 20rem;
    }
  }
  .dashboard-chart {
    width: 100%;
    padding: 1.5rem;
    border-radius: 1rem;
    background-color: #fff;
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
              <h5>NFT Stats</h5>
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
                <h5>Top 10 by number of NFT Holdings</h5>
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
                  </tbody>
                </Table>
              </div>
            </div>
            <div className="dashboard-chart-box">
              <h5>NFT Trading Chart</h5>

              <div className="dashboard-chart">
                <div className="dashboard-chart-grid">
                  <Form.Control type="date" placeholder="Enter start date" />
                  <Form.Control type="date" placeholder="Enter end date" />
                  <Button variant="success">
                    <BsEye /> View
                  </Button>
                </div>
                <Bar options={options} data={data} />
              </div>
            </div>
            <div className="dashboard-chart-box">
              <h5>NEST Booking Performance Chart</h5>

              <div className="dashboard-chart">
                <div className="dashboard-chart-grid">
                  <Form.Control type="date" placeholder="Enter start date" />
                  <Form.Control type="date" placeholder="Enter end date" />
                  <Button variant="success">
                    <BsEye /> View
                  </Button>
                </div>
                <Bar options={options2} data={data2} />
              </div>
            </div>
            <Footer />
          </RightContentBox>
        </AppFlexContainer>
      </AppContainer>
    </DashboardStyles>
  );
};

export default Dashboard;
