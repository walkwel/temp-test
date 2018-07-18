import React from 'react';
import ReactDOM from 'react-dom';
import * as TestUtils from 'react-dom/test-utils';
import Button from '../Button';

describe('tests', () => {
  it('button text value increase after click', () => {

    const ButtonComponent = TestUtils.renderIntoDocument(
      <Button count={1} />
    );

    const buttonEle = ReactDOM.findDOMNode(ButtonComponent);

    expect(buttonEle.textContent).toEqual('1');

    TestUtils.Simulate.click(
      TestUtils.findRenderedDOMComponentWithTag(ButtonComponent, 'button')
    );
    expect(buttonEle.textContent).toEqual('2');
  });
})