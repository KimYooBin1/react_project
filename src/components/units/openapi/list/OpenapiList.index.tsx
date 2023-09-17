import { useEffect, useState } from "react";
import * as info from "./OpenapiList.styles";
import axios from "axios";
export default function OpenapiList(): JSX.Element {
  const [imgsrc, setImgSrc] = useState<string[]>([]);
  const [count, setCount] = useState(0);
  const onClickBtn = (): void => {
    setImgSrc([]);
    setCount((prev) => prev + 1);
  };
  useEffect(() => {
    const fetchImg = async (): Promise<void> => {
      new Array(9).fill(1).forEach(async (_) => {
        const result = await axios.get(
          `http://shibe.online/api/shibes?count=${count}&urls=true&httpsUrls=true`
        );
        setImgSrc((prev) => [...prev, result.data[0]]);
      });
    };
    void fetchImg();
  }, [count]);
  return (
    <info.Body>
      <info.Wrapper>
        <info.ImgBox>
          {imgsrc.map((el, index) => (
            <info.ImgDog src={el} key={el} />
          ))}
        </info.ImgBox>
        <info.Btn onClick={onClickBtn}>다른 시바시바</info.Btn>
      </info.Wrapper>
    </info.Body>
  );
}
