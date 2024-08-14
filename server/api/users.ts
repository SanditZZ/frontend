import { defineEventHandler } from "h3";
import axios from "axios";
import { User } from "~/types";

export default defineEventHandler(async (event) => {
  try {
    const { data } = await axios.get<User[]>("http://localhost:3000/users");
    return data;
  } catch (error: any) {
    return {
      error: true,
      message: error.message,
    };
  }
});
