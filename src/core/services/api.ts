import { METEO_API_URL, GOOGLE_API_URL, GOOGLE_API_KEY } from '@core/constants/api';

export const fetchData = async (path: string, method: string = 'GET'): Promise<any> => {
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');

  const data = fetch(`${METEO_API_URL}/${path}`, {
    method,
    headers,
  })
    .then((response) => response.json())
    .catch((error) => {
      throw new Error(error.message);
    });

  return data;
};

export const geocodeCity = async (city: string): Promise<{ lat: number; lng: number }> => {
  const url = `${GOOGLE_API_URL}?address=${city}&key=${GOOGLE_API_KEY}`;

  const data = fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const { lat, lng } = data.results[0].geometry.location;

      return { lat, lng };
    })
    .catch((error) => {
      throw new Error(error.message);
    });

  return data;
};
