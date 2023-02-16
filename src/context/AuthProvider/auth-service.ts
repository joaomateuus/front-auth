import { Api } from "../../services/api";
import dayjs from "dayjs";
import jwt_decode from "jwt-decode";
import { getUserFromLocalStorage, setUserToLocalStorage } from "./token-manager";
import { DecodedJwtPayload, User } from "./types";

export async function login(email: string, password: string) {
    try {
        const request = await Api.post('login', {email, password});
        return request.data
    } catch (error) {
        console.log(error);
    }
}

export async function updateRefreshToken(refresh_token: string) {
    try {
        const request = await Api.post("refresh_token", refresh_token);
        return request.data;
    } catch (error) {
        console.log(error);
    }
}

Api.interceptors.request.use(
    async (config) => {
        const user = getUserFromLocalStorage();
        const user_payload = jwt_decode(user?.token) as DecodedJwtPayload
        const isExpired = dayjs().isAfter(dayjs.unix(user_payload?.exp))

        if(!isExpired) {
            config.headers.Authorization = `Bearer ${user?.token}`;
            return config;
        }
        
        // E se tiver expirado pegar um novo com refresh_token
        const user_tokens = await updateRefreshToken(user.refresh_token);
        setUserToLocalStorage(user_tokens);
        config.headers.Authorization = `Bearer ${user_tokens?.token}`;
        return config
    },
    (error) => {
        return Promise.reject(error);
    }
)

