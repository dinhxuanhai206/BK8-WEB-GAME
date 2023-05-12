import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { FpjsProvider } from '@fingerprintjs/fingerprintjs-pro-react'
import i18n from './i18next'

import GlobalStyles from '~/components/GlobalStyles/GlobalStyles'
import { StoreProvider } from './Store'
import { I18nextProvider } from 'react-i18next'

{/* <Suspense fallback="loading"> 
  <React.StrictMode> */}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <I18nextProvider i18n={i18n}>
    <StoreProvider>
      <GlobalStyles>
        <FpjsProvider loadOptions={{ apiKey: 'Ff5jcToZxjrjPd4lUvYY', region: 'ap' }}>
          <App />
        </FpjsProvider>
      </GlobalStyles>
    </StoreProvider>
  </I18nextProvider>
);

{/* </React.StrictMode>
</Suspense> */}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
