import React, { useContext } from 'react';
import ScrollPage from './ScrollPage/ScrollPage';
import './App.scss';
import { ThemeContext } from 'container/ThemeContext';

function App2() {
    interface themeContextType {
        theme: 'light' | 'dark',
        toggleTheme: ()=> void
    }

    const { theme } = useContext<themeContextType>(ThemeContext);
    return (
        <div className={`App ${theme}`}>
            <ScrollPage />
        </div>
    );
}

export default App2;
