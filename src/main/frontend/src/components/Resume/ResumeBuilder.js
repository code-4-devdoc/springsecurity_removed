import React, { useState, useEffect } from 'react';
import SectionList from './SectionList';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { useParams } from 'react-router-dom';
import AboutMe from '../ResumeForm/AboutMe/AboutMe';
import ResumeNav from '../ResumeCategory/CategoryList';

const ResumeBuilder = () => {
    const [selectedSections, setSelectedSections] = useState([]);
    const [title, setTitle] = useState('');
    const [personalInfo, setPersonalInfo] = useState({});
    const { id } = useParams();

    useEffect(() => {
        const fetchResume = async () => {
            if (id) {
                try {
                    const response = await fetch(`http://localhost:8080/api/resumes/${id}`);
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    const data = await response.json();
                    setTitle(data.title);
                    setSelectedSections(data.sections);
                } catch (error) {
                    console.error('Failed to fetch resume:', error);
                }
            }
        };
        fetchResume();
    }, [id]);

    const addSection = (section) => {
        setSelectedSections([...selectedSections, section]);
    };

    const handleInputChange = (sectionId, value) => {
        setPersonalInfo(prevState => ({
            ...prevState,
            [sectionId]: value
        }));
    };

    const saveResume = async () => {
        const resume = {
            title,
            sections: selectedSections.map(section => ({
                title: section.title,
                content: personalInfo[section.id] || ""
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

    const savePersonalInfo = async (personalInfoData) => {
        try {
            const response = await fetch('http://localhost:8080/api/personalinfo', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(personalInfoData),
            });

            if (response.ok) {
                alert('Personal info saved successfully');
            } else {
                alert('Failed to save personal info');
            }
        } catch (error) {
            console.error('Error saving personal info:', error);
            alert('Error saving personal info');
        }
    };

    const previewResume = () => {
        const previewWindow = window.open('', 'Resume Preview', 'width=800,height=600');
        previewWindow.document.write('<html><head><title>Resume Preview</title></head><body>');
        previewWindow.document.write('<div id="resumePreview"></div>');
        previewWindow.document.write('<button id="savePdfBtn">PDF로 저장</button>');
        previewWindow.document.write('</body></html>');

        setTimeout(() => {
            const resumePreview = previewWindow.document.getElementById('resumePreview');
            selectedSections.forEach(section => {
                const sectionDiv = document.createElement('div');
                sectionDiv.innerHTML = `<h3>${section.title}</h3><p>${personalInfo[section.id] || ''}</p>`;
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
        <div className="resume-builder">
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter resume title"
            />
            <SectionList addSection={addSection} />
            <div className="section-content">
                {selectedSections.map(section => {
                    if (section.id === 'personalInfo') {
                        return <AboutMe key={section.id} savePersonalInfo={savePersonalInfo} />;
                    }
                    return null;
                })}
            </div>
            <button onClick={saveResume}>Save Resume</button>
            <button onClick={() => savePersonalInfo(personalInfo)}>Save Personal Info</button>
        </div>
    );
};

export default ResumeBuilder;