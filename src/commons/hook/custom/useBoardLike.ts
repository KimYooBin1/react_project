import { useLikeBoard } from "../mutation/useLikeBoard";
import { useDisLikeBoard } from "../mutation/useDislikeBoard";
import type { IQuery, IQueryFetchBoardArgs } from "../../types/generated/types";
import { gql, useQuery } from "@apollo/client";

interface IUseBoardLikeArg {
  boardId: string;
}

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      likeCount
      dislikeCount
    }
  }
`;

export const useBoardLike = (props: IUseBoardLikeArg) => {
  const [likeBoard] = useLikeBoard();
  const [dislikeBoard] = useDisLikeBoard();
  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(FETCH_BOARD,{variables :{boardId : "65446c345d6eaa0029f7c185"} })
	
  const onClickLike = (): void => {
    void likeBoard(
      {
        variables: { boardId: props.boardId },
        optimisticResponse: {
          likeBoard: (data?.fetchBoard.likeCount || 0) + 1,
        },
        update(cache, { data }) {
          cache.writeQuery({
            query: FETCH_BOARD,
            variables: { boardId: props.boardId },
            data: {
              fetchBoard: {
                _id: props.boardId,
                __typename: "Board",
                likeCount: data?.likeBoard,
              }
            }
          });
        },
      }
    );
  };
  const onClickDisLike = (): void => {
    void dislikeBoard({
      variables: { boardId: props.boardId },
      optimisticResponse: {
        dislikeBoard: (data?.fetchBoard.dislikeCount || 0) + 1,
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
