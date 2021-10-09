import { Handler } from "@netlify/functions";
import axios from "axios";

type Response = {
  results: any[];
};

const getUser = async () => {
  const res = await axios.get<Response>("https://randomuser.me/api?noinfo");
  return JSON.stringify(res.data.results[0]);
};

const handler: Handler = async (_e) => {
  try {
    const user = await getUser();
    return {
      statusCode: 200,
      body: user,
    };
  } catch (e: any) {
    return {
      statusCode: 500,
      body: e.message,
    };
  }
};

export { handler };
