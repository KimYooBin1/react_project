import BoardDetail from "../../../../src/components/units/board/boardcomponent/BoardComponent.container";
import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/router";
import type {
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../../src/commons/types/generated/types";
const FETCH_NODE = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      contents
      youtubeUrl
      images
      boardAddress {
        zipcode
        address
        addressDetail
      }
    }
  }
`;

export default function BoardDetailPage(): JSX.Element {
  const router = useRouter();
  if (typeof router.query.boardId !== "string") return <></>;
  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_NODE,
    {
      variables: {
        boardId: router.query.boardId,
      },
    }
  );
  console.log(data);
  return <BoardDetail isEdit={true} data={data} />;
}
