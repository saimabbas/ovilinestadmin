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

const TermsOfUseSettingsStyles = styled.div`
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
const TermsOfUseSettings = () => {
  return (
    <TermsOfUseSettingsStyles>
      <AppContainer>
        <TopHeader
          pageName="Terms Of Use Settings"
          showTime={true}
          showAdminDropdown={true}
        />
        <AppFlexContainer>
          <LeftMenu />
          <RightContentBox>
            <h4>이용약관 관리</h4>

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

                <Link to="/add-to-terms-of-use">
                  <Button variant="success">
                    <BsPlus />
                    추가
                  </Button>
                </Link>
              </div>
            </div>
            <div className="tou-box my-5">
              <p>
                OOO NFT는 클레이튼 네트워크상에서 존재하는 디지털 아트 수집품에
                대한 프로젝트를 의미합니다. OOO NFT를 구매하거나 보유하는
                이용자들은 다음의 조건 하에 OOO NFT를 이용할 수 있으며, 아래의
                조건 하에 이용하는 것에 동의한 것으로 간주합니다. 정의 1. “OOO
                NFT”는 클레이튼 네트워크상에서 존재하는 디지털 아트
                수집품으로서, NFT(Non-Fungible Token)의 형태입니다. 2.
                “작품”이란 본 이용 조건에 따라 귀하가 보유하는 OOO NFT와 연계된
                예술, 그래픽, 이미지, 디자인 등을 의미합니다. 3. “NFT”란
                블록체인 네트워크 상에서 존재하는 대체 불가능한 토큰으로서, (i)
                이미지, 동영상 등의 작품에 대한 메타데이터 정보를 포함한 상태로
                발행되어, (ii) 해당 NFT 보유자에게 작품에 관한 특정 권리가
                부여되는 블록체인 기반의 디지털자산을 의미합니다. 4. “2차적
                저작물”이란 작품을 번역ㆍ편곡ㆍ변형ㆍ각색ㆍ영상제작 그 밖의
                방법으로 작성한 창작물을 의미합니다. 단, 작품의 단순 복제물이나
                실질적 개변이 없는 변형은 2차적 저작물에 해당하지 않습니다. 5.
                “프로젝트”란, 당사(OOO, 이하 같음)에서 진행하는 OOO NFT의 발행
                등과 관련하여 진행하는 공식 홈페이지 운영, OOO 로드맵 및
                스토리텔링, 부가 혜택 제공, OOO 커뮤니티(디스코드, 트위터 등을
                포함한 SNS 등을 의미한다) 운영 및 관리 등을 포함하여 OOO NFT와
                관련한 제반 서비스 제공 등을 의미한다. 보유권
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
    </TermsOfUseSettingsStyles>
  );
};

export default TermsOfUseSettings;
