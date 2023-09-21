import { useRouter } from "next/router";
import { useMutation, useQuery } from "@apollo/client";
import { fetchBoard, DELETE_BOARD, LIKE_BOARD } from "./BoardDetail.queries";
import type {
  IMutation,
  IMutationDeleteBoardArgs,
  IMutationLikeBoardArgs,
  IQuery,
  IQueryFetchUseditemArgs,
} from "../../../../commons/types/generated/types";
export default function ShopBoardDetail(): JSX.Element {
  const [likeBoard] = useMutation<
    Pick<IMutation, "likeBoard">,
    IMutationLikeBoardArgs
  >(LIKE_BOARD);
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
}
