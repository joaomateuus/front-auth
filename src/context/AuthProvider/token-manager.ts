import { User } from "./types";

export function setUserToLocalStorage(user: User | null) {
    localStorage.setItem("u_t", JSON.stringify(user));
}

export function getUserFromLocalStorage() {
    const json = localStorage.getItem("u_t");

    if(!json) {
        return null;
    }

    const user = JSON.parse(json);
    return user ? user : null;
}
