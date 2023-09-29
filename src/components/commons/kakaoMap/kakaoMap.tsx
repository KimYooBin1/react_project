import { useEffect } from "react";

declare const window: typeof globalThis & {
  kakao: any;
};

interface IKakaoMapArg {
  lat?: number;
  lng?: number;
  ReadOnly: boolean;
}

export const KakaoMap = (props: IKakaoMapArg): JSX.Element => {
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
          center: new window.kakao.maps.LatLng(
            props.lat ?? 33.450701,
            props.lng ?? 126.570667
          ),
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
        !props.ReadOnly &&
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

  return (
    <>
      <div id="map" style={{ width: "100%", height: "400px" }}></div>
    </>
  );
};
