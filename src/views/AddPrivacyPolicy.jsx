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
  BsPlus,
  BsPencilFill,
  BsBasket,
  BsTrash2Fill,
  BsTrash,
  BsTrashFill,
} from "react-icons/bs";
import Footer from "../components/Footer";

const AddPrivacyPolicyStyles = styled.div`
  .tou-box {
    width: 100%;
    background-color: #f7f8f9;
    padding: 1.15rem 1.5rem;
    border-radius: 0.75rem;
  }
  .rm-top-btn {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    & select {
      width: min-content;
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
  .ap-btn-box {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    & button {
      min-width: 120px;
      margin: 0 0.75rem;
    }
  }
`;
const AddPrivacyPolicy = () => {
  return (
    <AddPrivacyPolicyStyles>
      <AppContainer>
        <TopHeader
          pageName="Add Privacy Policy"
          showTime={true}
          showAdminDropdown={true}
        />
        <AppFlexContainer>
          <LeftMenu />
          <RightContentBox>
            <h4>개인정보방침 추가</h4>
            <div className="rm-top-btn">
              <Form.Select aria-label="Default select example">
                <option value="1"> 2023년 2월 1일 개정 </option>
                <option value="2"> 2023년 1월 1일 개정 </option>
              </Form.Select>
            </div>
            <div className="tou-box mb-5 mt-3">
              <Form.Control
                as="textarea"
                rows={10}
                placeholder="내용을 입력해 주세요."
              />
              <div className="ap-btn-box mt-4">
                <Button variant="outline-danger">나가기</Button>
                <Button variant="success">저장</Button>
              </div>
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
    </AddPrivacyPolicyStyles>
  );
};

export default AddPrivacyPolicy;
