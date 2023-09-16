import * as info from "./Comment.styles";
import { Space } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import InfiniteScroll from "react-infinite-scroller";
import BoardCommentItem from "./CommentItem.presenter";
import BoardCommentWriter from "./commentWrite/CommentWrite.index";
import { useQueryFetchBoardComments } from "../../../../commons/hook/query/useQueryfetchBoardComments";
import { useIdChecker } from "../../../../commons/hook/custom/useIdChecker";

export default function CommentWrite(): JSX.Element {
  const { id: boardId } = useIdChecker("boardId");
  const { data, fetchMore } = useQueryFetchBoardComments({ boardId });

  const onLoadFunc = (): void => {
    if (data === undefined) return;

    void fetchMore({
      variables: {
        page: Math.ceil(data?.fetchBoardComments.length / 10) + 1,
      },
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

  return (
    <info.Body>
      <info.Wrapper>
        <BoardCommentWriter isEdit={false} />
        <div style={{ width: "100%", height: "700px", overflow: "auto" }}>
          <InfiniteScroll
            pageStart={0}
            loadMore={onLoadFunc}
            hasMore={true}
            loader={
              <Space>
                <LoadingOutlined rev={""} />
              </Space>
            }
            useWindow={false}
          >
            {data?.fetchBoardComments.map((el) => (
              <BoardCommentItem key={el._id} el={el} />
            )) ?? <></>}
          </InfiniteScroll>
        </div>
      </info.Wrapper>
    </info.Body>
  );
}
