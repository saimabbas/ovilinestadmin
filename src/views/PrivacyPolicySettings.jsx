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
import { Link } from "react-router-dom";

const PrivacyPolicySettingsStyles = styled.div`
  .tou-box {
    width: 100%;
    background-color: #f7f8f9;
    padding: 1.15rem 1.5rem;
    border-radius: 0.75rem;
  }
  .rm-top-btn {
    width: 100%;
    display: flex;
    justify-content: space-between;
    & select {
      width: min-content;
    }
    & div {
      display: flex;
      & button {
        margin: 0 0 0 1.5rem;
      }
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
const PrivacyPolicySettings = () => {
  return (
    <PrivacyPolicySettingsStyles>
      <AppContainer>
        <TopHeader
          pageName="Privacy Policy Settings"
          showTime={true}
          showAdminDropdown={true}
        />
        <AppFlexContainer>
          <LeftMenu />
          <RightContentBox>
            <h4>개인정보방침 관리</h4>

            <div className="rm-top-btn">
              <Form.Select aria-label="Default select example">
                <option value="1"> 2023년 2월 1일 개정 </option>
                <option value="2"> 2023년 1월 1일 개정 </option>
              </Form.Select>
              <div>
                <Button variant="outline-secondary">
                  <BsPencilFill />
                  수정
                </Button>
                <Button variant="outline-danger">
                  <BsTrashFill />
                  삭제
                </Button>

                <Link to="/add-privacy-policy">
                  <Button variant="success">
                    <BsPlus />
                    추가
                  </Button>
                </Link>
              </div>
            </div>
            <div className="tou-box my-5">
              <p>
                (주)회사이름(이하 "회사"라 함)는 고객의 개인정보보호를 중요하게
                여기며 고객의 개인정보를 안전하게 보호하기 위하여 항상 최선의
                노력을 다하고 있습니다. 회사는 개인정보 보호법 제30조에 따라
                정보주체의 개인정보를 보호하고 이와 관련한 고충을 신속하고
                원활하게 처리할 수 있도록 하기 위하여 다음과 같이 개인정보
                처리지침을 수립ㆍ공개합니다. 제 1조(개인정보의 처리목적) 회사는
                다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는
                개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 이용
                목적이 변경되는 경우에는 개인정보 보호법 제18조에 따라 별도의
                동의를 받는 등 필요한 조치를 이행할 예정입니다. 1. 회원관리 -
                회원제 서비스 이용에 따른 본인확인, 개인식별, 불량회원의
                부정이용방지와 비인가 사용방지, 만14세 미만 아동 개인정보 수집
                시 법정 대리인 동의 여부 확인, 분쟁 조정을 위한 기록보존,
                불만처리 등 민원처리, 고지사항 전달
                (주)에이치제이매그놀리아용평호텔앤리조트(이하 "회사"라 함)는
                고객의 개인정보보호를 중요하게 여기며 고객의 개인정보를 안전하게
                보호하기 위하여 항상 최선의 노력을 다하고 있습니다. 회사는
                개인정보 보호법 제30조에 따라 정보주체의 개인정보를 보호하고
                이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 하기
                위하여 다음과 같이 개인정보 처리지침을 수립ㆍ공개합니다. 2.
                서비스제공에 관한 계약의 체결 및 이행 - 온라인 서비스(실시간
                예약 및 조회, 할인쿠폰 등) 및 유용한 컨텐츠 제공, 종류별
                맞춤서비스 제공, 상품구매 및 이용료 결제, 배송 3. 신규 서비스
                개발 및 마케팅/광고 활용 - 신규 서비스 개발 및 맞춤 서비스 제공,
                통계학적 특성에 따른 서비스 제공 및 광고 게재, 서비스의 유효성
                확인, 이벤트 및 광고성 정보 제공 및 참여기회 제공, 접속빈도
                파악, 회원의 서비스 이용에 대한 통계
              </p>
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
    </PrivacyPolicySettingsStyles>
  );
};

export default PrivacyPolicySettings;
