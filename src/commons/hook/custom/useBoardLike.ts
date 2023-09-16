import { useRouter } from "next/router";
import { useLikeBoard } from "../mutation/useLikeBoard";
import { useDisLikeBoard } from "../mutation/useDislikeBoard";
import { FETCH_BOARD } from "../query/useQueryFetchBoard";

export const useBoardLike = () => {
  const router = useRouter();

  const [likeBoard] = useLikeBoard();
  const [dislikeBoard] = useDisLikeBoard();

  const onClickLike = (): void => {
    // console.log("click like button");
    if (typeof router.query.boardId !== "string") return;
    void likeBoard({
      variables: { boardId: router.query.boardId },
      refetchQueries: [
        {
          query: FETCH_BOARD,
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
          query: FETCH_BOARD,
          variables: {
            boardId: router.query.boardId,
          },
        },
      ],
    });
  };

  return { onClickLike, onClickDisLike };
};
