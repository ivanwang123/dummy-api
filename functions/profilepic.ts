import { Handler } from "@netlify/functions";
import { optionalParam } from "utils/param";
import randomstring from "randomstring";

const sprites = [
  "male",
  "female",
  "human",
  "identicon",
  "initials",
  "bottts",
  "avataaars",
  "jdenticon",
  "gridy",
  "micah",
] as const;

type Sprite = typeof sprites[number];

const handler: Handler = async (e) => {
  try {
    const sprite = optionalParam<Sprite>(
      e.queryStringParameters?.sprite,
      "human",
      sprites
    );
    const seed = randomstring.generate({ length: 2, charset: "numeric" });

    return {
      statusCode: 200,
      body: `https://avatars.dicebear.com/api/${sprite}/${seed}.svg`,
    };
  } catch (e: any) {
    return {
      statusCode: 500,
      body: e.message,
    };
  }
};

export { handler };
