import { S } from "ts-toolbelt";
import { Equal, Expect } from "../helpers/type-utils";

type UserPath = "/users/:id";

type UserOrganisationPath = "/users/:id/organisations/:organisationId";

 type ExtractPathParams<T extends string > = {
  [Part in S.Split<T, '/'>[number] as Part extends `:${infer Segment}` ? Segment : never ]: string;
 }
 
type Example = ExtractPathParams<UserPath>

type tests = [
  Expect<Equal<ExtractPathParams<UserPath>, { id: string }>>,
  Expect<
    Equal<
      ExtractPathParams<UserOrganisationPath>,
      { id: string; organisationId: string }
    >
  >,
];
