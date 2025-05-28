export * from "./number";
export * from "./enum";

export type Optional<T, K extends keyof T = keyof T> = {
    [P in keyof T]: P extends K ? T[P] | undefined : T[P];
}