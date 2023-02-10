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

const ProductSettingsStyles = styled.div`
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
const ProductSettings = () => {
  return (
    <ProductSettingsStyles>
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
              <Link to="/product-management/add-product">
                <Button variant="success">
                  <BsBox />
                  상품추가
                </Button>
              </Link>
            </div>
            <div className="ps-table">
              <Table striped bordered hover className="my-5">
                <thead>
                  <tr>
                    <th>상품명</th>
                    <th>상품 구분</th>
                    <th>입실 기간</th>
                    <th colSpan={2}>객실</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>오빌리 네스트 객실예약 1</td>
                    <td>룸온리</td>
                    <td>2023-05-01 ~ 2023-05-31</td>
                    <td>오빌리 네스트 A01, 오빌리 네스트 B01</td>

                    <td>
                      <div className="del-btn">
                        삭제
                        <MdDelete />{" "}
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>오빌리 네스트 객실예약 1</td>
                    <td>룸온리</td>
                    <td>2023-05-01 ~ 2023-05-31</td>
                    <td>오빌리 네스트 A01, 오빌리 네스트 B01</td>

                    <td>
                      <div className="del-btn">
                        삭제
                        <MdDelete />{" "}
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>오빌리 네스트 객실예약 1</td>
                    <td>룸온리</td>
                    <td>2023-05-01 ~ 2023-05-31</td>
                    <td>오빌리 네스트 A01, 오빌리 네스트 B01</td>

                    <td>
                      <div className="del-btn">
                        삭제
                        <MdDelete />{" "}
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>오빌리 네스트 객실예약 1</td>
                    <td>룸온리</td>
                    <td>2023-05-01 ~ 2023-05-31</td>
                    <td>오빌리 네스트 A01, 오빌리 네스트 B01</td>

                    <td>
                      <div className="del-btn">
                        삭제
                        <MdDelete />{" "}
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>오빌리 네스트 객실예약 1</td>
                    <td>룸온리</td>
                    <td>2023-05-01 ~ 2023-05-31</td>
                    <td>오빌리 네스트 A01, 오빌리 네스트 B01</td>

                    <td>
                      <div className="del-btn">
                        삭제
                        <MdDelete />{" "}
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>오빌리 네스트 객실예약 1</td>
                    <td>룸온리</td>
                    <td>2023-05-01 ~ 2023-05-31</td>
                    <td>오빌리 네스트 A01, 오빌리 네스트 B01</td>

                    <td>
                      <div className="del-btn">
                        삭제
                        <MdDelete />{" "}
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>오빌리 네스트 객실예약 1</td>
                    <td>룸온리</td>
                    <td>2023-05-01 ~ 2023-05-31</td>
                    <td>오빌리 네스트 A01, 오빌리 네스트 B01</td>

                    <td>
                      <div className="del-btn">
                        삭제
                        <MdDelete />{" "}
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>오빌리 네스트 객실예약 1</td>
                    <td>룸온리</td>
                    <td>2023-05-01 ~ 2023-05-31</td>
                    <td>오빌리 네스트 A01, 오빌리 네스트 B01</td>

                    <td>
                      <div className="del-btn">
                        삭제
                        <MdDelete />{" "}
                      </div>
                    </td>
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
    </ProductSettingsStyles>
  );
};

export default ProductSettings;
