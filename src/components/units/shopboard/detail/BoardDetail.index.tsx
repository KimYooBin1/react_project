import * as info from "./BoardDetail.styles";
import { Tooltip } from "antd";
import { getDate2 } from "../../../../commons/libraries/utils";
import { useEffect } from "react";
import { useIdChecker } from "../../../../commons/hook/custom/useIdChecker";
import { useMoveToPage } from "../../../../commons/hook/custom/useMoveToPage";
import { useUsedItem } from "../../../../commons/hook/custom/useUsedItem";

declare const window: typeof globalThis & {
  kakao: any;
};

export default function ShopBoardDetail(): JSX.Element {
  useEffect(() => {
    // 여기서 직접 다운로드 받고, 다 받을때까지 기다렸다가 그려주기!!
    const script = document.createElement("script"); // html에 script라는 태그(Element)를 만든다.
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=746499a2a0d1cbaad8cf789b53b38e23&autoload=false";
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(function () {
        const container = document.getElementById("map");
        const options = {
          center: new window.kakao.maps.LatLng(33.450701, 126.570667),
          level: 3,
        };
        const map = new window.kakao.maps.Map(container, options);
        const marker = new window.kakao.maps.Marker({
          // 지도 중심좌표에 마커를 생성합니다
          position: map.getCenter(),
        });
        // 지도에 마커를 표시합니다
        marker.setMap(map);

        // 지도에 클릭 이벤트를 등록합니다
        // 지도를 클릭하면 마지막 파라미터로 넘어온 함수를 호출합니다
        window.kakao.maps.event.addListener(
          map,
          "click",
          function (mouseEvent: any) {
            // 클릭한 위도, 경도 정보를 가져옵니다
            const latlng = mouseEvent.latLng;

            // 마커 위치를 클릭한 위치로 옮깁니다
            marker.setPosition(latlng);

            const message = `위도 : ${String(latlng.getLat())} 경도: ${String(
              latlng.getLng()
            )}`;
            console.log(message);
          }
        );
      });
    };
  });
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
        <div id="map" style={{ width: "100%", height: "400px" }}></div>
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
