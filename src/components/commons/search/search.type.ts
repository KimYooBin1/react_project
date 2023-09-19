import type { Dispatch, SetStateAction } from "react";

import type {
  IQuery,
  IQueryFetchBoardsCountArgs,
} from "../../../commons/types/generated/types";
import type { ApolloQueryResult } from "@apollo/client";
export interface ISearch {
  SetKeyword: Dispatch<SetStateAction<string>>;
  refetchBoardsCount?: (
    variables?: Partial<IQueryFetchBoardsCountArgs>
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoardsCount">>>;
  refetch: any;
}
