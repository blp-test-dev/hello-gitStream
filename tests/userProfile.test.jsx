import React from 'react';
import { shallow } from 'enzyme';
import UserProfile from './UserProfile';

describe('UserProfile', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<UserProfile />);
  });

  it('renders a form', () => {
    expect(wrapper.find('form')).toHaveLength(1);
  });

  it('renders input fields for first name, last name, email, and bio', () => {
    expect(wrapper.find('input[name="firstName"]')).toHaveLength(1);
    expect(wrapper.find('input[name="lastName"]')).toHaveLength(1);
    expect(wrapper.find('input[name="email"]')).toHaveLength(1);
    expect(wrapper.find('textarea[name="bio"]')).toHaveLength(1);
  });

  it('updates state when input fields change', () => {
    const firstNameInput = wrapper.find('input[name="firstName"]');
    firstNameInput.simulate('change', { target: { name: 'firstName', value: 'John' } });
    expect(wrapper.state('firstName')).toEqual('John');

    const lastNameInput = wrapper.find('input[name="lastName"]');
    lastNameInput.simulate('change', { target: { name: 'lastName', value: 'Doe' } });
    expect(wrapper.state('lastName')).toEqual('Doe');

    const emailInput = wrapper.find('input[name="email"]');
    emailInput.simulate('change', { target: { name: 'email', value: 'john.doe@example.com' } });
    expect(wrapper.state('email')).toEqual('john.doe@example.com');

    const bioInput = wrapper.find('textarea[name="bio"]');
    bioInput.simulate('change', { target: { name: 'bio', value: 'Lorem ipsum dolor sit amet' } });
    expect(wrapper.state('bio')).toEqual('Lorem ipsum dolor sit amet');
  });

  it('calls handleSubmit when the form is submitted', () => {
    const handleSubmit = jest.fn();
    wrapper.instance().handleSubmit = handleSubmit;
    wrapper.update();

    wrapper.find('form').simulate('submit');
    expect(handleSubmit).toHaveBeenCalledTimes(1);
  });
});