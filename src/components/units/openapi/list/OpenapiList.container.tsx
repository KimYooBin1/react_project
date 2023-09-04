import axios from "axios";
import { useEffect, useState } from "react";
import OpenapiListUI from "./OpenapiList.presenter";

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
  return <OpenapiListUI imgsrc={imgsrc} onClickBtn={onClickBtn} />;
}
