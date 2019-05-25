export const PI = 3.14159;

export function mean(...args) {
    return (args.reduce((x, c) => x + c) / args.length);
}