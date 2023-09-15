import { useQuery } from "@apollo/client";
import BoardWriteUI from "./Comment.presenter";
import { useRouter } from "next/router";
import { FETCH_COMMENT } from "./Comment.queries";
import type {
  IQuery,
  IQueryFetchBoardCommentsArgs,
} from "../../../../commons/types/generated/types";
export default function CommentWrite(): JSX.Element {
  const router = useRouter();
  if (typeof router.query.boardId !== "string") return <></>;
  const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchBoardComments">,
    IQueryFetchBoardCommentsArgs
  >(FETCH_COMMENT, {
    variables: {
      boardId: router.query.boardId,
    },
  });
  const onLoadFunc = (): void => {
    if (data === undefined) return;

    void fetchMore({
      variables: { page: Math.ceil(data?.fetchBoardComments.length / 10) + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (fetchMoreResult?.fetchBoardComments === undefined) {
          return { fetchBoardComments: [...prev.fetchBoardComments] };
        }

        return {
          fetchBoardComments: [
            ...prev.fetchBoardComments,
            ...fetchMoreResult.fetchBoardComments,
          ],
        };
      },
    });
  };

  return <BoardWriteUI onLoadFunc={onLoadFunc} data={data} />;
}
