import { Equal, Expect } from "../helpers/type-utils";

export const fakeDataDefaults = {
  String: "Default string",
  Int: 1,
  Float: 1.14,
  Boolean: true,
  ID: "id",
};

type FakeDataValues = typeof fakeDataDefaults;
export type StringType = FakeDataValues['String'];
export type IntType = FakeDataValues['Int'];
export type FloatType = FakeDataValues['Float'];
export type BooleanType = FakeDataValues['Boolean'];
export type IDType = FakeDataValues['ID'];

type tests = [
  Expect<Equal<StringType, string>>,
  Expect<Equal<IntType, number>>,
  Expect<Equal<FloatType, number>>,
  Expect<Equal<BooleanType, boolean>>,
  Expect<Equal<IDType, string>>,
];
