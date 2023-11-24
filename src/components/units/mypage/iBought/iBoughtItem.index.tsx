import { useMoveToPage } from "../../../../commons/hook/custom/useMoveToPage";
import { getDate } from "../../../../commons/libraries/utils";
import type { IUseditem } from "../../../../commons/types/generated/types";
import * as info from "./iBought.styles";

interface IMypageItemPros {
  el: IUseditem;
  index: number;
}

export default function IBoughtPageItem(props: IMypageItemPros): JSX.Element {
  const { onClickMoveToPage } = useMoveToPage();
  return (
    <>
      <info.Post onClick={onClickMoveToPage(`/shopboards/${props.el._id}`)}>
        <info.Num>{props.index + 1}</info.Num>
        <info.Title>{props.el.name} </info.Title>
        <info.Price>{props.el.remarks}</info.Price>
        <info.Date>-{props.el.price}원</info.Date>
      </info.Post>
    </>
  );
}
