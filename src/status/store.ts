import { create } from 'zustand';

type LoginFormState = {
  loginFormState: boolean;
  showloginForm: () => void;
};

type UserState = {
  isLogin: boolean;
  isLoginState: () => void;
};

type userTypeState = {
  userType: string;
  userTypeState: (type: any) => void;
};

type proposalCategoryState = {
  currentValue: string;
  categoryState: (type: any) => void;
};

type regularDateStoreType = {
  regularDate: boolean;
  regularDateState: (type: any) => void;
};
type businessDateStoreType = {
  businessDate: boolean;
  businessDateState: (type: any) => void;
};
type personalDateStoreType = {
  personalDate: boolean;
  personalDateState: (type: any) => void;
};
type checkScheduleStoreType = {
  checkSchedule: boolean;
  checkScheduleState: (type: any) => void;
};

type snsChannelStateStoreType = {
  snsChannel: boolean;
  snsChannelState: (type: any) => void;
};

type keyWordSubmitState = {
  keyWordSubmit: string;
  keyWordSubmitEvent: (type: any) => void;
};

export const loginFormStore = create<LoginFormState>(set => ({
  loginFormState: false,
  showloginForm: () => set((state: any) => ({ loginFormState: !state.loginFormState })),
}));

export const userStore = create<UserState>(set => ({
  isLogin: false,
  isLoginState: () => set((state: any) => ({ isLogin: !state.isLogin })),
}));

export const userTypeStore = create<userTypeState>(set => ({
  userType: '리뷰어',
  userTypeState: (type: any) => set({ userType: type }),
}));

// 서포터_리뷰어에게 제안하기 메인 카테고리
export const proposalCategoryStore = create<proposalCategoryState>(set => ({
  currentValue: '여행',
  categoryState: (type: any) => set({ currentValue: type }),
}));

// 리뷰어_나의 포트폴리오 리스트_스케줄 팝업
export const regularDateStore = create<regularDateStoreType>(set => ({
  regularDate: false,
  regularDateState: () => set((state: any) => ({ regularDate: !state.regularDate })),
}));
export const businessDateStore = create<businessDateStoreType>(set => ({
  businessDate: false,
  businessDateState: () => set((state: any) => ({ businessDate: !state.businessDate })),
}));
export const personalDateStore = create<personalDateStoreType>(set => ({
  personalDate: false,
  personalDateState: () => set((state: any) => ({ personalDate: !state.personalDate })),
}));
export const checkScheduleStore = create<checkScheduleStoreType>(set => ({
  checkSchedule: false,
  checkScheduleState: () => set((state: any) => ({ checkSchedule: !state.checkSchedule })),
}));

// 리뷰어, 광고주 마이페이지 채널 연결 상태
export const snsChannelStateStore = create<snsChannelStateStoreType>(set => ({
  snsChannel: true,
  snsChannelState: () => set((state: any) => ({ snsChannel: !state.snsChannel })),
}));

// 검색 submit 키워드 state
export const keyWordSubmitStore = create<keyWordSubmitState>(set => ({
  keyWordSubmit: '',
  keyWordSubmitEvent: (type: any) => set({ keyWordSubmit: type }),
}));
