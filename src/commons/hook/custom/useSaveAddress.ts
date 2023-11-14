import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { preUrl } from "../../stores";

export default function useSaveAddress(){
    const router = useRouter();
    const [preAddress, setPreAddress] = useRecoilState(preUrl)
    return {router, preAddress, setPreAddress};
}