import axios, { AxiosError } from 'axios'
import { parseCookies, setCookie } from 'nookies'

let cookies = parseCookies()

interface AxiosErrorResponse {
    code?: string;
  }

export const api = axios.create({
    baseURL: 'http://localhost:3333',
    headers: {
        Authorization: `Bearer ${cookies['nextauth.token']}`
    }
});

api.interceptors.response.use(response => {
    return response;
}, (error: AxiosError<AxiosErrorResponse>) => {
    if (error.response.status === 401) {
        if (error.response.data?.code === 'token.expired') {
            cookies = parseCookies();

            const {'nextauth.refreshToken':refreshToken}= cookies;

            api.post('/refresh',{
                refreshToken,
            }).then(response=>{
                const {token} = response.data;

                setCookie(undefined, 'nextauth.token', token, {
                    maxAge: 60 * 60 * 24 * 30,
                    path: '/'
                })
                setCookie(undefined, 'nextauth.refreshToken', refreshToken,{
                    maxAge: 60 * 60 * 24 * 30,
                    path: '/'
                })
            })
            //renovar token expired
        }else{
            //deslogar o usuario
        }
    }
})