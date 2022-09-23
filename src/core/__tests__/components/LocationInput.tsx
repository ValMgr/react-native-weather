import renderer from 'react-test-renderer';

import { LocationInput } from '@modules/weather/components/LocationInput';

test('LocationInput renders correctly', () => {
  const tree = renderer.create(<LocationInput />).toJSON();
  expect(tree).toMatchSnapshot();
});