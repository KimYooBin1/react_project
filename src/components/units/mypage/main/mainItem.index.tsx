import { getDate } from "../../../../commons/libraries/utils";
import type { IPointTransaction } from "../../../../commons/types/generated/types";
import * as info from "./main.styles";

interface IMypageItemPros {
  el: IPointTransaction;
}

export default function MainPageItem(props: IMypageItemPros): JSX.Element {
  return (
    <>
      <info.Post>
        <info.Num>{getDate(props.el.createdAt)}</info.Num>
        <info.Title>{props.el.status} </info.Title>
        <info.Price>{props.el.amount}</info.Price>
        <info.Date>{props.el.balance}</info.Date>
      </info.Post>
    </>
  );
}
