import renderer from 'react-test-renderer';

import { WeatherCard } from '@modules/weather/components/WeatherCard';

const props = {
  day: 0,
  temperature_max: 22,
  temperature_min: 12,
  weather_code: 0,
};

test('WeatherCard renders correctly', () => {
  const tree = renderer.create(<WeatherCard {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});