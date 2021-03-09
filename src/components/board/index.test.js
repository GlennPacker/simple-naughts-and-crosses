import React from 'react';
import { render, screen } from '@testing-library/react';
import { Board } from '.';
import configureStore from '../../store';
import { Provider } from 'react-redux';
import { act } from 'react-dom/test-utils';

test('renders Board text', () => {
  render(<Provider store={configureStore()}><Board /></Provider>);
  const boardText = screen.getByText(/Board/i);
  expect(boardText).toBeInTheDocument();
});

test('renders all the cells', () => {
  render(
    <Provider store={configureStore()}><Board /></Provider>
  )

  expect(screen.getByTestId('00')).not.toBe(null);
  expect(screen.getByTestId('01')).not.toBe(null);
  expect(screen.getByTestId('02')).not.toBe(null);
  expect(screen.getByTestId('10')).not.toBe(null);
  expect(screen.getByTestId('11')).not.toBe(null);
  expect(screen.getByTestId('12')).not.toBe(null);
  expect(screen.getByTestId('20')).not.toBe(null);
  expect(screen.getByTestId('21')).not.toBe(null);
  expect(screen.getByTestId('22')).not.toBe(null);
})

test('first row wins', () => {
  render(
    <Provider store={configureStore()}><Board /></Provider>
  )

  act(() => {
    screen.getByTestId('00').click();
    screen.getByTestId('11').click();
    screen.getByTestId('01').click();
    screen.getByTestId('12').click();
    screen.getByTestId('02').click();
  })

  const winnerText = screen.getByText(/Winner/);
  expect(winnerText).toBeInTheDocument();
})

test('second row wins', () => {
  render(
    <Provider store={configureStore()}><Board /></Provider>
  )

  act(() => {
    screen.getByTestId('10').click();
    screen.getByTestId('01').click();
    screen.getByTestId('11').click();
    screen.getByTestId('22').click();
    screen.getByTestId('12').click();
  })

  const winnerText = screen.getByText(/Winner/);
  expect(winnerText).toBeInTheDocument();
})

test('third row wins', () => {
  render(
    <Provider store={configureStore()}><Board /></Provider>
  )

  act(() => {
    screen.getByTestId('20').click();
    screen.getByTestId('01').click();
    screen.getByTestId('21').click();
    screen.getByTestId('22').click();
    screen.getByTestId('22').click();
  })

  const winnerText = screen.getByText(/Winner/);
  expect(winnerText).toBeInTheDocument();
})

test('first column wins', () => {
  render(
    <Provider store={configureStore()}><Board /></Provider>
  )

  act(() => {
    screen.getByTestId('00').click();
    screen.getByTestId('11').click();
    screen.getByTestId('01').click();
    screen.getByTestId('22').click();
    screen.getByTestId('02').click();
  })

  const winnerText = screen.getByText(/Winner/);
  expect(winnerText).toBeInTheDocument();
})

test('second column wins', () => {
  render(
    <Provider store={configureStore()}><Board /></Provider>
  )

  act(() => {
    screen.getByTestId('10').click();
    screen.getByTestId('12').click();
    screen.getByTestId('11').click();
    screen.getByTestId('21').click();
    screen.getByTestId('12').click();
  })

  const winnerText = screen.getByText(/Winner/);
  expect(winnerText).toBeInTheDocument();
})

test('third column wins', () => {
  render(
    <Provider store={configureStore()}><Board /></Provider>
  )

  act(() => {
    screen.getByTestId('20').click();
    screen.getByTestId('12').click();
    screen.getByTestId('21').click();
    screen.getByTestId('01').click();
    screen.getByTestId('22').click();
  })

  const winnerText = screen.getByText(/Winner/);
  expect(winnerText).toBeInTheDocument();
})

test('diagnal 1 wins', () => {
  render(
    <Provider store={configureStore()}><Board /></Provider>
  )

  act(() => {
    screen.getByTestId('00').click();
    screen.getByTestId('12').click();
    screen.getByTestId('11').click();
    screen.getByTestId('01').click();
    screen.getByTestId('22').click();
  })

  const winnerText = screen.getByText(/Winner/);
  expect(winnerText).toBeInTheDocument();
})

test('diagnal 2 wins', () => {
  render(
    <Provider store={configureStore()}><Board /></Provider>
  )

  act(() => {
    screen.getByTestId('20').click();
    screen.getByTestId('12').click();
    screen.getByTestId('11').click();
    screen.getByTestId('01').click();
    screen.getByTestId('02').click();
  })

  const winnerText = screen.getByText(/Winner/);
  expect(winnerText).toBeInTheDocument();
})
