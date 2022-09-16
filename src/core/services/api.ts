import { METEO_API_URL, GOOGLE_API_URL, GOOGLE_API_KEY, DAYS_TO_SHOW } from '@core/constants/api';

export const fetchWeather = async (
  location: { lat: number | null; lng: number | null },
  method: string = 'GET',
): Promise<any> => {
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');

  const start_date = new Date().toISOString().slice(0, 10);
  const end_date = new Date(new Date().setDate(new Date().getDate() + (DAYS_TO_SHOW - 1))).toISOString().slice(0, 10);

  const data = fetch(
    `${METEO_API_URL}/forecast?latitude=${location.lat}&longitude=${location.lng}&timezone=auto&daily=weathercode,temperature_2m_max,temperature_2m_min&start_date=${start_date}&end_date=${end_date}`,
    {
      method,
      headers,
    },
  )
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
