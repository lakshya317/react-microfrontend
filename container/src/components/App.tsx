import React from 'react';
import "./App.scss"
import ToolBar from 'app1/ToolBar';
import ScrollPage from 'app2/ScrollPage';

function App() {
    return (
        <div className="App">
            <ToolBar />
            <div className="app-body">
                <ScrollPage />
            </div>
        </div>
    );
}

export default App;
