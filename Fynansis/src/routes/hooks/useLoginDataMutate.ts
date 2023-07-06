import { useMutation } from "react-query";
import axios, { AxiosPromise } from "axios"
import { LoginData } from "../../interface/loginData"; 

const API_URL = 'http://localhost:8080/usuario'

const postData = async (data: LoginData): AxiosPromise<any> => {
    const response = axios.post(API_URL + '/login', data)
    return response
}

export function useLoginDataMutate(){
    const mutate = useMutation({
        mutationFn: postData,
        retry: 2
    })

    return mutate

}