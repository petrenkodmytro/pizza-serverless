import type { Handler } from "@netlify/functions";
import { GraphQLClient } from "graphql-request";
import jwt from "jsonwebtoken";
import crypto from "crypto";
import { getSdk } from "../common/sdk";

interface AdmimRegisterInput {
  username: string;
  password: string;
}

export const handler: Handler = async (event, context) => {
  const { body } = event;
  const input: AdmimRegisterInput = JSON.parse(body!).input.admin;
  //console.log(input); //{ password: 'pizzareg', username: 'pizzareg' }

  const sdk = getSdk(new GraphQLClient("http://localhost:8080/v1/graphql"));

  const password = crypto.pbkdf2Sync(input.password, "mygreatsaltsecret", 1000, 64, "sha512").toString("hex");

  const data = await sdk.InsertAdmin({ username: input.username, password });
  // console.log(data);

  const accessToken = jwt.sign(
    {
      "https://hasura.io/jwt/claims": {
        "x-hasura-default-role": "admin",
        "x-hasura-allowed-roles": ["admin"],
        "x-hasura-user-id": data.insert_admin?.returning[0].id,
      }, // validation
    },
    "mygreatjwtsecret"
  );

  return {
    body: JSON.stringify({ accessToken: accessToken }),
    statusCode: 200,
  };
};
