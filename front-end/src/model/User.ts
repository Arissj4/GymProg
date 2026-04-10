export interface User {
    readonly id: number;
    readonly name: string;
    readonly email: string;
    readonly authenticated: boolean;
}

export function getUserFullName(user: User): string {
    return user.name.slice(0, 1).toUpperCase() + user.name.slice(1);
}

export function getAuthenticated(user: User): boolean {
    return user.authenticated;
}