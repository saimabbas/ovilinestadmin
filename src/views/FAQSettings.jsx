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
import { BsDownload, BsLink45Deg, BsEye, BsPlus } from "react-icons/bs";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const FAQSettingsStyles = styled.div`
  .rm-top-btn {
    width: 100%;
    display: flex;
    justify-content: flex-end;
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
const FAQSettings = () => {
  return (
    <FAQSettingsStyles>
      <AppContainer>
        <TopHeader
          pageName="FAQ Settings"
          showTime={true}
          showAdminDropdown={true}
        />
        <AppFlexContainer>
          <LeftMenu />
          <RightContentBox>
            <h4>FAQ 관리</h4>

            <div className="rm-top-btn">
              <Link to="/add-faq">
                <Button variant="success">
                  <BsPlus />
                  추가
                </Button>
              </Link>
            </div>

            <Table striped bordered hover className="my-3">
              <thead>
                <tr>
                  <th>제목</th>
                  <th>답변</th>
                  <th>링크</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>오빌리 NFT는 어떤 블록체인을 이용하나요?</td>
                  <td>
                    오빌리 네스트는 클레이튼(Klaytn) 블록체인을 이용합니다.
                  </td>
                  <td>링크</td>
                </tr>

                <tr>
                  <td>오빌리 NFT는 어떤 블록체인을 이용하나요?</td>
                  <td>
                    오빌리 네스트는 클레이튼(Klaytn) 블록체인을 이용합니다.
                  </td>
                  <td>링크</td>
                </tr>

                <tr>
                  <td>오빌리 NFT는 어떤 블록체인을 이용하나요?</td>
                  <td>
                    오빌리 네스트는 클레이튼(Klaytn) 블록체인을 이용합니다.
                  </td>
                  <td>링크</td>
                </tr>

                <tr>
                  <td>오빌리 NFT는 어떤 블록체인을 이용하나요?</td>
                  <td>
                    오빌리 네스트는 클레이튼(Klaytn) 블록체인을 이용합니다.
                  </td>
                  <td>링크</td>
                </tr>

                <tr>
                  <td>오빌리 NFT는 어떤 블록체인을 이용하나요?</td>
                  <td>
                    오빌리 네스트는 클레이튼(Klaytn) 블록체인을 이용합니다.
                  </td>
                  <td>링크</td>
                </tr>

                <tr>
                  <td>오빌리 NFT는 어떤 블록체인을 이용하나요?</td>
                  <td>
                    오빌리 네스트는 클레이튼(Klaytn) 블록체인을 이용합니다.
                  </td>
                  <td>링크</td>
                </tr>

                <tr>
                  <td>오빌리 NFT는 어떤 블록체인을 이용하나요?</td>
                  <td>
                    오빌리 네스트는 클레이튼(Klaytn) 블록체인을 이용합니다.
                  </td>
                  <td>링크</td>
                </tr>

                <tr>
                  <td>오빌리 NFT는 어떤 블록체인을 이용하나요?</td>
                  <td>
                    오빌리 네스트는 클레이튼(Klaytn) 블록체인을 이용합니다.
                  </td>
                  <td>링크</td>
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
    </FAQSettingsStyles>
  );
};

export default FAQSettings;
