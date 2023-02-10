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
} from "react-icons/bs";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";

const LMSSeetingsStyles = styled.div`
  .pm-top-box {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .input-group {
      max-width: 500px;
    }
    & > select {
      max-width: 250px;
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
  .nft-pagination {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    & ul {
      margin: 0;
    }
  }
  .lms-grid {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    grid-gap: 5rem;
    margin: 2.5rem 0;
    textarea {
      min-height: 15rem;
    }
    .lms-grid-left {
      width: 100%;
      padding: 1rem;
      border-radius: 1rem;
      background-color: #f7f8f9;
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
const LMSSeetings = () => {
  return (
    <LMSSeetingsStyles>
      <AppContainer>
        <TopHeader
          pageName="RPM / LMS Seetings"
          showTime={true}
          showAdminDropdown={true}
        />
        <AppFlexContainer>
          <LeftMenu />
          <RightContentBox>
            <h4>LMS 설정</h4>
            <div className="pm-top-box">
              <InputGroup>
                <Form.Select aria-label="Default select example">
                  <option value="1"> 유틸리티 클레임 </option>
                  <option value="1"> 유틸리티 클레임 </option>
                  <option value="1"> 유틸리티 클레임 </option>
                </Form.Select>
                <Button variant="outline-success" id="button-addon1">
                  조회
                </Button>
              </InputGroup>
            </div>
            <div className="lms-grid">
              <div className="lms-grid-left">
                <Form.Control
                  placeholder="제목입력 (최대 30 byte)"
                  aria-label="제목입력 (최대 30 byte)"
                  aria-describedby="basic-addon2"
                  className="mb-3"
                />
                <Form.Control
                  as="textarea"
                  aria-label="With textarea"
                  placeholder="메시지 91 ~ 1000 byte 입력가능"
                  className="mb-3"
                />
                <p>0 / 1000 byte</p>

                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>발신번호:</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="숫자만 입력하세요
"
                  />
                </Form.Group>
              </div>
              <div className="lms-grid-right">
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>파라미터</th>
                      <th>입력 방식</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>NFT 번호</td>
                      <td>[*nftid*]</td>
                    </tr>
                    <tr>
                      <td>NFT 번호</td>
                      <td>[*nftid*]</td>
                    </tr>
                    <tr>
                      <td>NFT 번호</td>
                      <td>[*nftid*]</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </div>

            <div className="ap-btn-box">
              <Button variant="outline-danger">수정</Button>
              <Button variant="success" disabled>
                취소
              </Button>
              <Button variant="success" disabled>
                저장
              </Button>
            </div>
            <Footer />
          </RightContentBox>
        </AppFlexContainer>
      </AppContainer>
    </LMSSeetingsStyles>
  );
};

export default LMSSeetings;
