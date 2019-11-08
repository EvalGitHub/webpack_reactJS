import renderer from 'react-test-renderer';
import * as React from 'react';
import Link from './index';
test('renders correctly', () => {
  const component = renderer
    .create(<Link page="http://www.facebook.com">Facebook</Link>)
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  tree.props.onMouseEnter();
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  tree.props.onMouseLeave();
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});