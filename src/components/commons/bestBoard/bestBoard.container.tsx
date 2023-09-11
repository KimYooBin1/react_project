import { useQuery } from "@apollo/client";
import BestBoardUI from "./bestBoard.presenter";
import { BEST_BOARDS } from "./bestBoard.queries";
import type { IQuery } from "../../../commons/types/generated/types";
import type { MouseEvent } from "react";
import { useRouter } from "next/router";
export default function BestBoard(): JSX.Element {
  const router = useRouter();
  const { data } = useQuery<Pick<IQuery, "fetchBoardsOfTheBest">>(BEST_BOARDS);
  const onClickBestBoard =
    (value: string) => (event: MouseEvent<HTMLDivElement>) => {
      void router.push(`/boards/${value}`);
    };
  return <BestBoardUI data={data} onClickBestBoard={onClickBestBoard} />;
}
