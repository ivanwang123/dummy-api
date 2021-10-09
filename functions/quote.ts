import { Handler } from "@netlify/functions";
import axios from "axios";

type Response = {
  _id: string;
  tags: string[];
  content: string;
  author: string;
  authorSlug: string;
  length: number;
  dateAdded: Date;
  dateModified: Date;
};

const getQuote = async () => {
  const res = await axios.get<Response>("https://api.quotable.io/random");
  return res.data.content;
};

const handler: Handler = async (e) => {
  try {
    const quote = await getQuote();
    return {
      statusCode: 200,
      body: quote,
    };
  } catch (e: any) {
    return {
      statusCode: 500,
      body: e.message,
    };
  }
};

export { handler };
