import * as info from "./Comment.styles";
import { Space } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import InfiniteScroll from "react-infinite-scroller";
import BoardCommentItem from "./CommentItem.presenter";
import BoardCommentWriter from "./commentWrite/CommentWrite.index";
import type{ IUseditemQuestion } from "../../../../commons/types/generated/types";
import useQueryFetchUsedItemQuestions from "../../../../commons/hook/query/useQueryFetchUsedItemQuestions";
import { useIdChecker } from "../../../../commons/hook/custom/useIdChecker";

export default function UseditemQuestion(): JSX.Element {
  const {id: useditemId} = useIdChecker("useditemId");
  const {data, fetchMore} = useQueryFetchUsedItemQuestions({useditemId});
  const onLoadFunc = (): void => {
    if (data === undefined) return;

    void fetchMore({
      variables: {
        page: Math.ceil(data?.fetchUseditemQuestions.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (fetchMoreResult.fetchUseditemQuestions === undefined) {
          return { fetchUseditemQuestions: [...prev.fetchUseditemQuestions] };
        }

        return {
          fetchUseditemQuestions: [
            ...prev.fetchUseditemQuestions,
            ...fetchMoreResult.fetchUseditemQuestions,
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
            {data?.fetchUseditemQuestions.map((el:IUseditemQuestion) => (
              <BoardCommentItem key={el._id} el={el} />
            )) ?? <></>}
          </InfiniteScroll>
        </div>
      </info.Wrapper>
    </info.Body>
  );
}
