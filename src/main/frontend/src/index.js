import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles/Home.css';
import './styles/ResumeBuilder.css';
import './styles/ResumeList.css';
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

