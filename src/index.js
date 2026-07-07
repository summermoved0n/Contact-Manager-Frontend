import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { Provider } from 'react-redux';
import { persistor, store } from './redux/store';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

import { extendTheme, ChakraProvider, CSSReset } from '@chakra-ui/react';
import { GlobalStyle } from 'services/stylesChakra';

const colors = {
  text: '#f7f7f7',
  input: '#475467',
  black: '#101828',
  blue: 'rgb(16, 189, 189)',
  purple: 'rgba(143, 0, 172, 0.8)',
};

const theme = extendTheme({ colors });

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename="/Contact-Manager-Frontend">
          <ChakraProvider theme={theme}>
            <CSSReset />
            <GlobalStyle />
            <App />
          </ChakraProvider>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
