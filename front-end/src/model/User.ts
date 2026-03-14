export interface User {
    readonly id: number;
    readonly name: string;
    readonly email: string;
    readonly password: string;
    readonly image: string | null;
}

export function getUserFullName(user: User): string {
    return user.name.slice(0, 1).toUpperCase() + user.name.slice(1);
}