import React from 'react';
import Calculator from '../containers/Calculator';
import {render, fireEvent} from '@testing-library/react';

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = render(<Calculator/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.getByTestId('number4');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button4);
    expect(runningTotal.textContent).toEqual('4');
  })

  it ('should be able to add numbers together on equal', () => {
    const runningTotal = container.getByTestId('running-total');
    const button1 = container.getByTestId('number1');
    const button4 = container.getByTestId('number4');
    const operatoradd = container.getByTestId('operator-add');
    const operatorequals = container.getByTestId('operator-equals');
    fireEvent.click(button1);
    fireEvent.click(operatoradd);
    fireEvent.click(button4);
    fireEvent.click(operatorequals);
    expect(runningTotal.textContent).toEqual('5');
  })

  it ('should be able to subtract numbers together on equal', () => {
    const runningTotal = container.getByTestId('running-total');
    const button7 = container.getByTestId('number7');
    const button4 = container.getByTestId('number4');
    const operatorsubtract = container.getByTestId('operator-subtract');
    const operatorequals = container.getByTestId('operator-equals');
    fireEvent.click(button7);
    fireEvent.click(operatorsubtract);
    fireEvent.click(button4);
    fireEvent.click(operatorequals);
    expect(runningTotal.textContent).toEqual('3');
  })

  it ('should be able to multiply numbers together on equal', () => {
    const runningTotal = container.getByTestId('running-total');
    const button3 = container.getByTestId('number3');
    const button5 = container.getByTestId('number5');
    const operatormultiply = container.getByTestId('operator-multiply');
    const operatorequals = container.getByTestId('operator-equals');
    fireEvent.click(button3);
    fireEvent.click(operatormultiply);
    fireEvent.click(button5);
    fireEvent.click(operatorequals);
    expect(runningTotal.textContent).toEqual('15');
  })

  it ('should be able to divide numbers together on equal', () => {
    const runningTotal = container.getByTestId('running-total');
    const button2 = container.getByTestId('number2');
    const button1 = container.getByTestId('number1');
    const button7 = container.getByTestId('number7');
    const operatordivide = container.getByTestId('operator-divide');
    const operatorequals = container.getByTestId('operator-equals');
    fireEvent.click(button2);
    fireEvent.click(button1);
    fireEvent.click(operatordivide);
    fireEvent.click(button7);
    fireEvent.click(operatorequals);
    expect(runningTotal.textContent).toEqual('3');
  })

  it ('should concatenate multiple number button clicks', () => {
    const runningTotal = container.getByTestId('running-total');
    const button1 = container.getByTestId('number1');
    const button2 = container.getByTestId('number2');
    const button3 = container.getByTestId('number3');
    fireEvent.click(button1);
    fireEvent.click(button2);
    fireEvent.click(button3);
    expect(runningTotal.textContent).toEqual('123');
  })

  it ('should chain multiple operations together', () => {
    const runningTotal = container.getByTestId('running-total');
    const operatordivide = container.getByTestId('operator-divide');
    const operatormultiply = container.getByTestId('operator-multiply');
    const operatorsubstract = container.getByTestId('operator-subtract');
    fireEvent.click(operatordivide);
    fireEvent.click(operatormultiply);
    fireEvent.click(operatorsubstract);
    expect(runningTotal.textContent).toEqual('0');
  })

  it ('should clear the running total without affecting the calculation', () => {
    const runningTotal = container.getByTestId('running-total');
    const button2 = container.getByTestId('number2');
    const button1 = container.getByTestId('number1');
    const button7 = container.getByTestId('number7');
    const operatordivide = container.getByTestId('operator-divide');
    const operatorequals = container.getByTestId('operator-equals');
    const clear = container.getByTestId('clear')
    fireEvent.click(button2);
    fireEvent.click(button1);
    fireEvent.click(operatordivide);
    fireEvent.click(button7);
    fireEvent.click(operatorequals);
    fireEvent.click(clear);
    expect(runningTotal.textContent).toEqual('0');
  })

})

