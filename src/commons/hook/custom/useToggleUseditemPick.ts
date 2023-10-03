import { useRouter } from "next/router";
import { alertError } from "../../libraries/modal";
import useMutationToggleUseditemPick from "../mutation/useMutationtoggleUseditemPick";
import { FETCH_USED_ITEM } from "../query/useQueryFetchUsedItem";

interface IToggleUseditemPick {
  useditemId: string;
}

export default function useToggleUseditemPick(props: IToggleUseditemPick) {
  const [toggleUsedPick] = useMutationToggleUseditemPick();
  const router = useRouter();
  const onClickPickBtn = async (): Promise<void> => {
    try {
      await toggleUsedPick({
        variables: {
          useditemId: props.useditemId,
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM,
            variables: {
              useditemId: props.useditemId,
            },
          },
        ],
      });
    } catch (error) {
      if (error instanceof Error) {
        alertError("로그인을 해주세요");
        void router.push("/login");
      }
    }
  };
  return { onClickPickBtn };
}
