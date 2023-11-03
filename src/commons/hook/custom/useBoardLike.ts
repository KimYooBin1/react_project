import { useLikeBoard } from "../mutation/useLikeBoard";
import { useDisLikeBoard } from "../mutation/useDislikeBoard";
import type { IQuery } from "../../types/generated/types";
import { gql } from "@apollo/client";

interface IUseBoardLikeArg {
  data?: Pick<IQuery, "fetchBoard">;
  boardId: string;
}

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      likeCount
    }
  }
`;

export const useBoardLike = (props: IUseBoardLikeArg) => {
  const [likeBoard] = useLikeBoard();
  const [dislikeBoard] = useDisLikeBoard();

  const onClickLike = (): void => {
    void likeBoard(
      {
        variables: { boardId: props.boardId },
        optimisticResponse: {
          likeBoard: (props.data?.fetchBoard.likeCount ?? 0) + 1,
        },
        update(cache, { data }) {
          console.log("1");
          cache.writeQuery({
            query: FETCH_BOARD,
            variables: { boardId: props.boardId },
            data: {
              fetchBoard: {
                _id: props.boardId,
                __typename: "Board",
                likeCount: data?.likeBoard,
              },
            },
          });
        },
      }

      // refetchQueries: [
      //   {
      //     query: FETCH_BOARD,
      //     variables: {
      //       boardId: router.query.boardId,
      //     },
      //   },
      // ],
      // }
    );
  };
  const onClickDisLike = (): void => {
    void dislikeBoard({
      variables: { boardId: props.boardId },
      optimisticResponse: {
        dislikeBoard: (props.data?.fetchBoard.dislikeCount ?? 0) + 1,
      },
      update(cache, { data }) {
        cache.writeQuery({
          query: FETCH_BOARD,
          variables: { boardId: props.boardId },
          data: {
            fetchBoard: {
              _id: props.boardId,
              __typename: "Board",
              dislikeCount: data?.dislikeBoard,
            },
          },
        });
      },
      // refetchQueries: [
      //   {
      //     query: FETCH_BOARD,
      //     variables: {
      //       boardId: router.query.boardId,
      //     },
      //   },
      // ],
    });
  };

  return { onClickLike, onClickDisLike };
};
