import BoardDetailUI from "./BoardDetail.presenter";
import { useRouter } from "next/router";
import { useMutation, useQuery } from "@apollo/client";
import {
  fetchBoard,
  DELETE_BOARD,
  LIKE_BOARD,
  DISLIKE_BOARD,
} from "./BoardDetail.queries";
import type {
  IMutation,
  IMutationDeleteBoardArgs,
  IMutationDislikeBoardArgs,
  IMutationLikeBoardArgs,
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../../commons/types/generated/types";
import { success } from "../../../../commons/libraries/modal";
export default function BoardDetail(): JSX.Element {
  const router = useRouter();
  if (typeof router.query.boardId !== "string") {
    return <></>;
  }
  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    fetchBoard,
    {
      variables: {
        boardId: router.query.boardId,
      },
    }
  );
  const [deleteBoard] = useMutation<
    Pick<IMutation, "deleteBoard">,
    IMutationDeleteBoardArgs
  >(DELETE_BOARD);

  const onClickList = (): void => {
    void router.push(`/boards/page`);
  };
  const onClickDelete = (): void => {
    if (typeof router.query.boardId !== "string") return;
    try {
      void deleteBoard({
        variables: { boardId: router.query.boardId },
      });
      void router.push(`/boards/page`);
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    }
    success("삭제");
  };

  const onClickEdit = (): void => {
    if (typeof router.query.boardId !== "string") return;
    void router.push(`/boards/${router.query.boardId}/edit`);
  };
  const [likeBoard] = useMutation<
    Pick<IMutation, "likeBoard">,
    IMutationLikeBoardArgs
  >(LIKE_BOARD);
  const [dislikeBoard] = useMutation<
    Pick<IMutation, "dislikeBoard">,
    IMutationDislikeBoardArgs
  >(DISLIKE_BOARD);

  const onClickLike = (): void => {
    // console.log("click like button");
    if (typeof router.query.boardId !== "string") return;
    void likeBoard({
      variables: { boardId: router.query.boardId },
      refetchQueries: [
        {
          query: fetchBoard,
          variables: {
            boardId: router.query.boardId,
          },
        },
      ],
    });
  };
  const onClickDisLike = (): void => {
    // console.log("click dislike button");
    if (typeof router.query.boardId !== "string") return;
    void dislikeBoard({
      variables: { boardId: router.query.boardId },
      refetchQueries: [
        {
          query: fetchBoard,
          variables: {
            boardId: router.query.boardId,
          },
        },
      ],
    });
  };
  return (
    <BoardDetailUI
      data={data}
      onClickList={onClickList}
      onClickDelete={onClickDelete}
      onClickEdit={onClickEdit}
      onClickLike={onClickLike}
      onClickDisLike={onClickDisLike}
    />
  );
}
