import { useMoveToPage } from "../../../commons/hook/custom/useMoveToPage"
import * as info from "./moveMyPage.style"
export default function MoveMyPage(){
    const {onClickMoveToPage} = useMoveToPage();
    return(
        <>
            <info.Btn onClick={onClickMoveToPage("/mypage")}>전체내역</info.Btn>
            <info.Btn onClick={onClickMoveToPage("/mypage/icharge")}>충전내역</info.Btn>
            <info.Btn onClick={onClickMoveToPage("/mypage/ibought")}>구매내역</info.Btn>
            <info.Btn onClick={onClickMoveToPage("")}>판매내역</info.Btn>
        </>
    )
}