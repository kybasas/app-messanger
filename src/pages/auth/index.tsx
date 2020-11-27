import React from "react";
import styled from "styled-components";
import Link, { Route, Switch } from "react-router-dom";
import { Login } from "./login/Login";
import { Register } from "./register/Register";

interface IProps {}

export const AuthWrap = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -35%);
`;

export const AuthContainer = styled.div`
  text-align: center;
  width: 400px;
  padding: 45px;
  background: #ffffff;
  box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.04204);
  border-radius: 3px;
`;

export const AuthInput = styled.input`
  display: block;
  border: 1px solid #dddddd;

  box-sizing: border-box;
  border-radius: 4px;
  outline: none;
  width: 315px;
  height: 30px;
  padding: 35px;
  margin: 0 auto;
  margin-top: 25px;

  &::placeholder {
    color: #b4b4b4;
    font-size: 16px;
  }
`;

export const AuthInputValidate = styled(AuthInput)`
  border: 1px solid
    ${({ validate }: { validate?: boolean }) =>
      validate ? "#F44336" : "#dddddd"};
`;

export const AuthSubmitButton = styled.button`
  background: #4ca5ff;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  font-size: 18px;
  margin: 0 auto;
  margin-top: 35px;

  border-radius: 4px;
  width: 315px;
  height: 30px;
  padding: 35px;
  border: none;
  cursor: pointer;
  text-transform: uppercase;
`;

export const AuthLink = styled.span`
  text-decoration: none;
  color: #adadad;
  font-size: 16px;
  display: block;
  margin: 0 auto;
  margin-top: 15px;
`;

export const ErrorText = styled.span`
  line-height: 2.5;
  color: #f44336;
  transition: 1s;
`;

export const Auth: React.FC<IProps> = () => {
  return (
    <div>
      <Route path="/auth/login">
        <Login />
      </Route>
      <Route path="/auth/register">
        <Register />
      </Route>
    </div>
  );
};