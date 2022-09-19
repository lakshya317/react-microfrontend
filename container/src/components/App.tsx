import React, { useContext } from 'react';
import './App.scss';
import ToolBar from 'app1/ToolBar';
import ScrollPage from 'app2/ScrollPage';
import { ThemeContext } from 'container/ThemeContext';

function App() {
    interface themeContextType {
        theme: 'light' | 'dark',
        toggleTheme: ()=> void
    }

    const { theme } = useContext<themeContextType>(ThemeContext);

    return (
        <div className={`App ${theme}`}>
            <ToolBar />
            <div className="app-body">
                <ScrollPage />
            </div>
        </div>
    );
}

export default App;
