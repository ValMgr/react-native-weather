import renderer from 'react-test-renderer';

import { Header } from '@core/components/Header';

test('Header renders correctly', () => {
  const tree = renderer.create(<Header />).toJSON();
  expect(tree).toMatchSnapshot();
});