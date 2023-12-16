import type { Handler } from "@netlify/functions";
import { hashPassword } from "../common/password";
import { signToken } from "../common/jwt";
import { api } from "../common/api";
import { AdminRegisterInput } from "../common/sdk";

export const handler: Handler = async (event, context) => {
  const { body, headers } = event;

  if (!headers["x-pizzastack-secret-key"] || headers["x-pizzastack-secret-key"] !== "mypizzastacksecretkey") {
    // return ERROR
    return {
      statusCode: 403,
      body: JSON.stringify({ message: "x-pizzastack-secret-key is missing or invalid" }),
    };
  }

  const input: AdminRegisterInput = JSON.parse(body!).input.admin;
  //console.log(input); //{ password: 'pizzareg', username: 'pizzareg' }

  const password = hashPassword(input.password);

  const data = await api.InsertAdmin({ username: input.username, password }, { "x-hasura-admin-secret": "myadminsecretkey" });
  // console.log(data);

  const accessToken = signToken(data.insert_admin_one?.id);

  return {
    body: JSON.stringify({ accessToken: accessToken }),
    statusCode: 200,
  };
};
