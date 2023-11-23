import styled from "@emotion/styled";
import LayoutHeader from "./header/header.index";
import LayoutBanner from "./banner/banner.index";
import LayoutNavigation from "./navigation/navigation.index";
import LayoutFooter from "./footer/footer.index";

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
