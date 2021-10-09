import { Handler } from "@netlify/functions";
import axios from "axios";

type Response = {
  id: number;
  name: string;
  location: string;
  designation: string;
  avatar: string;
  message: string;
  lorem: string;
  rating: number;
  audio: string;
};

const getTestimonials = async () => {
  const res = await axios.get<Response[]>(
    "https://testimonialapi.toolcarton.com/api"
  );
  return JSON.stringify(res.data);
};

const handler: Handler = async (e) => {
  try {
    const testimonials = await getTestimonials();
    return {
      statusCode: 200,
      body: testimonials,
    };
  } catch (e: any) {
    return {
      statusCode: 500,
      body: e.message,
    };
  }
};

export { handler };
