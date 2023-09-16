import { useRouter } from "next/router";

export const useIdChecker = (id: string) => {
  const router = useRouter();
  const queryId = router.query[id];
  if (queryId === undefined) return { id: "" };
  if (typeof queryId === "string") return { id: queryId };
  if (typeof queryId === "object") return { id: queryId[0] };
  return { id: "" };
};
