import { useMoveToPage } from "../../../commons/hook/custom/useMoveToPage"
import * as info from "./moveMyPage.style"
export default function MoveMySellInfoPage(){
    const {onClickMoveToPage} = useMoveToPage();
    return(
        <>
            <info.Btn onClick={onClickMoveToPage("/mypage/isold")}>니의상품</info.Btn>
            <info.Btn onClick={onClickMoveToPage("/mypage/ipick")}>마이찜</info.Btn>
        </>
    )
}