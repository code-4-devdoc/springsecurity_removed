import React from 'react';
import Section from './Section';

const ResumeForm = ({ selectedSections = [], saveResume, previewResume, handleInputChange }) => {
    return (
        <div className="resume-form">
            <h3>Resume Form</h3>
            {selectedSections.length > 0 ? (
                selectedSections.map((section, index) => (
                    <Section key={index} section={section} handleInputChange={handleInputChange} />
                ))
            ) : (
                <p>No sections selected.</p>
            )}
            <button onClick={saveResume}>Save</button>
            <button onClick={previewResume}>Preview</button>
        </div>
    );
};

export default ResumeForm;






/*
import React, { useState } from 'react';
import Section from './Section';

const ResumeForm = ({ selectedSections }) => {
    const [formData, setFormData] = useState({});

    const handleInputChange = (field, value) => {
        setFormData((prevData) => ({
            ...prevData,
            [field]: value
        }));
    };

    const handleSaveResume = async () => {
        const resume = {
            title: 'Sample Resume', // 필요에 따라 사용자가 입력한 제목으로 변경 가능
            sections: selectedSections.map(section => ({
                title: section.title,
                content: formData[section.id] || ''
            })),
            createdAt: new Date().toISOString()
        };

        try {
            const response = await fetch('http://localhost:8080/api/resumes', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(resume),
            });

            if (response.ok) {
                alert('Resume saved successfully');
            } else {
                alert('Failed to save resume');
            }
        } catch (error) {
            console.error('Error saving resume:', error);
            alert('Error saving resume');
        }
    };

    const handleSavePersonalInfo = async () => {
        const personalInfo = {
            name: formData.name,
            jobTitle: formData.jobTitle,
            email: formData.email,
            contact: formData.contact,
            githubUrl: formData.githubUrl,
            summary: formData.summary,
            photo: formData.photo
        };

        try {
            const response = await fetch('http://localhost:8080/api/personal-info', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(personalInfo),
            });

            if (response.ok) {
                alert('Personal Info saved successfully');
            } else {
                alert('Failed to save Personal Info');
            }
        } catch (error) {
            console.error('Error saving personal info:', error);
            alert('Error saving personal info');
        }
    };

    return (
        <div className="resume-form">
            <h3>Resume Form</h3>
            {selectedSections.map((section, index) => (
                <Section key={index} section={section} onInputChange={handleInputChange} />
            ))}
            <button onClick={handleSaveResume}>Save Resume</button>
            <button onClick={handleSavePersonalInfo}>Save Personal Info</button>
        </div>
    );
};

export default ResumeForm;
*/




/*
import React, { useState } from 'react';
import Section from './Section';

const ResumeForm = ({ selectedSections = [], saveResume, previewResume }) => {
    const [formData, setFormData] = useState({});

    const handleInputChange = (sectionId, key, value) => {
        setFormData(prevData => ({
            ...prevData,
            [sectionId]: {
                ...prevData[sectionId],
                [key]: value
            }
        }));
    };

    return (
        <div className="resume-form">
            <h3>Resume Form</h3>
            {selectedSections.length > 0 ? (
                selectedSections.map((section, index) => (
                    <Section
                        key={index}
                        section={section}
                        onInputChange={handleInputChange}
                        formData={formData[section.id] || {}}
                    />
                ))
            ) : (
                <p>No sections selected.</p>
            )}
            <button onClick={saveResume}>Save</button>
            <button onClick={previewResume}>Preview</button>
        </div>
    );
};

export default ResumeForm;
*/




