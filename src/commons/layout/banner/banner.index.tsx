import { Carousel } from "antd";
import { contentStyle } from "./banner.styled";

export default function LayoutBanner(): JSX.Element {
  return (
    <Carousel autoplay>
      <div>
        <img src="/img/menuBackground(1).png" style={contentStyle} />
      </div>
      <div>
        <img src="/img/menuBackground(4).png" style={contentStyle} />
      </div>
      <div>
        <img src="/img/menuBackground(3).png" style={contentStyle} />
      </div>
      <div>
        <img src="/img/menuBackground.png" style={contentStyle} />
        {/* <img src="/img/menuBackground(2).png" style={contentStyle} /> */}
      </div>
    </Carousel>
  );
}
