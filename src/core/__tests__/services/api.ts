import { fetchWeather, geocodeCity } from '@core/services/api';

// Create test unit for fetchWeather function
const locationToFetch = { lat: 44.837789, lng: -0.57918 };

describe('fetchWeather', () => {
  it('should return a promise', () => {
    expect(fetchWeather(locationToFetch)).toBeInstanceOf(Promise);
    expect(fetchWeather(locationToFetch));
  });
});

const cityToGeocode = 'Bordeaux';

describe('geocodeCity', () => {
  it('should return a promise', () => {
    expect(geocodeCity(cityToGeocode)).toBeInstanceOf(Promise);
  });

  it('should return an object with lat and lng properties', async () => {
    const result = await geocodeCity(cityToGeocode);

    expect(result).toHaveProperty('lat');
    expect(result).toHaveProperty('lng');
  });

  it('should return the correct coordinates', async () => {
    const result = await geocodeCity(cityToGeocode);

    expect(result).toEqual({ lat: 44.837789, lng: -0.57918 });
  });
});
