import React from "react";
import { Accordion } from "react-bootstrap";
import styled from "styled-components";
import { MdExpandMore, MdOutlineNorthEast } from "react-icons/md";
import { Link } from "react-router-dom";

const LeftMenuStyles = styled.div`
  min-width: 275px;
  max-width: 275px;
  position: sticky;
  top: 0;
  height: calc(100vh - 3.5rem);
  overflow-x: hidden;
  overflow-y: auto;
  background-color: var(--neutral-1000);
  border-right: 1px solid var(--neutral-700);
  padding: 2em 1.25em;
  & > *:not(:last-child) {
    margin: 0 0 2em 0;
    display: flex;
  }
  & .accordion-button,
  & .accordion-item {
    padding: 0;
    background-color: transparent;
    border: 0;
    outline: 0;
    width: 100%;
    border-radius: 0 !important;
    box-shadow: unset !important;
  }
  & .accordion-button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: var(--neutral-100);
    font-size: 1.1rem;
    border: 0;
    font-weight: 500;
    svg {
      color: var(--neutral-200);
      font-size: 1.35rem;
      margin: 0 0 0 0.5rem;
      transform: rotate(180deg);
      transition: 0.35s;
    }
    &::after {
      display: none;
    }
    &:focus,
    &:active {
      box-shadow: unset;
      border: 0;
      outline: 0;
      box-shadow: unset !important;
    }
  }
  & .accordion-button.collapsed {
    font-weight: 400;
    & > svg {
      transform: rotate(0);
    }
  }
  & > a {
    color: var(--neutral-200);
    font-size: 1.1rem;
    text-decoration: none;
    display: flex;
    align-items: center;
    & svg {
      font-size: 1rem;
      margin: 0 0 0 0.35rem;
      transition: 0.35s;
    }
    &:hover svg {
      transform: translate(0.15rem, -0.15rem);
    }
  }
  & .accordion {
    border-radius: 0;
    width: 100%;
  }
  & .accordion-body {
    padding: 1em 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    border: 0;
    & > a {
      color: var(--neutral-300);
      font-size: 1rem;
      padding: 0 0 0.5em 1em;
      text-decoration: none;
      text-transform: capitalize;
      transition: 0.35s;
      &:hover {
        color: var(--neutral-100);
        transform: translate(0.35rem, 0);
      }
    }
    & > a:last-child {
      padding: 0 0 0 1em;
    }
  }
`;
const LeftMenu = () => {
  return (
    <LeftMenuStyles>
      <Link to="/">
        Dashboard <MdOutlineNorthEast />
      </Link>
      <Accordion>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            Front Page Management <MdExpandMore />{" "}
          </Accordion.Header>
          <Accordion.Body>
            <a href="#">Roadmap management</a>
            <a href="#">FAQ management</a>
            <a href="#">Terms of service</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Accommodation information management</a>
            <a href="#">Room information management</a>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <Accordion>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            예약 페이지 관리 <MdExpandMore />
          </Accordion.Header>
          <Accordion.Body>
            <Link to="/product-management/product-settings">상품 관리</Link>
            <Link to="/product-management/sales-settings">상품 판매 관리</Link>
            <Link to="/product-management/reservation-inquiry">예약 조회</Link>
            <Link to="/product-management/lucky-draw">추첨 조회</Link>
            <Link to="/product-management/performance-data-inquiry">
              실적 조회
            </Link>
            <Link to="/product-management/lms-settings">LMS 설정</Link>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <Accordion>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            NFT Lookup <MdExpandMore />
          </Accordion.Header>
          <Accordion.Body>
            <Link to="/nft-list">NFT list</Link>
            <Link to="/nft-transfer-inquiry">NFT Transfer inquiry</Link>
            <Link to="/claim-information-inquiry">
              Claim information inquiry
            </Link>
            <Link to="/query-claim-statistics">Query claims statistics</Link>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <Link to="/admin-id-management">
        어드민 ID 관리 <MdOutlineNorthEast />
      </Link>
    </LeftMenuStyles>
  );
};

export default LeftMenu;
