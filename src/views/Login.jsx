import React from "react";
import { FloatingLabel, Form, Button } from "react-bootstrap";
import styled from "styled-components";
import { AppContainer } from "../components/AppContainer";
// import Button from "../components/Button";
import ErrorMsg from "../components/ErrorP";
import TopHeader from "../components/Header";

// Styles
const LoginContainer = styled.div`
  width: 100%;
  height: calc(100vh - 4rem);
  display: flex;
  align-items: center;
  justify-content: center;
  & > div {
    width: 100%;
    height: 100%;
    max-width: 500px;
    padding: 0 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  & h2 {
    font-size: 2.5rem;
    color: var(--neutral-1000);
    margin: 0 0 1.5rem 0;
  }
  & .form-floating {
    width: 100%;
    margin: 0 0 1rem 0;
  }
  & button {
    width: 100%;
  }
  & .administrator-email {
    font-size: 1rem;
    color: var(--neutral-1000);
    margin: 2rem 0 0 0;
    & a {
      color: var(--neutral-1000);

      &:hover {
        color: #198754;
      }
    }
  }
`;

const Login = () => {
  return (
    <AppContainer>
      <TopHeader pageName="Login" />
      <LoginContainer>
        <div>
          <h2>OVILI Admin Login</h2>

          <FloatingLabel controlId="floatingInput1" label="Email address">
            <Form.Control type="email" placeholder="name@example.com" />
          </FloatingLabel>

          <FloatingLabel controlId="floatingInput2" label="Password">
            <Form.Control type="password" placeholder="abc123" />
          </FloatingLabel>

          <ErrorMsg ErrorText="ID is inactive. Please contact the administrator." />

          {/* <Button btnText="Login" /> */}
          <Button variant="success">Login</Button>

          <p className="administrator-email">
            Administrator ( <a href="#">name@example.com</a> )
          </p>
        </div>
      </LoginContainer>
    </AppContainer>
  );
};

export default Login;
