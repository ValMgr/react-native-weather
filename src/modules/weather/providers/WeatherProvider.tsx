import React, { useContext, createContext, useState, useMemo } from 'react';

type WeatherContextType = {
  location: {
    lat: number | null;
    lng: number | null;
  };
  setLocation: ({ lat, lng }: { lat: number; lng: number }) => void;
};

const WeatherContext = createContext<WeatherContextType>({
  location: {
    lat: null,
    lng: null,
  },
  setLocation: () => {},
});

interface IProps {
  children: React.ReactNode;
}

const WeatherProvider = ({ children }: IProps) => {
  const [location, setLocation] = useState<{ lat: number | null; lng: number | null }>({
    lat: null,
    lng: null,
  });

  const values = useMemo(() => ({ location, setLocation }), [location, setLocation]);

  return <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>;
};

const useWeather = () => useContext(WeatherContext);

export { WeatherProvider, useWeather };
