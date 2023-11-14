import { useRouter } from "next/router";
interface IUseMoveToPageReturn {
  onClickMoveToPage: (url: string) => () => void;
}
export const useMoveToPage = (): IUseMoveToPageReturn => {
  const router = useRouter();
  const onClickMoveToPage = (url: string) => () => {
    void router.push(`${url}`);
  };
  return { onClickMoveToPage};
};
