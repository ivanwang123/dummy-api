import { Handler } from "@netlify/functions";
import { numericParam } from "utils/param";

const handler: Handler = async (e) => {
  try {
    const width = numericParam(e.queryStringParameters?.width, 100);
    const height = numericParam(e.queryStringParameters?.height, 100);
    // TODO: Add blur and grayscale parameters

    return {
      statusCode: 200,
      body: `https://picsum.photos/${width}/${height}`,
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
