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

const NFTTransferInquiryStyles = styled.div`
  .nft-top-grid {
    width: 100%;
    display: grid;
    grid-template-columns: 10rem 10rem 1fr max-content;
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
const NFTTransferInquiry = () => {
  return (
    <NFTTransferInquiryStyles>
      <AppContainer>
        <TopHeader
          pageName="NFT Lookup / NFT Transfer Inquiry"
          showTime={true}
          showAdminDropdown={true}
        />
        <AppFlexContainer>
          <LeftMenu />
          <RightContentBox>
            <h4>NFT Transfer 조회</h4>
            <div className="nft-top-grid">
              <Form.Control type="date" placeholder="Enter start date" />
              <Form.Control type="date" placeholder="Enter end date" />
              <InputGroup>
                <Form.Select aria-label="Default select example">
                  <option value="0">검색조건 없음</option>
                  <option value="1">NFT 번호</option>
                  <option value="2">TO 지갑주소</option>
                  <option value="3">FROM 지갑주소</option>
                </Form.Select>
                <Form.Control aria-label="Text input with dropdown button" />
              </InputGroup>
              <Form.Check
                type={"checkbox"}
                id={" klay-checkbox"}
                label={"KLAY 거래보기"}
              />
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
                  <th>FROM 지갑주소</th>
                  <th>TO 지갑주소</th>
                  <th>KLAY</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>2023-04-01 00:00:00</td>
                  <td>4</td>
                  <td>0xCAC12345678912345678912345678923456789</td>
                  <td>0xCAC12345678912345678912345678923456789</td>
                  <td>6,543.0000</td>
                </tr>
                <tr>
                  <td>2023-04-01 00:00:00</td>
                  <td>4</td>
                  <td>0xCAC12345678912345678912345678923456789</td>
                  <td>0xCAC12345678912345678912345678923456789</td>
                  <td>6,543.0000</td>
                </tr>
                <tr>
                  <td>2023-04-01 00:00:00</td>
                  <td>4</td>
                  <td>0xCAC12345678912345678912345678923456789</td>
                  <td>0xCAC12345678912345678912345678923456789</td>
                  <td>6,543.0000</td>
                </tr>
                <tr>
                  <td>2023-04-01 00:00:00</td>
                  <td>4</td>
                  <td>0xCAC12345678912345678912345678923456789</td>
                  <td>0xCAC12345678912345678912345678923456789</td>
                  <td>6,543.0000</td>
                </tr>
                <tr>
                  <td>2023-04-01 00:00:00</td>
                  <td>4</td>
                  <td>0xCAC12345678912345678912345678923456789</td>
                  <td>0xCAC12345678912345678912345678923456789</td>
                  <td>6,543.0000</td>
                </tr>
                <tr>
                  <td>2023-04-01 00:00:00</td>
                  <td>4</td>
                  <td>0xCAC12345678912345678912345678923456789</td>
                  <td>0xCAC12345678912345678912345678923456789</td>
                  <td>6,543.0000</td>
                </tr>
                <tr>
                  <td>2023-04-01 00:00:00</td>
                  <td>4</td>
                  <td>0xCAC12345678912345678912345678923456789</td>
                  <td>0xCAC12345678912345678912345678923456789</td>
                  <td>6,543.0000</td>
                </tr>
                <tr>
                  <td>2023-04-01 00:00:00</td>
                  <td>4</td>
                  <td>0xCAC12345678912345678912345678923456789</td>
                  <td>0xCAC12345678912345678912345678923456789</td>
                  <td>6,543.0000</td>
                </tr>
                <tr>
                  <td>2023-04-01 00:00:00</td>
                  <td>4</td>
                  <td>0xCAC12345678912345678912345678923456789</td>
                  <td>0xCAC12345678912345678912345678923456789</td>
                  <td>6,543.0000</td>
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
    </NFTTransferInquiryStyles>
  );
};

export default NFTTransferInquiry;
