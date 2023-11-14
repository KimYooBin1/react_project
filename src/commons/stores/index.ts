import { atom, selector } from "recoil";
import { getAccessToken } from "../libraries/getAccessToken";

export const accessTokenState = atom({
  key: "accessTokenState",
  default: "",
});

export const isLoginState = atom({
  key: "isLoginState",
  default: false,
});

export const preUrl = atom({
  key:"preUrl",
  default:""
})

export const restoreAccessTokenLoadable = selector({
  key:"restoreAccessTokenLoadable",
  get : async () =>{
    const newAccessToken = await getAccessToken();
    return newAccessToken
  }
})
