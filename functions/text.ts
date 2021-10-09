import { Handler } from "@netlify/functions";
import axios from "axios";
import { numericParam, optionalParam } from "utils/param";

const styles = ["lorem", "article", "book"] as const;
const lengths = ["short", "medium", "long", "verylong"] as const;

type Style = typeof styles[number];
type Length = typeof lengths[number];

type Response = {
  source: string;
  paragraphs: string[];
};

const getLoremText = async (paragraphs: number, length: Length) => {
  const res = await axios.get<string>(
    `https://loripsum.net/api/${paragraphs}/${length}/plaintext`
  );
  return res.data.trim();
};

const getArticleText = async (paragraphs: number) => {
  const res = await axios.get<Response>(
    `https://corporatelorem.kovah.de/api/${paragraphs}?paragraphs=true`
  );
  return res.data.paragraphs.join("\n\n");
};

const getBookText = async (paragraphs: number) => {
  const res = await axios.get<Response>(
    `https://devlorem.kovah.de/api/${paragraphs}?paragraphs=true`
  );
  return res.data.paragraphs.join("\n\n");
};

const handler: Handler = async (e) => {
  try {
    const style = optionalParam<Style>(
      e.queryStringParameters?.style,
      "lorem",
      styles
    );
    const paragraphs: number = numericParam(
      e.queryStringParameters?.paragraphs,
      1
    );

    let res: string = "";
    switch (style) {
      case "lorem":
        const length = optionalParam<Length>(
          e.queryStringParameters?.length,
          "short",
          lengths
        );
        res = await getLoremText(paragraphs, length);
        break;
      case "article":
        res = await getArticleText(paragraphs);
        break;
      case "book":
        res = await getBookText(paragraphs);
        break;
    }

    return {
      statusCode: 200,
      body: res,
    };
  } catch (e: any) {
    return {
      statusCode: 500,
      body: e.message,
    };
  }
};

export { handler };
