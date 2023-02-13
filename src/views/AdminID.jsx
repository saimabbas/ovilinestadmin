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

const AdminIDStyles = styled.div`
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
  .ps-table td .del-btn {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    & svg {
      font-size: 1.1rem;
      margin: 0 0 0 0.35rem;
    }
  }
`;
const AdminID = () => {
  return (
    <AdminIDStyles>
      <AppContainer>
        <TopHeader
          pageName="Admin ID Management"
          showTime={true}
          showAdminDropdown={true}
        />
        <AppFlexContainer>
          <LeftMenu />
          <RightContentBox>
            <h4>어드민 ID 관리</h4>
            <div className="pm-top-box">
              <div className="pm-top-box-left">
                <Form.Select aria-label="전체">
                  <option value="1">전체</option>
                  <option value="2">최고 어드민</option>
                  <option value="3">일반 어드민</option>
                  <option value="4">협력사 유저</option>
                </Form.Select>

                <Form.Check type={"checkbox"} label={"비활성 ID 포함"} />
              </div>
              <Link to="/add-admin-id">
                <Button variant="success">
                  <BsPlus /> ID 추가
                </Button>
              </Link>
            </div>

            <div className="ps-table">
              <Table striped bordered hover className="my-5">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>이름</th>
                    <th>소속</th>
                    <th>연락처</th>
                    <th>이메일</th>
                    <th>어드민 권한</th>
                    <th colSpan={2}>ID 활성화</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>admin001</td>
                    <td>관리자A</td>
                    <td>용평리조트</td>
                    <td>010 1234 5678</td>
                    <td>admin001@mail.com</td>
                    <td>최고 어드민</td>
                    <td>활성화</td>
                    <td>
                      {" "}
                      <BsPencilFill /> 수정
                    </td>
                  </tr>
                  <tr>
                    <td>admin001</td>
                    <td>관리자A</td>
                    <td>용평리조트</td>
                    <td>010 1234 5678</td>
                    <td>admin001@mail.com</td>
                    <td>최고 어드민</td>
                    <td>활성화</td>
                    <td>
                      {" "}
                      <BsPencilFill /> 수정
                    </td>
                  </tr>
                  <tr>
                    <td>admin001</td>
                    <td>관리자A</td>
                    <td>용평리조트</td>
                    <td>010 1234 5678</td>
                    <td>admin001@mail.com</td>
                    <td>최고 어드민</td>
                    <td>활성화</td>
                    <td>
                      {" "}
                      <BsPencilFill /> 수정
                    </td>
                  </tr>
                  <tr>
                    <td>admin001</td>
                    <td>관리자A</td>
                    <td>용평리조트</td>
                    <td>010 1234 5678</td>
                    <td>admin001@mail.com</td>
                    <td>최고 어드민</td>
                    <td>활성화</td>
                    <td>
                      {" "}
                      <BsPencilFill /> 수정
                    </td>
                  </tr>
                  <tr>
                    <td>admin001</td>
                    <td>관리자A</td>
                    <td>용평리조트</td>
                    <td>010 1234 5678</td>
                    <td>admin001@mail.com</td>
                    <td>최고 어드민</td>
                    <td>활성화</td>
                    <td>
                      {" "}
                      <BsPencilFill /> 수정
                    </td>
                  </tr>
                  <tr>
                    <td>admin001</td>
                    <td>관리자A</td>
                    <td>용평리조트</td>
                    <td>010 1234 5678</td>
                    <td>admin001@mail.com</td>
                    <td>최고 어드민</td>
                    <td>활성화</td>
                    <td>
                      {" "}
                      <BsPencilFill /> 수정
                    </td>
                  </tr>
                  <tr>
                    <td>admin001</td>
                    <td>관리자A</td>
                    <td>용평리조트</td>
                    <td>010 1234 5678</td>
                    <td>admin001@mail.com</td>
                    <td>최고 어드민</td>
                    <td>활성화</td>
                    <td>
                      {" "}
                      <BsPencilFill /> 수정
                    </td>
                  </tr>
                  <tr>
                    <td>admin001</td>
                    <td>관리자A</td>
                    <td>용평리조트</td>
                    <td>010 1234 5678</td>
                    <td>admin001@mail.com</td>
                    <td>최고 어드민</td>
                    <td>활성화</td>
                    <td>
                      {" "}
                      <BsPencilFill /> 수정
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
            <Footer />
          </RightContentBox>
        </AppFlexContainer>
      </AppContainer>
    </AdminIDStyles>
  );
};

export default AdminID;
