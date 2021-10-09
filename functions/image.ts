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
    };
  } catch (e: any) {
    return {
      statusCode: 500,
      body: e.message,
    };
  }
};

export { handler };