/*
import React, { useState } from 'react';
import Section from './Section';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const ResumeForm = ({ selectedSections = [], saveResume }) => {
    const [formData, setFormData] = useState({});

    const handleInputChange = (sectionId, fieldId, value) => {
        setFormData(prevData => ({
            ...prevData,
            [sectionId]: {
                ...prevData[sectionId],
                [fieldId]: value,
            }
        }));
    };

    const handlePreview = () => {
        const previewWindow = window.open('', 'Resume Preview', 'width=800,height=600');
        previewWindow.document.write('<html><head><title>Resume Preview</title></head><body>');
        previewWindow.document.write('<div id="resumePreview"></div>');
        previewWindow.document.write('<button id="savePdfBtn">PDF로 저장</button>');
        previewWindow.document.write('</body></html>');

        setTimeout(() => {
            const resumePreview = previewWindow.document.getElementById('resumePreview');
            selectedSections.forEach(section => {
                const sectionDiv = document.createElement('div');
                sectionDiv.innerHTML = `<h3>${section.title}</h3>`;
                if (formData[section.id]) {
                    Object.keys(formData[section.id]).forEach(field => {
                        const fieldDiv = document.createElement('div');
                        fieldDiv.innerHTML = `<p>${field}: ${formData[section.id][field]}</p>`;
                        sectionDiv.appendChild(fieldDiv);
                    });
                }
                resumePreview.appendChild(sectionDiv);
            });

            previewWindow.document.getElementById('savePdfBtn').onclick = () => {
                html2canvas(previewWindow.document.body).then((canvas) => {
                    const imgData = canvas.toDataURL('image/png');
                    const pdf = new jsPDF();
                    const imgProps = pdf.getImageProperties(imgData);
                    const pdfWidth = pdf.internal.pageSize.getWidth();
                    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

                    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
                    pdf.save('resume.pdf');
                });
            };
        }, 1000);
    };

    return (
        <div id="resumeForm" className="resume-form">
            <h3>Resume Form</h3>
            {selectedSections.length > 0 ? (
                selectedSections.map((section, index) => (
                    <Section key={index} section={section} onInputChange={handleInputChange} />
                ))
            ) : (
                <p>No sections selected.</p>
            )}
            <button onClick={saveResume}>Save</button>
            <button onClick={handlePreview}>Preview</button>
        </div>
    );
};

export default ResumeForm;
*/




/* 이력서 관리 페이지 관련 기능 추가 이전 코드
import React, { useState } from 'react';
import Section from './Section';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

// 이력서 폼 컴포넌트
const ResumeForm = ({ selectedSections = [], saveResume }) => {
    const [formData, setFormData] = useState({});

    // 입력 데이터 변경 함수
    const handleInputChange = (section, value) => {
        setFormData(prevData => ({ ...prevData, [section]: value }));
    };

    // 미리보기 핸들러 함수
    const handlePreview = () => {
        const previewWindow = window.open('', 'Resume Preview', 'width=800,height=600');
        previewWindow.document.write('<html><head><title>Resume Preview</title></head><body>');
        previewWindow.document.write('<div id="resumePreview"></div>');
        previewWindow.document.write('<button id="savePdfBtn">PDF로 저장</button>');
        previewWindow.document.write('</body></html>');

        // 일정 시간 후 미리보기 내용 추가
        setTimeout(() => {
            const resumePreview = previewWindow.document.getElementById('resumePreview');
            selectedSections.forEach(section => {
                const sectionDiv = document.createElement('div');
                sectionDiv.innerHTML = `<h3>${section.title}</h3><p>${formData[section.id] || ''}</p>`;
                resumePreview.appendChild(sectionDiv);
            });

            // PDF 저장 버튼 클릭 시 PDF로 저장하는 함수
            previewWindow.document.getElementById('savePdfBtn').onclick = () => {
                html2canvas(previewWindow.document.body).then((canvas) => {
                    const imgData = canvas.toDataURL('image/png');
                    const pdf = new jsPDF();
                    const imgProps = pdf.getImageProperties(imgData);
                    const pdfWidth = pdf.internal.pageSize.getWidth();
                    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

                    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
                    pdf.save('resume.pdf');
                });
            };
        }, 1000);
    };

    return (
        <div id="resumeForm" className="resume-form">
            <h3>Resume Form</h3>
            {selectedSections.length > 0 ? (
                selectedSections.map((section, index) => (
                    <Section key={index} section={section} onInputChange={handleInputChange} />
                ))
            ) : (
                <p>No sections selected.</p>
            )}
            <button onClick={saveResume}>Save</button>
            <button onClick={handlePreview}>Preview</button>
        </div>
    );
};

export default ResumeForm;
*/