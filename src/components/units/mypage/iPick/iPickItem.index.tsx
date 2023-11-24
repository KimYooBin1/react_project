import { useMoveToPage } from "../../../../commons/hook/custom/useMoveToPage";
import { getDate } from "../../../../commons/libraries/utils";
import type { IUseditem } from "../../../../commons/types/generated/types";
import * as info from "./iPick.styles";

interface IPickItemPros {
  el: IUseditem;
  index: number;
}

export default function IPickPageItem(props: IPickItemPros): JSX.Element {
  const { onClickMoveToPage } = useMoveToPage();
  return (
    <>
      <info.Post onClick={onClickMoveToPage(`/shopboards/${props.el._id}`)}>
        <info.Num>{props.index + 1}</info.Num>
        <info.Title>{props.el.name} </info.Title>
        <info.Price>{props.el.price}원</info.Price>
        <info.Date>{props.el.buyer?.name}</info.Date>
      </info.Post>
    </>
  );
}
