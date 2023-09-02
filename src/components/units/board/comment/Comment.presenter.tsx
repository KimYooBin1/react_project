import * as info from "./Comment.styles";
import type { IBoardCommentWrite } from "./Comment.type";
import { Space } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import InfiniteScroll from "react-infinite-scroller";
import BoardCommentItem from "./CommentItem.presenter";
import BoardCommentWriter from "./commentWrite/CommentWrite.container";

export default function BoardWriteUI(props: IBoardCommentWrite): JSX.Element {
  return (
    <info.Body>
      <info.Wrapper>
        <BoardCommentWriter />
        <div style={{ width: "100%", height: "700px", overflow: "auto" }}>
          <InfiniteScroll
            pageStart={0}
            loadMore={props.onLoadFunc}
            hasMore={true}
            loader={
              <Space>
                <LoadingOutlined rev={""} />
              </Space>
            }
            useWindow={false}
          >
            {props.data?.fetchBoardComments.map((el) => (
              <BoardCommentItem key={el._id} el={el} />
            )) ?? <></>}
          </InfiniteScroll>
        </div>
      </info.Wrapper>
    </info.Body>
  );
}
