import { memo } from "react";
import * as S from "./footer.styled";

function LayoutFooter(): JSX.Element {
  return <S.Wrapper>phone: 123-4567-8910</S.Wrapper>;
}
export default memo(LayoutFooter);
