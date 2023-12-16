import jwt from "jsonwebtoken";

export const signToken = (id: string) => {
  return jwt.sign(
    {
      "https://hasura.io/jwt/claims": {
        "x-hasura-default-role": "admin",
        "x-hasura-allowed-roles": ["admin"],
        "x-hasura-user-id": id,
      }, // validation
    },
    "2sJ63Qo39XeE0HHtTe0MfLmM2ojZGwhQ"
    // HASURA_GRAPHQL_JWT_SECRET
  );
};
