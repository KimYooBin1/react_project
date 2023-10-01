import * as info from "./BoardDetail.styles";
import { Tooltip } from "antd";
import { getDate2 } from "../../../../commons/libraries/utils";
import { useQueryFetchBoard } from "../../../../commons/hook/query/useQueryFetchBoard";
import { useIdChecker } from "../../../../commons/hook/custom/useIdChecker";
import { useMoveToPage } from "../../../../commons/hook/custom/useMoveToPage";
import { useBoard } from "../../../../commons/hook/custom/useBoardDetail";
import { useBoardLike } from "../../../../commons/hook/custom/useBoardLike";
export default function BoardDetail(): JSX.Element {
  const { onClickMoveToPage } = useMoveToPage();
  const { onClickDelete } = useBoard();
  const { onClickLike, onClickDisLike } = useBoardLike();
  const { id: boardId } = useIdChecker("boardId");
  const { data } = useQueryFetchBoard({
    boardId,
  });
  return (
    <info.Body>
      <info.Wrapper>
        <info.Info>
          <info.InfoDetail>
            <info.Logo src="/img/profile.png"></info.Logo>
            <div>
              <info.Writer>{data?.fetchBoard?.writer}</info.Writer>
              <info.Date>{getDate2(data?.fetchBoard?.createdAt)}</info.Date>
            </div>
          </info.InfoDetail>
          <div>
            <Tooltip
              placement="topRight"
              title={`${data?.fetchBoard.boardAddress?.address ?? ""} ${
                data?.fetchBoard.boardAddress?.addressDetail ?? ""
              }`}
            >
              <img src="/img/location.png" />
            </Tooltip>
            <img src="/img/link.png" />
          </div>
        </info.Info>
        <info.Contents>
          <info.Title>{data?.fetchBoard?.title}</info.Title>
          <div>
            {data?.fetchBoard.images
              ?.filter((el) => el)
              .map((el, index) => (
                <info.ContentImg
                  key={index}
                  src={`https://storage.googleapis.com/${el}`}
                ></info.ContentImg>
              ))}
          </div>
          <info.Content
            dangerouslySetInnerHTML={{
              __html: data?.fetchBoard?.contents ?? "",
            }}
          ></info.Content>
          {data?.fetchBoard.youtubeUrl !== "" && (
            <info.YouTube
              url={data?.fetchBoard.youtubeUrl ?? ""}
              width="486px"
              height="240px"
            />
          )}
        </info.Contents>
        <info.LikeBoxs>
          <info.LikeBox>
            <info.Like rev={""} onClick={onClickLike} />
            <info.LikeBoxText>
              {data?.fetchBoard.likeCount ?? "0"}
            </info.LikeBoxText>
          </info.LikeBox>
          <info.LikeBox>
            <info.DisLike rev={""} onClick={onClickDisLike} />
            <info.LikeBoxText>
              {data?.fetchBoard.dislikeCount ?? "0"}
            </info.LikeBoxText>
          </info.LikeBox>
        </info.LikeBoxs>
      </info.Wrapper>
      <info.BtnWrapper>
        <info.Btn onClick={onClickMoveToPage("/boards/page")}>
          목록으로
        </info.Btn>
        <info.Btn onClick={onClickMoveToPage(`/boards/${boardId}/edit`)}>
          수정하기
        </info.Btn>
        <info.Btn onClick={onClickDelete}>삭제하기</info.Btn>
      </info.BtnWrapper>
    </info.Body>
  );
}
