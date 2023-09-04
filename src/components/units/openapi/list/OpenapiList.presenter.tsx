import * as info from "./OpenapiList.styles";
import type { IOpenapiList } from "./OpenapiList.type";
export default function OpenapiListUI(props: IOpenapiList): JSX.Element {
  return (
    <info.Body>
      <info.Wrapper>
        <info.ImgBox>
          {props.imgsrc.map((el, index) => (
            <info.ImgDog src={el} key={el} />
          ))}
        </info.ImgBox>
        <info.Btn onClick={props.onClickBtn}>다른 시바시바</info.Btn>
      </info.Wrapper>
    </info.Body>
  );
}
