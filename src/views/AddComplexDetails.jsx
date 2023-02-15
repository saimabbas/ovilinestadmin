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
const AddComplexDetailsStyles = styled.div`
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

const AddComplexDetails = () => {
  return (
    <AddComplexDetailsStyles>
      <AppContainer>
        <TopHeader
          pageName="Add Complex Details"
          showTime={true}
          showAdminDropdown={true}
        />
        <AppFlexContainer>
          <LeftMenu />
          <RightContentBox>
            <h4 className="mb-3">숙소 정보 추가</h4>
            <Tabs
              justify
              defaultActiveKey="Basic"
              id="uncontrolled-tab-example"
              className="mb-3"
            >
              <Tab
                eventKey="Basic"
                title="STEP 1. CI 정보입력
"
              >
                <div className="ap-box">
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>복사 등록하기</Form.Label>
                    <Form.Select aria-label="Default select example">
                      <option value="1">
                        강원도 평창, 용평리조트 타워콘도
                      </option>
                      <option value="2">충남 보령, 비체팰리스</option>
                      <option value="3">강원도 고성, 파인리즈리조트</option>
                      <option value="4">전남 여수, 디오션 리조트</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>지역</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="(예시) 강원도 평창"
                    />
                  </Form.Group>

                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>숙소명</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="(예시) 용평리조트 타워콘도
"
                    />
                  </Form.Group>

                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>소개글</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="(예시) 스키장을 발아래 둔, 높은 만큼 멋진 뷰"
                    />
                  </Form.Group>

                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>
                      숙소 CI (기본 이미지) ~ *350x65px - PNG*
                    </Form.Label>
                    <Form.Control type="file" />
                  </Form.Group>

                  <Form.Group
                    className="mb-5"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>
                      숙소 CI (컬러 강조) ~ *350x65px - PNG*
                    </Form.Label>
                    <Form.Control type="file" />
                  </Form.Group>

                  <div className="ap-box">
                    <span>
                      용평 시스템의 숙소 코드를 입력하세요. (용평 시스템과
                      연계된 숙소 코드가 있어야 합니다)
                    </span>

                    <Form.Group
                      className="my-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>숙소코드</Form.Label>
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
                      * 숙소코드는 숙소 정보 추가 후, 수정할 수 없습니다. 유효성
                      검사를 눌러주세요.
                    </span>
                  </div>
                </div>
              </Tab>
              <Tab
                eventKey="Package"
                title="STEP 2. 상세 정보입력
"
              >
                <div className="ap-box">
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>복사 등록하기</Form.Label>
                    <Form.Select aria-label="Default select example">
                      <option value="1">
                        강원도 평창, 용평리조트 타워콘도
                      </option>
                      <option value="2">충남 보령, 비체팰리스</option>
                      <option value="3">강원도 고성, 파인리즈리조트</option>
                      <option value="4">전남 여수, 디오션 리조트</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>소개글 제목</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="(예시) 최고층에서 즐기는 리조트의 사계
                      "
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>소개글</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="소개글은 최대 300 글자입니다"
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>객실수</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="(예시) 2개(1~2개 추가 예정)"
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>타입(정원)</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="(예시) 스위트 (4명)
                      "
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>위치</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="(예시) 강원도 평창군 대관령면 "
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>홈페이지 URL</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="(예시) www.yongpyong.co.kr"
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>객실정보 URL (상세보기 링크)</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="(예시) https://www.yongpyong.co.kr/kor/room/condo/tower.do
                      "
                    />
                  </Form.Group>

                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>
                      이미지 업로드 ~ *760x304px - PNG, JPG*
                    </Form.Label>
                    <Form.Control type="file" />
                  </Form.Group>
                </div>
              </Tab>
              <Tab
                eventKey="Rate"
                title="STEP 3. 예약 페이지 정보입력
"
              >
                <div className="ap-box">
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>복사 등록하기</Form.Label>
                    <Form.Select aria-label="Default select example">
                      <option value="1">
                        강원도 평창, 용평리조트 타워콘도
                      </option>
                      <option value="2">충남 보령, 비체팰리스</option>
                      <option value="3">강원도 고성, 파인리즈리조트</option>
                      <option value="4">전남 여수, 디오션 리조트</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>예약페이지 소개글</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="예약페이지 숙소 소개글은 최대 300 글자입니다

                      "
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>
                      예약페이지 숙소 섬네일 ~ *250x120px - PNG, JPG*
                    </Form.Label>
                    <Form.Control type="file" />
                  </Form.Group>
                </div>
              </Tab>
              <Tab
                eventKey="Homepage"
                title="STEP 4. 홈페이지 업데이트
"
              >
                <div className="ap-box">
                  <p>
                    숙소 정보를 홈페이지에 업데이트 하시겠습니까? 입력한 내용을
                    다시 확인하려면 상단의 STEP 버튼으로 이동할 수 있습니다.
                    홈페이지 업데이트 후에도 숙소 정보는 [숙소 정보 관리]
                    메뉴에서 편집할 수 있습니다. 신규 숙소의 객실 정보는 [객실
                    정보 관리] 메뉴에서 추가할 수 있습니다.
                  </p>
                  <Form.Check
                    inline
                    label="숙소 정보 입력을 모두 완료 했습니다.
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
    </AddComplexDetailsStyles>
  );
};

export default AddComplexDetails;
