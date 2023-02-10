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
  BsPlus,
  BsPencil,
  BsPencilFill,
} from "react-icons/bs";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";

const AddAdminIDStyles = styled.div`
  .pm-top-box {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .pm-top-box-left {
      width: max-content;
      display: flex;
      align-items: center;
      label {
        width: max-content;
      }
      .form-select {
        margin: 0 2.5rem 0 0;
      }
    }
  }

  .rate-con {
    width: 100%;
    padding: 1.5rem;
    border-radius: 1rem;
    background-color: #fff;
    .form-check {
      width: max-content;
    }
    & > .rate-con-grid {
      width: 100%;
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: auto;
      grid-gap: 2rem;
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
const AddAdminID = () => {
  return (
    <AddAdminIDStyles>
      <AppContainer>
        <TopHeader
          pageName="Add Admin ID"
          showTime={true}
          showAdminDropdown={true}
        />
        <AppFlexContainer>
          <LeftMenu />
          <RightContentBox>
            <h4>어드민 ID 추가</h4>
            <div className="rate-con mt-4">
              <div className="rate-con-grid">
                <Form.Group controlId="exampleForm.ControlInput1">
                  <Form.Label>ID</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="영문, 숫자 8~20 글자"
                  />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput1">
                  <Form.Label>비밀번호</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="영문, 숫자 8~20 글자"
                  />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput1">
                  <Form.Label>이름</Form.Label>
                  <Form.Control type="text" placeholder="어드민 사용자 이름" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput1">
                  <Form.Label>소속</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="법인이나 사업자 또는 소속 부서
"
                  />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput1">
                  <Form.Label>연락처</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="휴대폰 또는 유선번호

"
                  />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput1">
                  <Form.Label>이메일 주소</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="휴대폰 또는 유선번호

"
                  />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput1">
                  <Form.Label>어드민 권한</Form.Label>

                  <Form.Select aria-label="Default select example">
                    <option value="1">최고 어드민</option>
                    <option value="2">일반 어드민</option>
                    <option value="3">협력사 유저 </option>
                  </Form.Select>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput1">
                  <Form.Label>숙소조회 제한</Form.Label>

                  <Form.Select aria-label="Default select example">
                    <option value="1">모든숙소 조회가능</option>
                    <option value="2">타워콘도</option>
                    <option value="3">비체팰리스</option>
                    <option value="4">오빌리 네스트 A</option>
                    <option value="5">오빌리 네스트 B</option>
                    <option value="6">오빌리 네스트 C</option>
                    <option value="7">오빌리 네스트 D</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput1">
                  <Form.Label>관리자 메모</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="관리자만 볼 수 있습니다
"
                  />
                </Form.Group>
              </div>
              <Form.Check
                type={"checkbox"}
                label={"ID 활성화"}
                className="mt-3 mb-4"
              />
              <div className="ap-btn-box">
                <Button variant="outline-danger">취소</Button>
                <Button variant="success">저장</Button>
              </div>
            </div>
            <Footer />
          </RightContentBox>
        </AppFlexContainer>
      </AppContainer>
    </AddAdminIDStyles>
  );
};

export default AddAdminID;
