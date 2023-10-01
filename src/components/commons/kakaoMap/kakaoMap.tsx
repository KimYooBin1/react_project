import { useEffect, useState } from "react";
import { alertError } from "../../../commons/libraries/modal";

declare const window: typeof globalThis & {
  kakao: any;
};

interface IKakaoMapArg {
  ReadOnly: boolean;
  address?: string;
  setLat: any;
  setLng: any;
}

export const KakaoMap = (props: IKakaoMapArg): JSX.Element => {
  const [currentLat, setCurrentLat] = useState(0);
  const [currentLng, setCurrentLng] = useState(0);
  useEffect(() => {
    // 여기서 직접 다운로드 받고, 다 받을때까지 기다렸다가 그려주기!!
    const script = document.createElement("script"); // html에 script라는 태그(Element)를 만든다.
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=746499a2a0d1cbaad8cf789b53b38e23&libraries=services&autoload=false";
    document.head.appendChild(script);

    script.onload = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
          setCurrentLat(position.coords.latitude);
          setCurrentLng(position.coords.longitude);
        });
      } else {
        alertError("위치 정보를 허가해주세요");
        setCurrentLat(33.450701);
        setCurrentLng(126.570667);
      }

      window.kakao.maps.load(function () {
        const container = document.getElementById("map");
        const options = {
          center: new window.kakao.maps.LatLng(currentLat, currentLng),
          level: 3,
        };
        const map = new window.kakao.maps.Map(container, options);
        const marker = new window.kakao.maps.Marker({
          // 지도 중심좌표에 마커를 생성합니다
          position: map.getCenter(),
        });
        // 지도에 마커를 표시합니다
        marker.setMap(map);
        if (navigator.geolocation) {
          const infowindow = new window.kakao.maps.InfoWindow({
            content:
              '<div style="width:150px;text-align:center;padding:6px 0;">현재 위치</div>',
          });
          infowindow.open(map, marker);
        }

        // // 지도에 클릭 이벤트를 등록합니다
        // // 지도를 클릭하면 마지막 파라미터로 넘어온 함수를 호출합니다
        // !props.ReadOnly &&
        //   window.kakao.maps.event.addListener(
        //     map,
        //     "click",
        //     function (mouseEvent: any) {
        //       // 클릭한 위도, 경도 정보를 가져옵니다
        //       const latlng = mouseEvent.latLng;

        //       // 마커 위치를 클릭한 위치로 옮깁니다
        //       marker.setPosition(latlng);

        //       const message = `위도 : ${String(latlng.getLat())} 경도: ${String(
        //         latlng.getLng()
        //       )}`;
        //       console.log(message);
        //     }
        //   );

        if (typeof props.address !== "undefined") {
          const geocoder = new window.kakao.maps.services.Geocoder();
          // 주소로 좌표를 검색합니다
          geocoder.addressSearch(
            props.address,
            function (result: any, status: any) {
              // 정상적으로 검색이 완료됐으면
              if (status === window.kakao.maps.services.Status.OK) {
                const coords = new window.kakao.maps.LatLng(
                  result[0].y,
                  result[0].x
                );

                props.setLat(result[0].y);
                props.setLng(result[0].x);

                // 결과값으로 받은 위치를 마커로 표시합니다
                const marker = new window.kakao.maps.Marker({
                  map,
                  position: coords,
                });

                // 인포윈도우로 장소에 대한 설명을 표시합니다
                const infowindow = new window.kakao.maps.InfoWindow({
                  content: `<div style="width:150px;text-align:center;padding:6px 0;">${
                    props.address ?? ""
                  }</div>`,
                });
                infowindow.open(map, marker);

                // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
                map.setCenter(coords);
              }
            }
          );
        }
      });
    };
  });

  return (
    <>
      <div id="map" style={{ width: "100%", height: "400px" }}></div>
    </>
  );
};
