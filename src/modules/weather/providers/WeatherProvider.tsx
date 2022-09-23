import { useContext, createContext, useState, useMemo } from 'react';

type WeatherContextType = {
  location: {
    lat: number | null;
    lng: number | null;
  };
  setLocation: ({ lat, lng }: { lat: number; lng: number }) => void;
  city: string | null;
  setCity: (city: string) => void;
};

const WeatherContext = createContext<WeatherContextType>({
  location: {
    lat: null,
    lng: null,
  },
  setLocation: () => {},
  city: null,
  setCity: () => {},
});

interface IProps {
  children: React.ReactNode;
}

const WeatherProvider = ({ children }: IProps) => {
  const [location, setLocation] = useState<{ lat: number | null; lng: number | null }>({
    lat: null,
    lng: null,
  });
  const [city, setCity] = useState<string | null>(null);

  const values = useMemo(() => ({ location, setLocation, city, setCity }), [location, setLocation, city, setCity]);

  return <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>;
};

const useWeather = () => useContext(WeatherContext);

export { WeatherProvider, useWeather };
