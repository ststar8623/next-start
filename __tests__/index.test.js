import { shallow, mount } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';

import Index from '../pages/index.js';
import Signin from '../pages/signin.js';

describe('Testing Jest', () => {
  it('Testing true to be true', () => {
    expect(true).toBe(true);
  });
});

describe('With Enzyme', () => {
  it('Index shows "Application Content"', () => {
    const index = mount(<Index />);

    expect(index.find('h3').text()).toEqual('Application Content');
  });
});

// describe('With Snapshot Testing', () => {
//   it('App shows "Applcation Content"', () => {
//     const component = renderer.create(<Index />);
//     const tree = component.toJSON();
//     expect(tree).toMatchSnapshot();
//   });
// });

// describe('With Enzyme', () => {
//   it('Signin shows "Sign in"', () => {
//     const signin = shallow(<Signin />).dive();

//     expect(signin.find('h1').text()).toEqual('Sign in');
//   });
// });
