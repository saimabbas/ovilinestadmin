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

const ReservationInquiryStyles = styled.div`
  .pm-top-box {
    width: 100%;
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
const ReservationInquiry = () => {
  return (
    <ReservationInquiryStyles>
      <AppContainer>
        <TopHeader
          pageName="RPM / Reservation Inquiry"
          showTime={true}
          showAdminDropdown={true}
        />
        <AppFlexContainer>
          <LeftMenu />
          <RightContentBox>
            <h4>예약조회</h4>
            <div className="pm-top-box">
              <InputGroup>
                <Form.Control
                  placeholder="Select Month and Year"
                  aria-label="Select Month and Year"
                  aria-describedby="basic-addon2"
                  type="month"
                />
                <Form.Select aria-label="Default select example">
                  <option value="1"> 숙소선택</option>
                  <option value="2">전체 선택</option>
                  <option value="3">용평 리조트 타워콘도</option>
                  <option value="4">비체팰리스</option>
                  <option value="5">파인리즈리조트</option>
                  <option value="6">디오션 리조트</option>
                </Form.Select>
                <Form.Select aria-label="Default select example">
                  <option value="1">예약상태선택 </option>
                  <option value="2">전체 선택</option>
                  <option value="3">예약완료</option>
                  <option value="4">예약취소(환불)</option>
                  <option value="5">사용완료</option>
                  <option value="6">미사용</option>
                </Form.Select>
                <Form.Select aria-label="Default select example">
                  <option value="1">검색조건없음</option>
                  <option value="2">검색조건없음</option>
                  <option value="3">NFT번호</option>
                  <option value="4">인증전화번호</option>
                  <option value="5">투숙자명</option>
                  <option value="6">투숙자연락처</option>
                  <option value="7">예약번호</option>
                  <option value="8">주문번호</option>
                </Form.Select>
                <Form.Control type="text" placeholder="" />
              </InputGroup>
              <div className="pm-top-box-right mt-3">
                <Button variant="outline-success">조회</Button>
                <Button variant="success" className="mx-3">
                  {" "}
                  <BsDownload /> Excel 다운로드
                </Button>
              </div>
              <Link to="/product-management/add-product"></Link>
            </div>

            <div className="ps-table">
              <Table striped bordered hover className="my-5">
                <thead>
                  <tr>
                    <th>NFT번호</th>
                    <th>인증전화번호</th>
                    <th>주문번호</th>
                    <th>제휴사 예약번호</th>
                    <th>메모</th>
                    <th>숙소코드</th>
                    <th>숙소코드</th>
                    <th>요금코드</th>
                    <th>입실날짜</th>
                    <th>퇴실날짜</th>
                    <th>이용요금</th>
                    <th>사용금액</th>
                    <th>패키지코드</th>
                    <th>투숙자명</th>
                    <th>투숙자연락처</th>
                    <th>예약번호</th>
                    <th>예약상태</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
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
    </ReservationInquiryStyles>
  );
};

export default ReservationInquiry;
