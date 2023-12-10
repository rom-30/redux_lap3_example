import { screen } from '@testing-library/react';
import Doggos from '.';

describe('Doggos', () => {
  /*global renderWithReduxProvider */

  test('it renders loading message when loading state is true', () => {
    const initState = { loading: true, doggos: [] }
    renderWithReduxProvider(<Doggos />, { initState })

    const loadingMsg = screen.getByText(/loading/i)

    expect(loadingMsg).toBeInTheDocument();
  })

  test('it does not render loading message when loading state is false', () => {
    const initState = { loading: false, doggos: [] }
    renderWithReduxProvider(<Doggos />, { initState })

    const loadingMsg = screen.queryByText(/loading/i)

    expect(loadingMsg).not.toBeInTheDocument();
  })

  test('it renders dogs when there are dogs and loading is false', () => {
    const initState = { loading: false, doggos: [{ id: 1, img: 'img.jpg' }] }
    renderWithReduxProvider(<Doggos />, { initState })

    const dogsSection = screen.getByLabelText('doggos')

    expect(dogsSection).toBeInTheDocument();
  })
});
