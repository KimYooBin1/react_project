import * as info from "./BoardDetail.styles";
import type { IBoardDetailUi } from "./BoardDetail.type";
import { Tooltip } from "antd";
import { getDate2 } from "../../../../commons/libraries/utils";
export default function ShopBoardDetailUI(props: IBoardDetailUi): JSX.Element {
  return (
    <info.Body>
      <info.Wrapper>
        <info.Info>
          <info.InfoDetail>
            <info.Logo src="/img/profile.png"></info.Logo>
            <div>
              <info.Date>
                {getDate2(props.data?.fetchUseditem?.createdAt)}
              </info.Date>
            </div>
          </info.InfoDetail>
          <div>
            <Tooltip
              placement="topRight"
              title={`${
                props.data?.fetchUseditem.useditemAddress?.address ?? ""
              } ${
                props.data?.fetchUseditem.useditemAddress?.addressDetail ?? ""
              }`}
            >
              <img src="/img/location.png" />
            </Tooltip>
            <img src="/img/link.png" />
          </div>
        </info.Info>
        <info.Contents>
          <info.Name>{props.data?.fetchUseditem?.name}</info.Name>
          <div>
            {props.data?.fetchUseditem.images
              ?.filter((el) => el)
              .map((el, index) => (
                <info.ContentImg
                  key={index}
                  src={`https://storage.googleapis.com/${el}`}
                ></info.ContentImg>
              ))}
          </div>
          <info.Content>{props.data?.fetchUseditem?.contents}</info.Content>
        </info.Contents>
        <info.LikeBoxs>
          <info.LikeBox>
            <info.Like rev={""} onClick={props.onClickLike} />
            <info.LikeBoxText>
              {props.data?.fetchUseditem.pickedCount ?? "0"}
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
