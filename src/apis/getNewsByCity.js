export default async (cityName) => {
  const url = `https://newsapi.org/v2/everything?q=${cityName} climate&sortBy=popularity&apiKey=e6b7fce6c57b459a9d5f132b924cd33d`;
  const req = await fetch(url);
  const result = await req.json();
  return result;
};
