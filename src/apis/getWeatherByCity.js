export default async (cityName) => {
  const url = `https://api.weatherapi.com/v1/forecast.json?key=88016988f0944ac0a3b103809211206&q=${cityName}&days=3&aqi=no&alerts=no`;
  const req = await fetch(url);
  const result = await req.json();
  return result;
};
