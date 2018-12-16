import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import enzyme from 'enzyme';
import { mount } from 'enzyme';
import sinon from 'sinon';

import UITest from '../src/ui';

enzyme.configure({ adapter: new Adapter() });


describe('UI test #ui', () => {
    it('should have title', () => {
        const wrapper = mount(<UITest />);
        const title = wrapper.find('h1');
        expect(title).toHaveLength(1);
        expect(title.text()).toBe('This is UITEST Page')
    });

    it('should add 1 when click button', () => {
        const wrapper = mount(<UITest />);
        const counter = wrapper.find('.counter');
        const v1 = parseInt(counter.text());
        wrapper.find('button').simulate('click');
        const v2 = parseInt(counter.text());
        expect(v2).toBe(v1 + 1);
    });

    it('should change when input number', () => {
        const wrapper = mount(<UITest />);
        const counter = wrapper.find('.counter');
        wrapper.find('input').simulate('change', {
            target: {
                value: '5'
            }
        });
        expect(counter.text()).toBe('5');
    });

    it('should change when props change', () => {
        const wrapper = mount(<UITest />);
        sinon.spy(UITest.prototype, 'componentWillReceiveProps');
        const title = wrapper.find('h1');
        wrapper.setProps({
            title: 'Props Change'
        });
        expect(title.text()).toBe('Props Change');
        const callCount = UITest.prototype.componentWillReceiveProps.callCount;
        expect(callCount).toBe(1);
    })
})