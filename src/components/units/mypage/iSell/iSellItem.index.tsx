import { getDate } from "../../../../commons/libraries/utils";
import type { IPointTransaction } from "../../../../commons/types/generated/types";
import * as info from "./iSell.styles";

interface ISellItemPros {
  el: IPointTransaction;
}

export default function ISellPageItem(props: ISellItemPros): JSX.Element {
  return (
    <>
      <info.Post>
        <info.Num>{getDate(props.el.createdAt)}</info.Num>
        <info.Title>{props.el.useditem?.name} </info.Title>
        <info.Price>+{props.el.amount}</info.Price>
        <info.Date>₩{props.el.balance}</info.Date>
      </info.Post>
    </>
  );
}
