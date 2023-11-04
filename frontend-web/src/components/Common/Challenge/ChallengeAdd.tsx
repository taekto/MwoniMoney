import React from "react";
import AddChildImg from "../../../assests/image/AddBox.png";
import CreateChallenge from "../../../modal/Challenge/ChallengeCreate";
import { EmogiBox } from "../History";
import { Container } from "../About/AboutContainer";
import ModalChildrenChallenge from "../../../modal/Challenge/ModalChildrenChallenge";
import ModalParentChallenge from "../../../modal/Challenge/ModalParentChallenge";

import { userDataState } from "../../../states/UserInfoState";
import { useRecoilState } from "recoil";

function ChallengeAdd() {
  const [userData] = useRecoilState(userDataState);
  const role = userData.memberRole;

  const [open, setOpen] = React.useState(false);
  const handleOpen = (e: any) => {
    e.preventDefault();
    setOpen(true);
  };
  return (
    <Container height="10%">
      <button
        onClick={handleOpen}
        style={{
          width: "90%",
          height: "90%",
          border: "none",
          backgroundColor: "transparent",
        }}
      >
        <EmogiBox backImg={AddChildImg} width="100%" height="100%" />
      </button>
      {role === "PARENT" ? (
        <ModalParentChallenge
          useState_open={open}
          set_open={setOpen}
          modal_title="챌린지 만들기"
          modal_content={<CreateChallenge />}
          modal_btn1="생성"
          modal_btn2="취소"
          btn_justify="space-around"
        />
      ) : (
        <ModalChildrenChallenge
          useState_open={open}
          set_open={setOpen}
          modal_title="챌린지 제안하기"
          modal_content={<CreateChallenge />}
          modal_btn1="생성"
          modal_btn2="취소"
          btn_justify="space-around"
        />
      )}
    </Container>
  );
}

export default ChallengeAdd;
