import { CustomError } from '../types/CustomError';

export async function getTopSales() {
  const response = await fetch('http://localhost:7070/api/top-sales');
  if (!response.ok) {
    const error: CustomError = new Error(response.statusText);
    error.response = response;
    throw error;
  }
  return await response.json();
}

export async function getCard(id: string) {
  try {
    const request = await fetch(`http://localhost:7070/api/items/${id}`);
    if (request.ok) {
      const data = await request.json();
      return data;
    }
  } catch (error) {
    console.log(error);
  }
}
