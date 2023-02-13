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
import Footer from "../components/Footer";

const ClaimInformationInquiryStyles = styled.div`
  .cii-top-grid {
    width: 100%;
    display: grid;
    grid-template-columns: 10rem 10rem 10rem 1fr;
    grid-gap: 1rem;
    & .input-group select {
      max-width: max-content;
    }
  }
  .nft-top-btn-grid {
    width: 100%;
    display: grid;
    grid-template-columns: max-content max-content max-content;
    grid-gap: 1rem;
    margin: 1rem 0 0 0;
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
            <h4>클레임 정보조회</h4>
            <div className="cii-top-grid">
              <Form.Control type="date" placeholder="Enter start date" />
              <Form.Control type="date" placeholder="Enter end date" />
              <Form.Select aria-label="Default select example">
                <option value="0">유틸리티 선택</option>
                <option value="1">전체 선택</option>
                <option value="2">전용객실 예약권</option>
                <option value="3">일반 콘도 무료 숙박권</option>
                <option value="4">홀더 파티</option>
                <option value="5">스키 시즌권</option>
                <option value="6">프리미엄 콘도 무료 숙박권</option>
                <option value="7">호텔 객실 무료 숙박권</option>
                <option value="8">골프 라운딩 무료 이용권</option>
                <option value="9">케이블카 연간 이용권</option>
                <option value="10">케이블카 이용권</option>
                <option value="11">워터파크 연간 이용권</option>
                <option value="12">워터파크 입장권</option>
                <option value="13">리프트 이용권</option>
                <option value="14">마운틴코스터 이용권</option>
                <option value="15">이벤트 리프트권</option>
              </Form.Select>
              <InputGroup>
                <Form.Select aria-label="Default select example">
                  <option value="0">검색조건 없음</option>
                  <option value="1">NFT 번호</option>
                  <option value="2">TO 지갑주소</option>
                  <option value="3">FROM 지갑주소</option>
                </Form.Select>
                <Form.Control aria-label="Text input with dropdown button" />
              </InputGroup>
            </div>
            <div className="nft-top-btn-grid">
              <Button variant="success">
                <BsEye /> 조회
              </Button>
              <Button variant="outline-success">
                <BsDownload /> Excel 다운로드
              </Button>
              <Button variant="outline-success">
                <BsLink45Deg />
                스코프 링크
              </Button>
            </div>
            <Table striped bordered hover className="my-5">
              <thead>
                <tr>
                  <th>일시</th>
                  <th>NFTs</th>
                  <th>지갑주소</th>
                  <th>유틸리티</th>
                  <th>인증 </th>
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
            <Footer />
          </RightContentBox>
        </AppFlexContainer>
      </AppContainer>
    </ClaimInformationInquiryStyles>
  );
};

export default ClaimInformationInquiry;
