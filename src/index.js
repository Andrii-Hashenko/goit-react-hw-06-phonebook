import React from 'react';
import ReactDOM from 'react-dom';
import { PersistGate } from 'redux-persist/integration/react';
import App from './components/App';
import { store, persistor } from './redux/store';
import { Provider } from 'react-redux';
import 'modern-normalize/modern-normalize.css';

import reportWebVitals from './reportWebVitals';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
