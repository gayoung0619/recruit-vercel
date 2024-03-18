import axios from 'axios';

export const fetchData = async ( data: Record<string, any>) => {
  try {
    const response = await axios.post('/mail', data, {
      headers: {
        "Content-Type": "application/json",
      }
    });

    return response.data;
  } catch (error) {
    console.error("Fetch error: ", (error as Error).message);
      throw error;
  } 
}