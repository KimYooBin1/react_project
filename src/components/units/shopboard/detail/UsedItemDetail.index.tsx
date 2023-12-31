import * as info from "./UsedItemDetail.styles";
import { Tooltip } from "antd";
import { getDate2 } from "../../../../commons/libraries/utils";
import { useIdChecker } from "../../../../commons/hook/custom/useIdChecker";
import { useMoveToPage } from "../../../../commons/hook/custom/useMoveToPage";
import { KakaoMap } from "../../../commons/kakaoMap/kakaoMap";
import { useState } from "react";
import useToggleUseditemPick from "../../../../commons/hook/custom/useToggleUseditemPick";
import { useUsedItemDetail } from "../../../../commons/hook/custom/useUsedItemDetail";
export default function ShopBoardDetail(): JSX.Element {
  const { onClickMoveToPage } = useMoveToPage();
  const { id: useditemId } = useIdChecker("useditemId");
  const { onClickDelete, onClickEdit,onClickPurchase, onClickOk,onClickCancel,data, userData, isOpen } = useUsedItemDetail({
    useditemId,
  });
  const { onClickPickBtn } = useToggleUseditemPick({ useditemId });
  const [, setLat] = useState(0);
  const [, setLng] = useState(0);

  return (
    <>
      {isOpen && 
      <info.PurchaseModal
          open={isOpen}
          onOk={onClickOk}
          onCancel={onClickCancel}
          >
            구매목록으로 이동하기
      </info.PurchaseModal>}
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
          {typeof data !== "undefined" && (
            <KakaoMap
              address={String(data.fetchUseditem.useditemAddress?.address)}
              ReadOnly={true}
              setLat={setLat}
              setLng={setLng}
            />
          )}
          <info.LikeBoxs>
            <info.LikeBox>
              <info.Like rev={""} onClick={onClickPickBtn} />
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
          {data?.fetchUseditem.seller?.email ===
          userData?.fetchUserLoggedIn.email ? (
            <>
              <info.Btn onClick={onClickDelete}>삭제하기</info.Btn>
              <info.Btn onClick={onClickEdit}>수정하기</info.Btn>
            </>
          ) : (
            <info.Btn onClick={onClickPurchase}>구매하기</info.Btn>
          )}
        </info.BtnWrapper>
      </info.Body>
    </>
  );
}
