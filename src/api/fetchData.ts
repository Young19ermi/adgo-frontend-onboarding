import axios from 'axios';

interface FetchDataParams {
  title: string;
  body: string;
}

export const fetchData = async ({ title, body }: FetchDataParams) => {
  const { data } = await axios.post('https://jsonplaceholder.typicode.com/todos/1', { title, body });
  return data;
};
