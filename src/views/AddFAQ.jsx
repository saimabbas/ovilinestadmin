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
  BsInfoCircle,
  BsGear,
  BsBarChart,
  BsFileText,
} from "react-icons/bs";
import Footer from "../components/Footer";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Select from "react-select";
const colourOptions = [
  { value: "오빌리 네스트 A01", label: "오빌리 네스트 A01" },
  { value: "오빌리 네스트 B01", label: "오빌리 네스트 B01" },
  { value: "오빌리 네스트 C01", label: "오빌리 네스트 C01" },
  { value: "오빌리 네스트 D01", label: "오빌리 네스트 D01" },
];
const AddFAQStyles = styled.div`
  .arm-box {
    width: 100%;
    background-color: #f7f8f9;
    padding: 1.15rem 1.5rem;
    border-radius: 0.75rem;
  }
  .ap-input-box {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    h6 {
      min-width: 150px;
      max-width: 150px;
      margin: 0 1rem 0 0;
      text-transform: capitalize;
    }
  }
  .ap-switch {
    width: max-content;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    & .form-check {
      margin: 0.25rem 0.5rem 0 0.5rem;
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

const AddFAQ = () => {
  return (
    <AddFAQStyles>
      <AppContainer>
        <TopHeader
          pageName="FAQ Settings / Add to FAQ"
          showTime={true}
          showAdminDropdown={true}
        />
        <AppFlexContainer>
          <LeftMenu />
          <RightContentBox>
            <h4 className="mb-3">FAQ 추가</h4>

            <div className="arm-box">
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>제목</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="제목은 최대 80 글자입니다"
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>답변</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="답변은 최대 240 글자입니다
                  "
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>링크</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="https://

                  "
                />
              </Form.Group>

              <div className="ap-btn-box mt-4">
                <Button variant="outline-danger">나가기</Button>
                <Button variant="success">저장</Button>
              </div>
            </div>
            <Footer />
          </RightContentBox>
        </AppFlexContainer>
      </AppContainer>
    </AddFAQStyles>
  );
};

export default AddFAQ;
