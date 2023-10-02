import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

// const { persistAtom } = recoilPersist({
//   key: "userUuidState",
//   storage: localStorage,
// });

interface newLoan {
  childUuid: string;
  title: string;
  category: string;
  memo: string;
  reward: number;
  status: number;
  endTime: string;
}

//input에서 넣은 post용 데이터
export const newLoan = atom<newLoan>({
  key: "new_loan",
  default: {
    childUuid: "",
    title: "",
    category: "",
    memo: "",
    reward: 0,
    status: 0,
    endTime: "",
  },
  // effects_UNSTABLE: [persistAtom],
});

export interface getLoan {
  memberLoanIdx: number;
  memberIdx: number;
  memo: string;
  borrow: number;
  status: number;
  endTime: any;
  createdTime: any;
}

// export const LoanStore = atom<getLoan[]>({
//   key: "laon_store",
//   default: [],
// });

//더미데이터
export const LoanStore = atom<getLoan[]>({
  key: "laon_store",
  default: [
    {
      memberLoanIdx: 0,
      memberIdx: 1,
      memo: "돈 빌려주세요",
      borrow: 10000,
      status: 0,
      endTime: "2023-10-01 00:00:00.000000",
      createdTime: "2023-10-02 00:00:00.000000",
    },
    {
      memberLoanIdx: 1,
      memberIdx: 1,
      memo: "돈 빌려줘~~~",
      borrow: 20000,
      status: 0,
      endTime: "2023-10-03 00:00:00.000000",
      createdTime: "2023-10-04 00:00:00.000000",
    },
    {
      memberLoanIdx: 2,
      memberIdx: 1,
      memo: "돈 없음",
      borrow: 30000,
      status: 0,
      endTime: "2023-10-05 00:00:00.000000",
      createdTime: "2023-10-06 00:00:00.000000",
    },
    {
      memberLoanIdx: 3,
      memberIdx: 1,
      memo: "돈돈돈",
      borrow: 40000,
      status: 0,
      endTime: "2023-10-07 00:00:00.000000",
      createdTime: "2023-10-08 00:00:00.000000",
    },
  ],
});

// 챌린지를 제안/생성했는지
export const isProposeLoan = atom<boolean>({
  key: "is_propose_loan",
  default: false,
});

//챌린지의 버튼이 클릭되어있는지
export const isButtonLoan = atom<boolean>({
  key: "is_button_loan",
  default: false,
});

//챌린지 카테고리 버튼이 클릭되어있는지
export const isCategoryloan = atom<boolean>({
  key: "is_category_loan",
  default: false,
});

//챌린지 카테고리 버튼이 클릭되어있는지
export const whichCategoryLoan = atom<number>({
  key: "which_category_loan",
  default: -1,
});