import { Handler } from "@netlify/functions";

const handler: Handler = async (e) => {
  return {
    statusCode: 200,
    body: "Welcome to the Dummy API! Check out 'https://github.com/ivanwang123/dummy-api' for more details.",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Methods": "GET, POST, OPTION",
    },
  };
};

export { handler };
