import { useRouter } from "next/router";
import { alertError } from "../../libraries/modal";
import { gql } from "@apollo/client";
import useMutationToggleUseditemPick from "../mutation/useMutationToggleUseditemPick";

interface IToggleUseditemPick {
  useditemId: string;
}

const FETCH_USED_ITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      pickedCount
    }
  }
`;

export default function useToggleUseditemPick(props: IToggleUseditemPick) {
  const [toggleUsedPick] = useMutationToggleUseditemPick();
  const router = useRouter();
  const onClickPickBtn = async (): Promise<void> => {
    try {
      await toggleUsedPick({
        variables: {
          useditemId: props.useditemId,
        },
        update(cache, {data}){
          console.log(data);
          cache.writeQuery(
            {
              query:FETCH_USED_ITEM,
              variables:{useditemId: props.useditemId},
              data:{
                fetchUseditem:{
                _id:props.useditemId,
                __typename:"Board",
                pickedCount:data?.toggleUseditemPick
                }
              }
            }
          )
        }
        // refetchQueries: [
        //   {
        //     query: FETCH_USED_ITEM,
        //     variables: {
        //       useditemId: props.useditemId,
        //     },
        //   },
        // ],
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
