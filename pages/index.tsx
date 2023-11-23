import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home(): JSX.Element {
  const router = useRouter();
  useEffect(() => {
    router.push("/boards/page");
  }, []);
  return <></>;
}
