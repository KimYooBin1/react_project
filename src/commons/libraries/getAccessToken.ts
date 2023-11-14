import { gql } from "@apollo/client"
import { GraphQLClient } from "graphql-request"
import type { IMutation } from "../types/generated/types"
import { useRecoilState } from "recoil"
import { isLoginState } from "../stores"

const RESTORE_ACCESS_TOKEN = gql`
    mutation{
        restoreAccessToken{
            accessToken
        }
    }
`

export const getAccessToken = async () : Promise<string> =>{
    const [, setIsLogin] = useRecoilState(isLoginState);
    try{
        const graphqlClient = new GraphQLClient(
            "https://backend-practice.codebootcamp.co.kr/graphql", 
            {credentials:"include"}
        )
        const result = await graphqlClient.request<Pick<IMutation,"restoreAccessToken">>(RESTORE_ACCESS_TOKEN);
        if(result) setIsLogin(true);
        return result.restoreAccessToken.accessToken
    }catch(error){
        if(error instanceof Error){
            console.log(error.message)
        }
    }
    return ""
}