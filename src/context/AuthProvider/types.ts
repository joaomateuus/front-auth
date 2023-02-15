export interface User {
    email?: string;
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

