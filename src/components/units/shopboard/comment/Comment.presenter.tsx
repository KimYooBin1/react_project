import * as info from "./Comment.styles";
import type { ICommentWrite } from "./Comment.type";
import { Space } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import InfiniteScroll from "react-infinite-scroller";
import BoardCommentItem from "./CommentItem.presenter";
import BoardCommentWriter from "./commentWrite/CommentWrite.container";

export default function CommentWriteUI(props: ICommentWrite): JSX.Element {
  return (
    <info.Body>
      <info.Wrapper>
        <BoardCommentWriter isEdit={false} />
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
