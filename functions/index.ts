import { Handler } from "@netlify/functions";

const handler: Handler = async (e) => {
  return {
    statusCode: 200,
    body: "Welcome to the Random API! Check out 'https://github.com/ivanwang123/random-api' for more details.",
  };
};

export { handler };
