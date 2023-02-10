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
import {
  BsDownload,
  BsLink45Deg,
  BsEye,
  BsSearch,
  BsBox,
} from "react-icons/bs";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";

const PerformanceDataInquiryStyles = styled.div`
  .pm-top-box {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .input-group {
      max-width: 500px;
    }
    & > select {
      max-width: 250px;
    }
  }
  .ps-table td .del-btn {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    & svg {
      font-size: 1.1rem;
      margin: 0 0 0 0.35rem;
    }
  }
  .nft-pagination {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    & ul {
      margin: 0;
    }
  }
`;
const PerformanceDataInquiry = () => {
  return (
    <PerformanceDataInquiryStyles>
      <AppContainer>
        <TopHeader
          pageName="RPM / Product Settings"
          showTime={true}
          showAdminDropdown={true}
        />
        <AppFlexContainer>
          <LeftMenu />
          <RightContentBox>
            <h4>상품 판매 관리</h4>
            <div className="pm-top-box">
              <InputGroup>
                <InputGroup.Text>입실 기간</InputGroup.Text>
                <Form.Control
                  placeholder="Select Month and Year"
                  aria-label="Select Month and Year"
                  aria-describedby="basic-addon2"
                  type="month"
                />
                <Form.Control
                  placeholder="Select Month and Year"
                  aria-label="Select Month and Year"
                  aria-describedby="basic-addon2"
                  type="month"
                />
                <Button variant="outline-success" id="button-addon1">
                  <BsSearch /> 조회
                </Button>
              </InputGroup>
              <Form.Select aria-label="Default select example">
                <option>년도별 실적 다운로드</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </div>
            <div className="ps-table">
              <Table striped bordered hover className="my-5">
                <thead>
                  <tr>
                    <th rowSpan={2}>숙소명</th>
                    <th rowSpan={2}>객실명</th>
                    <th colSpan={2}>조회기간</th>
                    <th colSpan={2}>비교기간</th>
                    <th colSpan={2}>비교증감</th>
                  </tr>
                </thead>
                <thead>
                  <tr>
                    <th></th>
                    <th></th>
                    <th>객실명</th>
                    <th>조회기간</th>
                    <th>비교기간</th>
                    <th>비교증감</th>
                    <th>비교증감</th>
                    <th>비교증감</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>용평리조트 타워콘도</td>
                    <td>오빌리 네스트 A01</td>
                    <td>85 / 90 (94.4%)</td>
                    <td>10,000,000</td>
                    <td>80 / 90 (88.8%)</td>
                    <td>9,300,000</td>
                    <td className="red">+5.6%</td>
                    <td className="blue">-700,000</td>
                  </tr>
                  <tr>
                    <td>용평리조트 타워콘도</td>
                    <td>오빌리 네스트 A01</td>
                    <td>85 / 90 (94.4%)</td>
                    <td>10,000,000</td>
                    <td>80 / 90 (88.8%)</td>
                    <td>9,300,000</td>
                    <td className="red">+5.6%</td>
                    <td className="blue">-700,000</td>
                  </tr>
                  <tr>
                    <td>용평리조트 타워콘도</td>
                    <td>오빌리 네스트 A01</td>
                    <td>85 / 90 (94.4%)</td>
                    <td>10,000,000</td>
                    <td>80 / 90 (88.8%)</td>
                    <td>9,300,000</td>
                    <td className="red">+5.6%</td>
                    <td className="blue">-700,000</td>
                  </tr>
                  <tr>
                    <td>용평리조트 타워콘도</td>
                    <td>오빌리 네스트 A01</td>
                    <td>85 / 90 (94.4%)</td>
                    <td>10,000,000</td>
                    <td>80 / 90 (88.8%)</td>
                    <td>9,300,000</td>
                    <td className="red">+5.6%</td>
                    <td className="blue">-700,000</td>
                  </tr>
                  <tr>
                    <td>용평리조트 타워콘도</td>
                    <td>오빌리 네스트 A01</td>
                    <td>85 / 90 (94.4%)</td>
                    <td>10,000,000</td>
                    <td>80 / 90 (88.8%)</td>
                    <td>9,300,000</td>
                    <td className="red">+5.6%</td>
                    <td className="blue">-700,000</td>
                  </tr>
                  <tr>
                    <td>용평리조트 타워콘도</td>
                    <td>오빌리 네스트 A01</td>
                    <td>85 / 90 (94.4%)</td>
                    <td>10,000,000</td>
                    <td>80 / 90 (88.8%)</td>
                    <td>9,300,000</td>
                    <td className="red">+5.6%</td>
                    <td className="blue">-700,000</td>
                  </tr>
                  <tr>
                    <td>용평리조트 타워콘도</td>
                    <td>오빌리 네스트 A01</td>
                    <td>85 / 90 (94.4%)</td>
                    <td>10,000,000</td>
                    <td>80 / 90 (88.8%)</td>
                    <td>9,300,000</td>
                    <td className="red">+5.6%</td>
                    <td className="blue">-700,000</td>
                  </tr>
                  <tr>
                    <td>용평리조트 타워콘도</td>
                    <td>오빌리 네스트 A01</td>
                    <td>85 / 90 (94.4%)</td>
                    <td>10,000,000</td>
                    <td>80 / 90 (88.8%)</td>
                    <td>9,300,000</td>
                    <td className="red">+5.6%</td>
                    <td className="blue">-700,000</td>
                  </tr>
                </tbody>
              </Table>
            </div>

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
            <Footer />
          </RightContentBox>
        </AppFlexContainer>
      </AppContainer>
    </PerformanceDataInquiryStyles>
  );
};

export default PerformanceDataInquiry;
