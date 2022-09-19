import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App1 from './components/App1';
import { ThemeProvider } from 'container/ThemeContext';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<ThemeProvider><App1 /></ThemeProvider>);
