const key = "7WxcdKuq3elrMLuUHJWc0xJQtrOKZuX9";

//Get Weather Information

const getWeather = async (locationKey) => {
  const base = "http://dataservice.accuweather.com/currentconditions/v1/";
  const query = `${locationKey}?apikey=${key}`;

  const response = await fetch(base + query);
  const data = response.json();
  return data;
};

// Get City information
const getCity = async (city) => {
  const base = "http://dataservice.accuweather.com/locations/v1/cities/search";
  const query = `?apikey=${key}&q=${city}`;

  const response = await fetch(base + query);
  const data = await response.json();

  return data[0];
};
