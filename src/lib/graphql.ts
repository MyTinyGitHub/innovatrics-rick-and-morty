import { createClient } from "urql";

const url = "https://rickandmortyapi.com/graphql/";
export const client = createClient({ url });
