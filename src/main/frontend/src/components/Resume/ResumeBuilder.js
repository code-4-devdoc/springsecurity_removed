import React, { useState } from 'react';
import SectionList from './SectionList';
import ResumeForm from './ResumeForm';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

// ResumeBuilder 컴포넌트 정의
const ResumeBuilder = () => {
    const [selectedSections, setSelectedSections] = useState([]); // 선택된 섹션 상태
    const [title, setTitle] = useState(''); // 제목 상태
    const [personalInfo, setPersonalInfo] = useState({}); // 개인 정보 상태

    // 섹션 추가 함수
    const addSection = (section) => {
        setSelectedSections([...selectedSections, section]);
    };

    // 입력 변화 처리 함수
    const handleInputChange = (sectionId, value) => {
        setPersonalInfo(prevState => ({
            ...prevState,
            [sectionId]: value
        }));
    };

    // 이력서 저장 함수
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

    // 개인 정보 저장 함수

    // 이력서 미리보기 함수
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

    // 컴포넌트 반환
    return (
        <div className="resume-builder">
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter resume title"
            />
            <SectionList addSection={addSection} />
            <ResumeForm
                selectedSections={selectedSections}
                saveResume={saveResume}
                previewResume={previewResume}
                handleInputChange={handleInputChange}
            />

        </div>
    );
};

export default ResumeBuilder;





/*
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import SectionList from './SectionList';
import ResumeForm from './ResumeForm';

const ResumeBuilder = () => {
    const [selectedSections, setSelectedSections] = useState([]);
    const [title, setTitle] = useState('');
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

    const saveResume = async () => {
        const resume = {
            title: title,
            sections: selectedSections,
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

    const previewResume = () => {
        console.log("Preview resume:", selectedSections);
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
            <ResumeForm
                selectedSections={selectedSections}
                saveResume={saveResume}
                previewResume={previewResume}
            />
        </div>
    );
};

export default ResumeBuilder;
*/


/*
import React, { useState } from 'react';
import SectionList from './SectionList';
import ResumeForm from './ResumeForm';

const ResumeBuilder = () => {
    const [selectedSections, setSelectedSections] = useState([]);
    const [title, setTitle] = useState('');

    const addSection = (section) => {
        setSelectedSections([...selectedSections, section]);
    };

    const saveResume = async () => {
        const resume = {
            title: title, // 사용자로부터 입력받은 제목
            sections: selectedSections, // 전체 섹션 데이터를 보냄
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

    const previewResume = () => {
        console.log("Preview resume:", selectedSections);
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
            <ResumeForm
                selectedSections={selectedSections}
                saveResume={saveResume}
                previewResume={previewResume}
            />
        </div>
    );
};

export default ResumeBuilder;
*/