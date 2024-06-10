import { Equal, Expect } from "../helpers/type-utils";

type Fruit = "apple" | "banana" | "orange";

type Filter<T, U> = T extends U ? T : never;
type Diff<T, U> = T extends U ? never : T;

// type AppleOrBanana = Diff<Fruit, "orange">;
type AppleOrBanana =  Filter<Fruit, "apple" | "banana">

type tests = [Expect<Equal<AppleOrBanana, "apple" | "banana">>];
