import React, { useContext } from 'react';
import ToolBar from './ToolBar/ToolBar';
import { ThemeContext } from 'container/ThemeContext';

function App1() {
    interface themeContextType {
        theme: 'light' | 'dark',
        toggleTheme: ()=> void
    }

    const { theme } = useContext<themeContextType>(ThemeContext);
    return (
        <div className={`App ${theme}`}>
            <ToolBar />
        </div>
    );
}

export default App1;
