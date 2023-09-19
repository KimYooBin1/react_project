import BoardComment from "../../../src/components/units/board/comment/Comment.index";
import ShopBoardDetail from "../../../src/components/units/shopboard/detail/BoardDetail.container";
export default function BoardDetailPage(): JSX.Element {
  return (
    <>
      <ShopBoardDetail />
      <BoardComment />
    </>
  );
}
