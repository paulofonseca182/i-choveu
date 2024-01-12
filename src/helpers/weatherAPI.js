// Remova os comentários a medida que for implementando as funções
const { VITE_TOKEN } = import.meta.env;

export const searchCities = async (city) => {
  const URL_API = `http://api.weatherapi.com/v1/search.json?lang=pt&key=${VITE_TOKEN}&q=${city}`;
  try {
    const getCity = await fetch(URL_API).then((response) => response.json())
      .then((data) => data);

    if (getCity.length === 0) {
      alert('Nenhuma cidade encontrada');
    }
    return getCity;
  } catch (error) {
    return error.message;
  }
};

export const getWeatherByCity = async (urlCity) => {
  const urlCities = `http://api.weatherapi.com/v1/current.json?lang=pt&key=${VITE_TOKEN}&q=${urlCity}`;
  try {
    const getCity = await fetch(urlCities).then((response) => response.json())
      .then((data) => data);

    const response = {
      temp: getCity.current.temp_c,
      condition: getCity.current.condition.text,
      icon: getCity.current.condition.icon,
      country: getCity.location.country,
      name: getCity.location.name,
      url: urlCity,
    };
    return response;
  } catch (error) {
    return error.message;
  }
};
