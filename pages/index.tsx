import LayoutHeader from "../src/commons/layout/header";
import LayoutBanner from "../src/commons/layout/banner";
import LayoutNavigation from "../src/commons/layout/navigation";
import LayoutFooter from "../src/commons/layout/footer";
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
