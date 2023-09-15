import ListUI from "./List.presenter";
import { useRouter } from "next/router";
import type { MouseEvent } from "react";
import type { IShopListPage } from "./List.type";
export default function ShopListPage(props: IShopListPage): JSX.Element {
  const router = useRouter();
  const onClickList = (event: MouseEvent<HTMLSpanElement>): void => {
    void router.push(`/shopboards/${event.currentTarget.id}`);
  };
  const onClickBtn = (): void => {
    void router.push(`/shopboards/new`);
  };
  console.log(props.data);
  return (
    <ListUI
      data={props.data}
      onClickList={onClickList}
      onClickBtn={onClickBtn}
      keyword={props.keyword}
    />
  );
}
