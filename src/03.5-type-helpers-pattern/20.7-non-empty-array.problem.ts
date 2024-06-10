type NonEmptyArray<T> = [T, ...T[]] // At least 1, at least 2 (T, T, ...T[]) etc... 

export const makeEnum = (values: NonEmptyArray<string>) => {};

makeEnum(["a"]);
makeEnum(["a", "b", "c"]);

// @ts-expect-error
makeEnum([]);
