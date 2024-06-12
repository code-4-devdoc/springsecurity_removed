import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// ResumeList 컴포넌트 정의
const ResumeList = () => {
    const [resumes, setResumes] = useState([]);
    const navigate = useNavigate();

    // 이력서 목록을 서버에서 가져오는 함수
    useEffect(() => {
        const fetchResumes = async () => {
            try {
                const response = await fetch('http://localhost:8080/api/resumes');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setResumes(data);
            } catch (error) {
                console.error('Failed to fetch resumes:', error);
            }
        };
        fetchResumes();
    }, []);

    // 이력서 편집 핸들러
    const handleEdit = (id) => {
        navigate(`/resume/edit/${id}`);
    };

    // 이력서 다운로드 핸들러
    const handleDownload = async (id) => {
        const response = await fetch(`http://localhost:8080/api/resumes/${id}/download`);
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `resume_${id}.pdf`;
        document.body.appendChild(a);
        a.click();
        a.remove();
    };

    return (
        <div className="resume-list">
            <h2>My Resumes</h2>
            <ul>
                {resumes.map((resume) => (
                    <li key={resume.id}>
                        <span onClick={() => handleEdit(resume.id)}>{resume.title}</span>
                        <span>{resume.createdAt}</span>
                        <button onClick={() => handleDownload(resume.id)}>Download</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ResumeList;






/*
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ResumeList = () => {
    const [resumes, setResumes] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        // 이력서 목록을 서버에서 가져오는 함수
        const fetchResumes = async () => {
            try {
                const response = await fetch('http://localhost:8080/api/resumes');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setResumes(data);
            } catch (error) {
                console.error('Failed to fetch resumes:', error);
            }
        };
        fetchResumes();
    }, []);

    const handleEdit = (id) => {
        navigate(`/resume/edit/${id}`); // 이력서 편집 페이지로 이동
    };

    const handleDownload = async (id) => {
        const response = await fetch(`http://localhost:8080/api/resumes/${id}/download`);
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `resume_${id}.pdf`;
        document.body.appendChild(a);
        a.click();
        a.remove();
    };

    return (
        <div className="resume-list">
            <h2>My Resumes</h2>
            <ul>
                {resumes.map((resume) => (
                    <li key={resume.id}>
                        <span onClick={() => handleEdit(resume.id)}>{resume.title}</span>
                        <span>{resume.createdAt}</span>
                        <button onClick={() => handleDownload(resume.id)}>Download</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ResumeList;
*/



/* save 성공 코드
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ResumeList = () => {
    const [resumes, setResumes] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        // 이력서 목록을 서버에서 가져오는 함수
        const fetchResumes = async () => {
            try {
                const response = await fetch('http://localhost:8080/api/resumes');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setResumes(data);
            } catch (error) {
                console.error('Failed to fetch resumes:', error);
            }
        };
        fetchResumes();
    }, []);

    const handleEdit = (id) => {
        navigate(`/resume/edit/${id}`); // 이력서 편집 페이지로 이동
    };

    const handleDownload = async (id) => {
        const response = await fetch(`http://localhost:8080/api/resumes/${id}/download`);
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `resume_${id}.pdf`;
        document.body.appendChild(a);
        a.click();
        a.remove();
    };

    return (
        <div className="resume-list">
            <h2>My Resumes</h2>
            <ul>
                {resumes.map((resume) => (
                    <li key={resume.id}>
                        <span onClick={() => handleEdit(resume.id)}>{resume.title}</span>
                        <span>{new Date(resume.createdAt).toLocaleDateString()}</span>
                        <button onClick={() => handleDownload(resume.id)}>Download</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ResumeList;
*/
