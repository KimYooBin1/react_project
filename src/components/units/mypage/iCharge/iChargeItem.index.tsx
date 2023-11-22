import { getDate } from "../../../../commons/libraries/utils";
import type { IPointTransaction } from "../../../../commons/types/generated/types";
import * as info from "./iCharge.styles";

interface IChargeItemPros {
  el: IPointTransaction;
}

export default function IChargePageItem(props: IChargeItemPros): JSX.Element {
  return (
    <>
      <info.Post>
        <info.Num>{getDate(props.el.createdAt)}</info.Num>
        <info.Title>{props.el.impUid} </info.Title>
        <info.Price>{props.el.amount}</info.Price>
        <info.Date>{props.el.balance}</info.Date>
      </info.Post>
    </>
  );
}
