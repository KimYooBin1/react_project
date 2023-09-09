import { Carousel } from "antd";

const contentStyle: React.CSSProperties = {
  width: "100%",
  height: "400px",
  color: "#fff",
  lineHeight: "200px",
  textAlign: "center",
  overflow: "hidden",
  objectFit: "cover",
  opacity: "1",
  filter: "brightness(40%)",
};

export default function LayoutBanner(): JSX.Element {
  return (
    <Carousel autoplay>
      <div>
        <img src="/img/menuBackground.png" style={contentStyle} />
      </div>
      <div>
        <img src="/img/menuBackground.png" style={contentStyle} />
      </div>
      <div>
        <img src="/img/menuBackground.png" style={contentStyle} />
      </div>
      <div>
        <img src="/img/menuBackground(2).png" style={contentStyle} />
      </div>
    </Carousel>
  );
}
