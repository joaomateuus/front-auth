import { Api } from "./api";

export async function login(email: string, password: string) {
    const response = await Api.post('account/auth/login', {email, password});

    let errors = null;

    if(!response.data) {
        errors = {
            status: response.status,
            message: response.statusText
        }
    }

    return {
        data: response.data,
        errors
    }
}

export async function updateRefreshToken(refresh_token: string) {
    const response = await Api.post('account/auth/refresh_token', {refresh_token});

    let errors = null;

    if(!response.data) {
        errors = {
            status: response.status,
            message: response.statusText
        }
    }

    return {
        data: response.data,
        errors
    }
}

// Api.interceptors.request.use(
//     async (config) => {
//         const user = getUserFromLocalStorage();
//         const user_payload = jwt_decode(user?.token) as DecodedJwtPayload
//         const isExpired = dayjs().isAfter(dayjs.unix(user_payload?.exp))

//         if(!isExpired) {
//             config.headers.Authorization = `Bearer ${user?.token}`;
//             return config;
//         }
        
//         // E se tiver expirado pegar um novo com refresh_token
//         const user_tokens = await updateRefreshToken(user.refresh_token);
//         setUserToLocalStorage(user_tokens);
//         config.headers.Authorization = `Bearer ${user_tokens?.token}`;
//         return config
//     },
//     (error) => {
//         return Promise.reject(error);
//     }
// )

