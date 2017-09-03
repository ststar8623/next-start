import { shallow } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';

import Index from '../pages/';

describe('With Enzyme', () => {
  it('Index shows "Application Content"', () => {
    const index = shallow(<Index />);

    expect(index.find('h3').text()).toEqual('Application Content');
  });
});
