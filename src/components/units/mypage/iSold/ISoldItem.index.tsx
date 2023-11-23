import { useMoveToPage } from "../../../../commons/hook/custom/useMoveToPage";
import { getDate } from "../../../../commons/libraries/utils";
import type { IUseditem } from "../../../../commons/types/generated/types";
import * as info from "./ISold.styles";

interface ISoldItemPros {
  el: IUseditem;
  index: number;
}

export default function ISoldItem(props: ISoldItemPros): JSX.Element {
  const { onClickMoveToPage } = useMoveToPage();
  return (
    <>
      <info.Post onClick={onClickMoveToPage(`/shopboards/${props.el._id}`)}>
        <info.Num>{props.index + 1}</info.Num>
        <info.Title>{props.el.name} </info.Title>
        <info.Price>{props.el.price}</info.Price>
        <info.Date>{getDate(props.el.createdAt)}</info.Date>
      </info.Post>
    </>
  );
}
