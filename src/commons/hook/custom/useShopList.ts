import { useState } from "react";
import type { IQuery } from "../../types/generated/types";

interface IUseShopListArg {
  data?: Pick<IQuery, "fetchUseditems">;
  fetchMore: any;
}

export const useShopList = (arg: IUseShopListArg) => {
  const [length, setLength] = useState(0);

  const onLoadFunc = (): void => {
    if (arg.data === undefined) return;

    void arg.fetchMore({
      variables: {
        page: Math.ceil(arg.data?.fetchUseditems.length / 10) + 1,
      },
      updateQuery: (prev: any, { fetchMoreResult }: any) => {
        if (fetchMoreResult?.fetchUseditems === undefined) {
          return { fetchUseditems: [...prev.fetchUseditems] };
        }
        setLength((prev) => prev + 10);
        return {
          fetchUseditems: [
            ...prev.fetchUseditems,
            ...fetchMoreResult.fetchUseditems,
          ],
        };
      },
    });
  };

  return { onLoadFunc, length };
};
