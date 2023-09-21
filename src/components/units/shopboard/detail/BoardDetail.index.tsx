import * as info from "./BoardDetail.styles";
import { Tooltip } from "antd";
import { getDate2 } from "../../../../commons/libraries/utils";
import { useIdChecker } from "../../../../commons/hook/custom/useIdChecker";
import { useMoveToPage } from "../../../../commons/hook/custom/useMoveToPage";
import { useUsedItem } from "../../../../commons/hook/custom/useUsedItem";
import { KakaoMap } from "../../../commons/kakaoMap/kakaoMap";
export default function ShopBoardDetail(): JSX.Element {
  const { onClickMoveToPage } = useMoveToPage();
  const { id: useditemId } = useIdChecker("useditemId");
  const { onClickDelete, data, auth } = useUsedItem({ useditemId });
  const onClickLike = () => {};

  return (
    <info.Body>
      <info.Wrapper>
        <info.Info>
          <info.InfoDetail>
            <info.Logo src="/img/profile.png"></info.Logo>
            <div>
              <info.Date>{getDate2(data?.fetchUseditem?.createdAt)}</info.Date>
            </div>
          </info.InfoDetail>
          <div>
            <Tooltip
              placement="topRight"
              title={`${data?.fetchUseditem.useditemAddress?.address ?? ""} ${
                data?.fetchUseditem.useditemAddress?.addressDetail ?? ""
              }`}
            >
              <img src="/img/location.png" />
            </Tooltip>
            <img src="/img/link.png" />
          </div>
        </info.Info>
        <info.Contents>
          <info.Name>{data?.fetchUseditem?.name}</info.Name>
          <div>
            {data?.fetchUseditem.images
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
              __html: data?.fetchUseditem?.contents ?? "",
            }}
          ></info.Content>
        </info.Contents>
        <KakaoMap
          lat={data?.fetchUseditem.useditemAddress?.lat}
          lng={data?.fetchUseditem.useditemAddress?.lng}
        />
        <info.LikeBoxs>
          <info.LikeBox>
            <info.Like rev={""} onClick={onClickLike} />
            <info.LikeBoxText>
              {data?.fetchUseditem.pickedCount ?? "0"}
            </info.LikeBoxText>
          </info.LikeBox>
        </info.LikeBoxs>
      </info.Wrapper>
      <info.BtnWrapper>
        <info.Btn onClick={onClickMoveToPage("/shopboards/page")}>
          목록으로
        </info.Btn>
        {auth ? (
          <info.Btn onClick={onClickDelete}>삭제하기</info.Btn>
        ) : (
          <info.Btn>구매하기</info.Btn>
        )}
      </info.BtnWrapper>
    </info.Body>
  );
}
