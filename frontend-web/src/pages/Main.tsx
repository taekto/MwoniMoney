import React from "react";
import ChildrenPage from "./ChildrenPage";
import ParentsPage from "./ParentsPage";
import { Navigate } from "react-router-dom";
import { userDataState } from "../states/UserInfoState";
import { useRecoilState } from "recoil";

function Main(): JSX.Element {
  const [userData, setUserData] = useRecoilState(userDataState);

  const role = userData.memberRole;

  switch (role) {
    case "PARENT":
      return <ParentsPage />;
    case "CHILD":
      return <ChildrenPage />;
    case "GUEST":
      // GUEST일 경우 Navigate 컴포넌트로 리디렉션
      return <Navigate to="/RegistRole" />;
    default:
      // 다른 역할에 대한 처리 (예: 기본 페이지로 리디렉션)
      return <Navigate to="/DefaultPage" />;
  }
}

export default Main;
