const { shallow } = require('enzyme');
const React = require('react');
const renderer = require('react-test-renderer');

const Index = '../pages/index.js';

describe('With Enzyme', () => {
  it('Index shows "Application Content"', () => {
    const index = shallow(<Index />).dive();

    expect(index.find('h3').text()).toEqual('Application Content');
  });
});
