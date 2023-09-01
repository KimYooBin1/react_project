import BoardDetail from "../../../src/components/units/board/detail/BoardDetail.container";
import BoardComment from "../../../src/components/units/board/comment/Comment.container";
export default function BoardDetailPage(): JSX.Element {
  return (
    <>
      <BoardDetail />
      <BoardComment />
    </>
  );
}
