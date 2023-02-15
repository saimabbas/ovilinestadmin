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
const AddProductStyles = styled.div`
  .ap-box {
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

const AddProduct = () => {
  return (
    <AddProductStyles>
      <AppContainer>
        <TopHeader
          pageName="Product Management / Add Product"
          showTime={true}
          showAdminDropdown={true}
        />
        <AppFlexContainer>
          <LeftMenu />
          <RightContentBox>
            <h4 className="mb-3">상품 추가</h4>
            <Tabs
              justify
              defaultActiveKey="Basic"
              id="uncontrolled-tab-example"
              className="mb-3"
            >
              <Tab eventKey="Basic" title="STEP 1. 기본 설정">
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>상품명</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="상품명은 최대 30글자
                  "
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>객실 선택</Form.Label>
                  <Select
                    isMulti
                    className="basic-single"
                    classNamePrefix="select"
                    defaultValue={[colourOptions[1]]}
                    name="color"
                    options={colourOptions}
                  />
                </Form.Group>

                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>입실 기간 선택</Form.Label>
                  <InputGroup className="mb-3">
                    <Form.Select aria-label="Default select example">
                      <option value="1">2023년</option>
                      <option value="2">2023년</option>
                    </Form.Select>
                    <Form.Select aria-label="Default select example">
                      <option value="1">1월</option>
                      <option value="2">2월</option>{" "}
                      <option value="3">3월</option>{" "}
                      <option value="4">4월</option>{" "}
                      <option value="5">5월</option>{" "}
                      <option value="6">6월</option>{" "}
                      <option value="7">7월</option>{" "}
                      <option value="8">8월</option>{" "}
                      <option value="9">9월</option>{" "}
                    </Form.Select>
                  </InputGroup>
                </Form.Group>
              </Tab>
              <Tab eventKey="Package" title="STEP 2. 패키지 설정">
                <Form.Check
                  inline
                  label="체크박스를 선택하면 패키지 상품으로 설정할 수 있습니다."
                  name="group1"
                  type={"checkbox"}
                  className="my-3"
                />
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>패키지명</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="패키지명을 입력하세요"
                  />
                </Form.Group>

                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>패키지 입실 기간 설명</Form.Label>
                  <InputGroup className="mb-3">
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
                  </InputGroup>
                </Form.Group>

                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>패키지 구성 설명</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="예시) 객실 1박 + 조식 뷔페 2매"
                  />
                </Form.Group>

                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>
                    패키지 배너 이미지 ~ *300x400px - PNG, JPG*
                  </Form.Label>
                  <Form.Control type="file" />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>
                    패키지 상세정보 이미지 ~ *300x400px - PNG, JPG*
                  </Form.Label>
                  <Form.Control type="file" />
                </Form.Group>
              </Tab>
              <Tab eventKey="Rate" title=" STEP 3. 요금 설정">
                <div className="rate-con">
                  <div className="rate-con-left">
                    <Form.Check inline label="" name="group1" type={"radio"} />
                  </div>
                  <div className="rate-con-right">
                    <p>
                      [요금 설정 A] : 이용 요금을 수동으로 설정하는 상품입니다.
                    </p>

                    <Form.Group
                      className="mt-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>주중 요금</Form.Label>
                      <Form.Control type="text" placeholder="" />
                    </Form.Group>
                    <Form.Group
                      className="my-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>주말 요금</Form.Label>
                      <Form.Control type="text" placeholder="" />
                    </Form.Group>
                    <span>
                      * 상품 추가 완료 후, [상품 판매 관리] 화면에서 요금을
                      수정할 수 있습니다.
                    </span>
                  </div>
                </div>
                <div className="rate-con mt-3">
                  <div className="rate-con-left">
                    <Form.Check inline label="" name="group1" type={"radio"} />
                  </div>
                  <div className="rate-con-right">
                    <p>
                      [요금 설정 B] : 용평 시스템의 요금 코드를 사용하는
                      상품입니다. (용평 시스템과 연계된 요금 코드가 있어야
                      합니다)
                    </p>

                    <Form.Group
                      className="mt-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>주중 요금</Form.Label>
                      <Form.Control type="text" placeholder="" />
                    </Form.Group>
                    <Form.Group
                      className="my-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>주말 요금</Form.Label>
                      <Form.Control type="text" placeholder="" />
                    </Form.Group>
                    <span>
                      * 상품 추가 완료 후, 요금을 수정할 수 없습니다. 이용
                      요금은 용평 시스템의 요금 정보를 참조합니다.
                    </span>
                  </div>
                </div>
              </Tab>
              <Tab eventKey="Homepage" title="STEP 4. 홈페이지 업데이트">
                <div className="ap-box">
                  <p>
                    상품 추가 완료 후, 요금을 수정할 수 없습니다. 이용 요금은
                    용평 시스템의 요금 정보를 참조합니다. 업데이트 후 STEP 1.
                    기본 설정은 수정이 불가능 합니다. (기존 상품을 삭제하고 새로
                    등록해야 합니다) 업데이트 후 STEP 2. 패키지 설정은 수정할 수
                    있습니다. 입력한 내용을 다시 확인하려면 상단의 STEP 버튼으로
                    이동할 수 있습니다.
                  </p>
                  <Form.Check
                    inline
                    label="상품 정보 입력을 모두 완료 했습니다."
                    name="group1"
                    type={"checkbox"}
                  />
                </div>
              </Tab>
            </Tabs>
            {/* <div className="ap-box">
              <h5 className="mb-4">
                <BsBarChart /> Product Preferences
              </h5>
              <div className="ap-input-box my-3">
                <h6>Product type name</h6>
                <Form.Control
                  type="text"
                  placeholder="Name to identify products inside the admin"
                />
              </div>
              <div className="ap-input-box mb-3">
                <h6>admission period</h6>
                <Form.Control
                  placeholder="Select Month and Year"
                  aria-label="Select Month and Year"
                  aria-describedby="basic-addon2"
                  type="month"
                />
              </div>
              <div className="ap-input-box">
                <h6>Select room type</h6>
                <Form.Select aria-label="Default select example">
                  <option>Select room type</option>
                  <option value="1">Tower Suite</option>
                  <option value="2">Suite A Suite</option>
                  <option value="3">B</option>
                  <option value="4">Nest A01 Nest</option>
                  <option value="5">A02 Nest B01</option>
                  <option value="6">Nest B02</option>
                </Form.Select>
              </div>
            </div>
            <div className="ap-box my-4">
              <h5 className="mb-4">
                <BsGear /> Package Product Setting
              </h5>
              <div className="ap-input-box mt-3">
                <h6>with or without package</h6>
                <div className="ap-switch">
                  <span>Room Only</span>
                  <Form.Check type="switch" id="custom-switch" label="" />
                  <span>Package</span>
                </div>
              </div>
            </div>
            <div className="ap-box mb-4">
              <h5 className="mb-4">
                <BsInfoCircle /> Package Basic Information
              </h5>
              <div className="ap-input-box mt-3">
                <h6>banner image </h6>
                <Form.Control type="file" />
              </div>
              <div className="ap-input-box my-3">
                <h6>Product name</h6>
                <Form.Control
                  type="text"
                  placeholder="Please enter the package name."
                />
              </div>
              <div className="ap-input-box">
                <h6>package entry period</h6>
                <InputGroup className="mb-3">
                  <Form.Control
                    placeholder="Select Date"
                    aria-label="Select Date"
                    type="date"
                  />
                  <Form.Control
                    placeholder="Select Date"
                    aria-label="Select Date"
                    type="date"
                  />
                </InputGroup>
              </div>
              <div className="ap-input-box mt-3">
                <h6>Composition of package products</h6>
                <Form.Control
                  type="text"
                  placeholder="(Example) 1 night room + 2 buffet breakfasts"
                />
              </div>
            </div>
            <div className="ap-box">
              <h5 className="mb-4">
                <BsFileText /> Package Details
              </h5>
              <div className="ap-input-box">
                <h6>Details image </h6>
                <Form.Control type="file" />
              </div>
            </div> */}
            <div className="ap-btn-box mt-4">
              <Button variant="outline-danger">나가기</Button>
              <Button variant="success">저장</Button>
            </div>
            <Footer />
          </RightContentBox>
        </AppFlexContainer>
      </AppContainer>
    </AddProductStyles>
  );
};

export default AddProduct;
