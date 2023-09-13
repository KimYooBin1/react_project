import { atom } from "recoil";

export const accessTokenState = atom({
  key: "accessTokenState",
  default: "",
});

export const isLoginState = atom({
  key: "isLoginState",
  default: false,
});
