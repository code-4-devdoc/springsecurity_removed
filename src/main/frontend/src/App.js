import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import ResumeBuilder from './components/Resume/ResumeBuilder';
import ResumeList from './components/Resume/ResumeList';
import { AuthProvider } from './context/AuthContext';

function App() {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/resume" element={<ResumeBuilder />} /> {/* 수정된 경로 */}
                    <Route path="/resume/edit/:id" element={<ResumeBuilder />} /> {/* 수정된 경로 */}
                    <Route path="/resumes" element={<ResumeList />} />
                </Routes>
            </Router>
        </AuthProvider>
    );
}

export default App;
