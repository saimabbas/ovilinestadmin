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
const AddRoadmapStyles = styled.div`
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

const AddRoadmap = () => {
  return (
    <AddRoadmapStyles>
      <AppContainer>
        <TopHeader
          pageName="Roadmap Settings / Add to Roadmap"
          showTime={true}
          showAdminDropdown={true}
        />
        <AppFlexContainer>
          <LeftMenu />
          <RightContentBox>
            <h4 className="mb-3">로드맵 추가</h4>

            <div className="arm-box">
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>페이즈</Form.Label>
                <Form.Select aria-label="Default select example">
                  <option value="1">Opening </option>
                  <option value="2">Venture</option>
                  <option value="3">Invitation</option>
                  <option value="4">Love</option>
                  <option value="5">Intro</option>
                </Form.Select>
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>순번</Form.Label>
                <Form.Select aria-label="Default select example">
                  <option value="1">1 </option>
                  <option value="2">2 </option>
                  <option value="3">3 </option>
                  <option value="4">4 </option>
                  <option value="5">5 </option>
                </Form.Select>
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>내용</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="내용은 최대 80 글자입니다"
                />
              </Form.Group>
              <div className="ap-input-box mt-3">
                <h6>로드맵 달성</h6>
                <div className="ap-switch">
                  <span>UPCOMING</span>
                  <Form.Check type="switch" id="custom-switch" label="" />
                  <span>COMPLETE</span>
                </div>
              </div>
              <div className="ap-btn-box mt-4">
                <Button variant="outline-danger">나가기</Button>
                <Button variant="success">저장</Button>
              </div>
            </div>
            <Footer />
          </RightContentBox>
        </AppFlexContainer>
      </AppContainer>
    </AddRoadmapStyles>
  );
};

export default AddRoadmap;
