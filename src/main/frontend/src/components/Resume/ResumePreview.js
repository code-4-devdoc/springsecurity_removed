import React, { useEffect, useState } from 'react';

const ResumePreview = () => {
    const [formData, setFormData] = useState({});

    useEffect(() => {
        const storedFormData = JSON.parse(localStorage.getItem('formData'));
        if (storedFormData) {
            setFormData(storedFormData);
        }
    }, []);

    return (
        <div className="resume-preview-page">
            <h1>이력서 미리보기</h1>
            {Object.keys(formData).map((section, index) => (
                <div key={index}>
                    <h2>{section}</h2>
                    <p>{formData[section]}</p>
                </div>
            ))}
        </div>
    );
};

export default ResumePreview;
