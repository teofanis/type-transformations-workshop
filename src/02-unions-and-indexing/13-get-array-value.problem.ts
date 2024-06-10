import { Equal, Expect } from "../helpers/type-utils";

const fruits = ["apple", "banana", "orange"] as const;

type Fruits = typeof fruits[number];
type AppleOrBanana = Exclude<Fruits, "orange">;
type Fruit = Fruits;

type tests = [
  Expect<Equal<AppleOrBanana, "apple" | "banana">>,
  Expect<Equal<Fruit, "apple" | "banana" | "orange">>,
];
