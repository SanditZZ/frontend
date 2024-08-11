import { defineEventHandler } from 'h3';
import axios from 'axios';

export default defineEventHandler(async (event) => {
  try {
    const { data } = await axios.get('http://localhost:1337/api/farms');
    return data;
  } catch (error: any) {
    return {
      error: true,
      message: error.message,
    };
  }
});
