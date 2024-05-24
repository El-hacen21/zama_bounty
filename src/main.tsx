import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { FhevmProvider } from './components/Contexts/FhevmContext';
import './index.css'
import { NFTProvider } from './components/Contexts/NFTContext';

// Overriding console.log based on the environment
if (import.meta.env.MODE !== 'development') {
  console.log = () => { };
  console.warn = () => { };
  console.info = () => { };
}


import { Buffer as BufferPolyfill } from "buffer/";
(window as any).Buffer = BufferPolyfill;



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <FhevmProvider>
      <NFTProvider>
        <App />
      </NFTProvider>
    </FhevmProvider>

  </React.StrictMode>,
)
