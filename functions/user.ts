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
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "GET, POST, OPTION",
      },
    };
  } catch (e: any) {
    return {
      statusCode: 500,
      body: e.message,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "GET, POST, OPTION",
      },
    };
  }
};

export { handler };
