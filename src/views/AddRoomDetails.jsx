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
const AddRoomDetailsStyles = styled.div`
  .ap-box {
    width: 100%;
    background-color: #f7f8f9;
    padding: 1.15rem 1.5rem;
    border-radius: 0.75rem;
    & span {
      font-size: 0.85rem;
      display: block;
    }
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
  .rate-con {
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 1.5rem;
    border-radius: 1rem;
    background-color: #fff;
  }
  .rate-con-right {
    width: 100%;
    span {
      font-size: 0.9rem;
    }
  }
`;

const AddRoomDetails = () => {
  return (
    <AddRoomDetailsStyles>
      <AppContainer>
        <TopHeader
          pageName="Add Room Details"
          showTime={true}
          showAdminDropdown={true}
        />
        <AppFlexContainer>
          <LeftMenu />
          <RightContentBox>
            <h4 className="mb-3">객실 정보 추가</h4>
            <Tabs
              justify
              defaultActiveKey="Basic"
              id="uncontrolled-tab-example"
              className="mb-3"
            >
              <Tab
                eventKey="Basic"
                title="STEP 1. 기본정보

"
              >
                <div className="ap-box">
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>숙소</Form.Label>
                    <Form.Control type="text" placeholder="숙소를 선택하세요" />
                  </Form.Group>

                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>객실명</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="객실 이름은 최대 20글자 입니다

"
                    />
                  </Form.Group>

                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>객실수</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="객실의 기본 재고 수량을 입력하세요
                      "
                    />
                  </Form.Group>

                  <div className="ap-box">
                    <span>
                      용평 시스템의 룸타입 코드를 입력하세요. (용평 시스템과
                      연계된 룸타입 코드가 있어야 합니다)
                    </span>

                    <Form.Group
                      className="my-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>룸타입코드</Form.Label>
                      <Form.Control type="text" placeholder="" />
                    </Form.Group>

                    <InputGroup
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Button variant="secondary">유효성검사</Button>
                      <Form.Control type="text" placeholder="" />
                    </InputGroup>

                    <span>
                      * ※ 룸타입 코드는 객실 정보 추가 후, 수정할 수 없습니다.
                      유효성 검사를 눌러주세요.
                    </span>
                  </div>
                </div>
              </Tab>
              <Tab
                eventKey="Homepage"
                title="STEP 2. 홈페이지 업데이트

"
              >
                <div className="ap-box">
                  <p>
                    객실 정보를 시스템에 업데이트 하시겠습니까? 입력한 내용을
                    다시 확인하려면 상단의 STEP 버튼으로 이동할 수 있습니다.
                    업데이트 후에는 [객실 수] 만 수정할 수 있습니다.
                  </p>
                  <Form.Check
                    inline
                    label="객실 정보 입력을 모두 완료 했습니다.

                  "
                    name="group1"
                    type={"checkbox"}
                  />
                </div>
              </Tab>
            </Tabs>
            <div className="ap-btn-box mt-4">
              <Button variant="outline-danger">나가기</Button>
              <Button variant="success">저장</Button>
            </div>
            <Footer />
          </RightContentBox>
        </AppFlexContainer>
      </AppContainer>
    </AddRoomDetailsStyles>
  );
};

export default AddRoomDetails;
