import styled from "styled-components";
import React from "react";
import { format } from "timeago.js";
import { authService } from "../../store/AuthService";
import { observer } from "mobx-react-lite";

interface IPropsStyle {
  isMe: boolean;
}

const MessageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${({ isMe }: IPropsStyle) =>
    isMe ? "flex-end" : "flex-start"};
  margin-bottom: 30px;
`;
const MessageColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const MessageText = styled.div`
  max-width: 355px;
  background: ${({ isMe }: IPropsStyle) => (isMe ? "#ffffff" : "#3674FF")};
  box-shadow: 0px 5px 5px
    rgba(
      ${({ isMe }: IPropsStyle) => (isMe ? "0, 0, 0," : "54, 116, 255,")}
        0.196733
    );
  font-size: 14px;
  line-height: 20px;
  border-radius: 12px 12px
    ${({ isMe }: IPropsStyle) => (isMe ? "0px 12px" : "12px 0px")}; // изменение углов
  color: ${({ isMe }: IPropsStyle) => (isMe ? "#202020" : "#ffffff")};
  padding: 10px 15px 13px 19px;
`;

const MessageAvatar = styled.div`
  height: 30px;
  width: 30px;
  border-radius: 50%;
  background: beige;
  margin: 13px 13px 24px 13px;
`;

const MessageTimer = styled.div`
  font-size: 12px;
  line-height: 14px;
  color: #bbbbbb;
  margin-top: 10px;
`;

const MessageFlexEnd = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: ${({ isMe }: IPropsStyle) => (isMe ? "row-reverse" : "row")};
`;

interface IProps {
  id: string;
  text: string;
}

const MessageItem: React.FC<IProps> = ({ id, text }) => {
  const isMe = authService.id === id;
  return (
    <MessageContainer isMe={isMe}>
      <MessageFlexEnd isMe={isMe}>
        <MessageAvatar />
        <MessageColumn>
          <MessageText isMe={isMe}>{text}</MessageText>
          <MessageTimer>{format(new Date())}</MessageTimer>
        </MessageColumn>
      </MessageFlexEnd>
    </MessageContainer>
  );
};

export default observer(MessageItem);
