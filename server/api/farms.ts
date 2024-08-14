import { defineEventHandler } from "h3";
import axios from "axios";
import { Farm } from "~/types";

export default defineEventHandler(async (event) => {
  try {
    const { data } = await axios.get<Farm[]>("http://localhost:3000/farms");
    return data;
  } catch (error: any) {
    return {
      error: true,
      message: error.message,
    };
  }
});
