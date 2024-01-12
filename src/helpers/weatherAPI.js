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

export const getWeatherByCity = (/* cityURL */) => {
  //   seu código aqui!
};
