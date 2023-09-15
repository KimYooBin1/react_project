import LayoutHeader from "../src/commons/layout/header/header.index";
import LayoutBanner from "../src/commons/layout/banner/banner.index";
import LayoutNavigation from "../src/commons/layout/navigation/navigation.index";
import LayoutFooter from "../src/commons/layout/footer/footer.index";
import styled from "@emotion/styled";

interface ILayout {
  children: JSX.Element;
}

const Body = styled.div``;

export default function Layout(props: ILayout): JSX.Element {
  return (
    <>
      <LayoutHeader />
      <LayoutBanner />
      <LayoutNavigation />
      <Body>{props.children}</Body>
      <LayoutFooter />
    </>
  );
}
