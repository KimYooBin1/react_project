import ListUI from "./List.presenter";
import { useRouter } from "next/router";
import type { MouseEvent } from "react";
import type { IListPage } from "./List.type";
export default function ListPage(props: IListPage): JSX.Element {
  const router = useRouter();
  const onClickList = (event: MouseEvent<HTMLSpanElement>): void => {
    void router.push(`/boards/${event.currentTarget.id}`);
  };
  const onClickBtn = (): void => {
    void router.push(`/boards/new`);
  };
  return (
    <ListUI
      data={props.data}
      onClickList={onClickList}
      onClickBtn={onClickBtn}
      keyword={props.keyword}
    />
  );
}
