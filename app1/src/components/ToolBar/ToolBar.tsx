import React from 'react';
import Shell_Logo from '../../assets/images/Shell_Logo.png';
import { ThemeToggle } from '../ThemeToggle/ThemeToggle';
import './ToolBar.scss';

const TooolBar: React.FC<{}> = () => {
    const handleClick: React.MouseEventHandler = () => {
        (document.getElementById('scroll-parent') as Element).scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div className="toolbar">
            <div className="shell-logo-container" onClick={handleClick}>
                <img className="shell-logo" src={Shell_Logo} alt="Shell Logo" />
            </div>
            <ThemeToggle/>
        </div>
    );
};

export default TooolBar;
