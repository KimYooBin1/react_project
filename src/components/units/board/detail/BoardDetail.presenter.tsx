import * as info from "./BoardDetail.styles";
import type { IBoardDetailUi } from "./BoardDetail.type";
import { Tooltip } from "antd";
import { getDate2 } from "../../../../commons/libraries/utils";
export default function BoardDetailUI(props: IBoardDetailUi): JSX.Element {
  return (
    <info.Body>
      <info.Wrapper>
        <info.Info>
          <info.InfoDetail>
            <info.Logo src="/img/profile.png"></info.Logo>
            <div>
              <info.Writer>{props.data?.fetchBoard?.writer}</info.Writer>
              <info.Date>
                {getDate2(props.data?.fetchBoard?.createdAt)}
              </info.Date>
            </div>
          </info.InfoDetail>
          <div>
            <Tooltip
              placement="topRight"
              title={`${props.data?.fetchBoard.boardAddress?.address ?? ""} ${
                props.data?.fetchBoard.boardAddress?.addressDetail ?? ""
              }`}
            >
              <img src="/img/location.png" />
            </Tooltip>
            <img src="/img/link.png" />
          </div>
        </info.Info>
        <info.Contents>
          <info.Title>{props.data?.fetchBoard?.title}</info.Title>
          <info.ContentImg src="/img/image.png"></info.ContentImg>
          <info.Content>{props.data?.fetchBoard?.contents}</info.Content>
          {props.data?.fetchBoard.youtubeUrl !== "" && (
            <info.YouTube
              url={props.data?.fetchBoard.youtubeUrl ?? ""}
              width="486px"
              height="240px"
            />
          )}
        </info.Contents>
        <info.LikeBoxs>
          <info.LikeBox>
            <info.Like rev={""} onClick={props.onClickLike} />
            <info.LikeBoxText>
              {props.data?.fetchBoard.likeCount ?? "0"}
            </info.LikeBoxText>
          </info.LikeBox>
          <info.LikeBox>
            <info.DisLike rev={""} onClick={props.onClickDisLike} />
            <info.LikeBoxText>
              {props.data?.fetchBoard.dislikeCount ?? "0"}
            </info.LikeBoxText>
          </info.LikeBox>
        </info.LikeBoxs>
      </info.Wrapper>
      <info.BtnWrapper>
        <info.Btn onClick={props.onClickList}>목록으로</info.Btn>
        <info.Btn onClick={props.onClickEdit}>수정하기</info.Btn>
        <info.Btn onClick={props.onClickDelete}>삭제하기</info.Btn>
      </info.BtnWrapper>
    </info.Body>
  );
}
