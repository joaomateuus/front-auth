export interface User {
    token?: string;
    refresh_token?: string;
}

export interface Context extends User {
    authenticate: (email: string, password: string) => Promise<void>;
    logout: () => void;
}

export interface ProviderAuth {
    children: JSX.Element;
}

export interface DecodedJwtPayload {
    user_id: number;
    iat: number; // issued at time (Unix timestamp)
    exp: number; // expiration time (Unix timestamp)
    [key: string]: unknown; // additional custom claims
}
