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

const SalesSettingsStyles = styled.div`
  .pm-top-box {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .input-group {
      max-width: 500px;
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
const SalesSettings = () => {
  return (
    <SalesSettingsStyles>
      <AppContainer>
        <TopHeader
          pageName="RPM / Sales Settings"
          showTime={true}
          showAdminDropdown={true}
        />
        <AppFlexContainer>
          <LeftMenu />
          <RightContentBox>
            <h4>상품 관리</h4>
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
              <Link to="/product-management/add-product">
                <Button variant="success">
                  <BsBox />
                  상품추가
                </Button>
              </Link>
            </div>
            <div className="ps-table">
              <Table bordered className="my-5">
                <tbody>
                  <tr>
                    <td colSpan={4}>2023년 4월</td>
                    <td>1 수</td>
                    <td>2 목</td>
                    <td>3 금</td>
                    <td>4 토</td>
                    <td>5 해</td>
                    <td>6 월</td>
                    <td>7 화</td>
                  </tr>
                  <tr>
                    <th>숙소명</th>
                    <th>객실명</th>
                    <th>상품명</th>
                    <th></th>
                    <th colSpan={7}></th>
                  </tr>
                  <tr>
                    <td rowSpan={8}>용평리조트 타워콘도</td>
                    <td rowSpan={4}>오빌리 네스트 A01</td>
                    <td></td>
                    <td>
                      <Button size="sm" variant="outline-success">
                        객실 수
                      </Button>
                      <br />
                      <span>잔여 수량</span>
                    </td>
                    <td>3</td>
                    <td>4</td>
                    <td>4</td>
                    <td>3</td>
                    <td>3</td>
                    <td>3</td>
                    <td>3</td>
                  </tr>
                  <tr>
                    <td>오빌리 네스트 객실예약 1</td>
                    <td>
                      <Button size="sm" variant="outline-success">
                        객실 수
                      </Button>
                      <br />
                      <span>잔여 수량</span>
                    </td>
                    <td>3</td>
                    <td>4</td>
                    <td>4</td>
                    <td>3</td>
                    <td>3</td>
                    <td>3</td>
                    <td>3</td>
                  </tr>
                  <tr>
                    <td>오빌리 네스트 객실예약 1</td>
                    <td>
                      <Button size="sm" variant="outline-success">
                        객실 수
                      </Button>
                      <br />
                      <span>잔여 수량</span>
                    </td>
                    <td>3</td>
                    <td>4</td>
                    <td>3</td>
                    <td>3</td>
                    <td>3</td>
                    <td>3</td>
                    <td>3</td>
                  </tr>
                  <tr>
                    <td>오빌리 네스트 객실예약 1</td>
                    <td>
                      <Button size="sm" variant="outline-success">
                        객실 수
                      </Button>
                      <br />
                      <span>잔여 수량</span>
                    </td>
                    <td>3</td>
                    <td>4</td>
                    <td>3</td>
                    <td>3</td>
                    <td>3</td>
                    <td>3</td>
                    <td>3</td>
                  </tr>
                  <tr>
                    <td rowSpan={4}>오빌리 네스트 A02</td>
                    <td></td>
                    <td>
                      <Button size="sm" variant="outline-success">
                        객실 수
                      </Button>
                      <br />
                      <span>잔여 수량</span>
                    </td>
                    <td>3</td>
                    <td>4</td>
                    <td>4</td>
                    <td>3</td>
                    <td>3</td>
                    <td>3</td>
                    <td>3</td>
                  </tr>
                  <tr>
                    <td>오빌리 네스트 객실예약 1</td>
                    <td>
                      <Button size="sm" variant="outline-success">
                        객실 수
                      </Button>
                      <br />
                      <span>잔여 수량</span>
                    </td>
                    <td>3</td>
                    <td>4</td>
                    <td>4</td>
                    <td>3</td>
                    <td>3</td>
                    <td>3</td>
                    <td>3</td>
                  </tr>
                  <tr>
                    <td>오빌리 네스트 객실예약 1</td>
                    <td>
                      <Button size="sm" variant="outline-success">
                        객실 수
                      </Button>
                      <br />
                      <span>잔여 수량</span>
                    </td>
                    <td>3</td>
                    <td>4</td>
                    <td>3</td>
                    <td>3</td>
                    <td>3</td>
                    <td>3</td>
                    <td>3</td>
                  </tr>
                  <tr>
                    <td>오빌리 네스트 객실예약 1</td>
                    <td>
                      <Button size="sm" variant="outline-success">
                        객실 수
                      </Button>
                      <br />
                      <span>잔여 수량</span>
                    </td>
                    <td>3</td>
                    <td>4</td>
                    <td>3</td>
                    <td>3</td>
                    <td>3</td>
                    <td>3</td>
                    <td>3</td>
                  </tr>
                  <tr>
                    <th>숙소명</th>
                    <th>객실명</th>
                    <th>상품명</th>
                    <th></th>
                    <th colSpan={7}></th>
                  </tr>
                  <tr>
                    <td rowSpan={2}>용평리조트 타워콘도</td>
                    <td rowSpan={2}>오빌리 네스트 A01</td>
                    <td></td>
                    <td>
                      <Button size="sm" variant="outline-success">
                        객실 수
                      </Button>
                      <br />
                      <span>잔여 수량</span>
                    </td>
                    <td>3</td>
                    <td>4</td>
                    <td>4</td>
                    <td>3</td>
                    <td>3</td>
                    <td>3</td>
                    <td>3</td>
                  </tr>
                  <tr>
                    <td>오빌리 네스트 객실예약 1</td>
                    <td>
                      <Button size="sm" variant="outline-success">
                        객실 수
                      </Button>
                      <br />
                      <span>잔여 수량</span>
                    </td>
                    <td>3</td>
                    <td>4</td>
                    <td>4</td>
                    <td>3</td>
                    <td>3</td>
                    <td>3</td>
                    <td>3</td>
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
    </SalesSettingsStyles>
  );
};

export default SalesSettings;
