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

const RoomDetailsSettingsStyles = styled.div`
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
const RoomDetailsSettings = () => {
  return (
    <RoomDetailsSettingsStyles>
      <AppContainer>
        <TopHeader
          pageName="Room Details Settings"
          showTime={true}
          showAdminDropdown={true}
        />
        <AppFlexContainer>
          <LeftMenu />
          <RightContentBox>
            <h4>객실 정보 관리</h4>

            <div className="rm-top-btn">
              <Link to="/add-room-details">
                <Button variant="success">
                  <BsPlus />
                  추가
                </Button>
              </Link>
            </div>

            <Table striped bordered hover className="my-3">
              <thead>
                <tr>
                  <th>숙소명</th>
                  <th colSpan={2}>객실명</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>용평 리조트 타워콘도</td>
                  <td>오빌리 네스트 A01</td>
                  <td>삭제</td>
                </tr>

                <tr>
                  <td>용평 리조트 타워콘도</td>
                  <td>오빌리 네스트 A01</td>
                  <td>삭제</td>
                </tr>

                <tr>
                  <td>용평 리조트 타워콘도</td>
                  <td>오빌리 네스트 A01</td>
                  <td>삭제</td>
                </tr>

                <tr>
                  <td>용평 리조트 타워콘도</td>
                  <td>오빌리 네스트 A01</td>
                  <td>삭제</td>
                </tr>

                <tr>
                  <td>용평 리조트 타워콘도</td>
                  <td>오빌리 네스트 A01</td>
                  <td>삭제</td>
                </tr>

                <tr>
                  <td>용평 리조트 타워콘도</td>
                  <td>오빌리 네스트 A01</td>
                  <td>삭제</td>
                </tr>

                <tr>
                  <td>용평 리조트 타워콘도</td>
                  <td>오빌리 네스트 A01</td>
                  <td>삭제</td>
                </tr>

                <tr>
                  <td>용평 리조트 타워콘도</td>
                  <td>오빌리 네스트 A01</td>
                  <td>삭제</td>
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
    </RoomDetailsSettingsStyles>
  );
};

export default RoomDetailsSettings;
