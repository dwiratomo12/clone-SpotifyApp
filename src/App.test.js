import { render, screen } from '@testing-library/react';
import store from './store';
import userEvent from '@testing-library/user-event';

import Auth from './pages/Auth';
import Navbar from './components/Navbar';
import { Provider } from 'react-redux';
import CreatePlaylistForm from './components/CreatePlaylistForm';

test('should render button auth spotify', () => {
  render(<Provider store={store}><Auth/></Provider>);
  const authButton = screen.getByText('Authorize your Spotify account');
  expect(authButton).toBeInTheDocument();
});

test('should render button logout after login', async () => {
  render(<Provider store={store}><Navbar/></Provider>);
  const authButton = await screen.getByText('Logout');
  expect(authButton).toBeInTheDocument();
});

test('should render button create', async () => {
  render(<Provider store={store}><CreatePlaylistForm/></Provider>);
  const createButton = await screen.getByText('Create');
  expect(createButton).toBeInTheDocument();

  userEvent.click(createButton);
});


