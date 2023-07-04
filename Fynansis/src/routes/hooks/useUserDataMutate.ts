import { useMutation, useQuery, useQueryClient } from "react-query";
import axios, { AxiosPromise } from "axios"
import { UserData } from "../../interface/userData"; 

const API_URL = 'http://localhost:8080/usuario'

const postData = async (data: UserData): AxiosPromise<any> => {
    const response = axios.post(API_URL + '/criar', data, 
    { 
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    })
    console.log(response)
    return response
}

export function useUserDataMutate(){
    const mutate = useMutation({
        mutationFn: postData,
        retry: 2
    })

    return mutate

}