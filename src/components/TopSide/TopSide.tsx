import styled from "styled-components";
import settings from "../../static/img/settings.svg";
import {
  DialogSearchCountUsers,
  DialogSearchName,
} from "../Dialogs/DialogItem";
import React from "react";
import { observer } from "mobx-react-lite";
import { dialogsService } from "../../store/DialogsService";

const TopSideWrapper = styled.div`
  width: 100%;
  height: 7%;
  display: flex;
  border-bottom: 1px solid #dddddd;
`;
export const ImgBlock = styled.img`
  display: block;
  width: 32px;
  height: 32px;
`;
export const ImgBlockPointer = styled(ImgBlock)`
  cursor: pointer;
  transition: 0.1s;
  &:hover {
    background: #f3f7ff;
  }
`;

const DialogInfoContainer = styled.div`
  padding: 18px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DialogInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const TopSide = observer(() => {
  return (
    <TopSideWrapper>
      {dialogsService.currentDialog && (
        <DialogInfoContainer>
          <div />
          <DialogInfo>
            <DialogSearchName>
              {dialogsService.currentDialog?.name}
            </DialogSearchName>
            <DialogSearchCountUsers>
              {dialogsService.currentDialog?.users.length} Участников
            </DialogSearchCountUsers>
          </DialogInfo>
          <ImgBlockPointer src={settings} alt="settings" />
        </DialogInfoContainer>
      )}
    </TopSideWrapper>
  );
});
