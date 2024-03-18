import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { GlobalStyle } from './Styles/global.ts'
import { PrimeReactProvider } from 'primereact/api';
import 'primereact/resources/primereact.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <PrimeReactProvider>
          <App />
    </PrimeReactProvider>
    <GlobalStyle/>
  </React.StrictMode>,
)
