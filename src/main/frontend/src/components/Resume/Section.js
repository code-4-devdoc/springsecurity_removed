import React from 'react';

// 섹션 컴포넌트
const Section = ({ section, handleInputChange }) => {
    // 섹션 필드 렌더링 함수
    const renderSectionFields = () => {
        switch (section.id) {
            case 'personalInfo':
                return (
                    <>
                        <div>
                            <label>Photo: </label>
                            <input type="file" onChange={(e) => handleInputChange(section.id, e.target.files[0])} />
                        </div>
                        <div>
                            <label>Name: </label>
                            <input type="text" onChange={(e) => handleInputChange(section.id, e.target.value)} />
                        </div>
                        <div>
                            <label>Job Title: </label>
                            <input type="text" onChange={(e) => handleInputChange(section.id, e.target.value)} />
                        </div>
                        <div>
                            <label>Email: </label>
                            <input type="email" onChange={(e) => handleInputChange(section.id, e.target.value)} />
                        </div>
                        <div>
                            <label>Contact: </label>
                            <input type="text" onChange={(e) => handleInputChange(section.id, e.target.value)} />
                        </div>
                        <div>
                            <label>GitHub/Blog URL: </label>
                            <input type="text" onChange={(e) => handleInputChange(section.id, e.target.value)} />
                        </div>
                        <div>
                            <label>Summary: </label>
                            <textarea onChange={(e) => handleInputChange(section.id, e.target.value)} />
                        </div>
                    </>
                );
            case 'skill':
                return (
                    <div>
                        <label>Skills: </label>
                        <textarea onChange={(e) => handleInputChange(section.id, e.target.value)} />
                    </div>
                );
            case 'education':
                return (
                    <>
                        <div>
                            <label>School Name: </label>
                            <input type="text" onChange={(e) => handleInputChange(section.id, e.target.value)} />
                        </div>
                        <div>
                            <label>Major: </label>
                            <input type="text" onChange={(e) => handleInputChange(section.id, e.target.value)} />
                        </div>
                        <div>
                            <label>Period: </label>
                            <input type="text" onChange={(e) => handleInputChange(section.id, e.target.value)} />
                        </div>
                        <div>
                            <label>Status: </label>
                            <input type="text" onChange={(e) => handleInputChange(section.id, e.target.value)} />
                        </div>
                    </>
                );
            case 'career':
                return (
                    <>
                        <div>
                            <label>Company Name: </label>
                            <input type="text" onChange={(e) => handleInputChange(section.id, e.target.value)} />
                        </div>
                        <div>
                            <label>Job Title: </label>
                            <input type="text" onChange={(e) => handleInputChange(section.id, e.target.value)} />
                        </div>
                        <div>
                            <label>Period: </label>
                            <input type="text" onChange={(e) => handleInputChange(section.id, e.target.value)} />
                        </div>
                        <div>
                            <label>Job Description: </label>
                            <textarea onChange={(e) => handleInputChange(section.id, e.target.value)} />
                        </div>
                    </>
                );
            case 'activity':
                return (
                    <>
                        <div>
                            <label>Activity Name: </label>
                            <input type="text" onChange={(e) => handleInputChange(section.id, e.target.value)} />
                        </div>
                        <div>
                            <label>Organization: </label>
                            <input type="text" onChange={(e) => handleInputChange(section.id, e.target.value)} />
                        </div>
                        <div>
                            <label>Period: </label>
                            <input type="text" onChange={(e) => handleInputChange(section.id, e.target.value)} />
                        </div>
                    </>
                );
            case 'certification':
                return (
                    <>
                        <div>
                            <label>Certification Name: </label>
                            <input type="text" onChange={(e) => handleInputChange(section.id, e.target.value)} />
                        </div>
                        <div>
                            <label>Issuer: </label>
                            <input type="text" onChange={(e) => handleInputChange(section.id, e.target.value)} />
                        </div>
                        <div>
                            <label>Date of Issue: </label>
                            <input type="date" onChange={(e) => handleInputChange(section.id, e.target.value)} />
                        </div>
                    </>
                );
            case 'award':
                return (
                    <>
                        <div>
                            <label>Award Name: </label>
                            <input type="text" onChange={(e) => handleInputChange(section.id, e.target.value)} />
                        </div>
                        <div>
                            <label>Issuer: </label>
                            <input type="text" onChange={(e) => handleInputChange(section.id, e.target.value)} />
                        </div>
                        <div>
                            <label>Date of Issue: </label>
                            <input type="date" onChange={(e) => handleInputChange(section.id, e.target.value)} />
                        </div>
                    </>
                );
            case 'language':
                return (
                    <>
                        <div>
                            <label>Language: </label>
                            <input type="text" onChange={(e) => handleInputChange(section.id, e.target.value)} />
                        </div>
                        <div>
                            <label>Proficiency: </label>
                            <input type="text" onChange={(e) => handleInputChange(section.id, e.target.value)} />
                        </div>
                    </>
                );
            case 'project':
                return (
                    <>
                        <div>
                            <label>Project Name: </label>
                            <input type="text" onChange={(e) => handleInputChange(section.id, e.target.value)} />
                        </div>
                        <div>
                            <label>Description: </label>
                            <textarea onChange={(e) => handleInputChange(section.id, e.target.value)} />
                        </div>
                    </>
                );
            default:
                return null;
        }
    };

    return (
        <div className="section">
            <h4>{section.title}</h4>
            {renderSectionFields()}
        </div>
    );
};

export default Section;





/*
import React from 'react';

// 섹션 컴포넌트
const Section = ({ section, onInputChange }) => {
    const renderSectionFields = () => {
        switch (section.id) {
            case 'personalInfo':
                return (
                    <>
                        <div>
                            <label>Photo: </label>
                            <input type="file" onChange={(e) => onInputChange('photo', e.target.files[0])} />
                        </div>
                        <div>
                            <label>Name: </label>
                            <input type="text" onChange={(e) => onInputChange('name', e.target.value)} />
                        </div>
                        <div>
                            <label>Job Title: </label>
                            <input type="text" onChange={(e) => onInputChange('jobTitle', e.target.value)} />
                        </div>
                        <div>
                            <label>Email: </label>
                            <input type="email" onChange={(e) => onInputChange('email', e.target.value)} />
                        </div>
                        <div>
                            <label>Contact: </label>
                            <input type="text" onChange={(e) => onInputChange('contact', e.target.value)} />
                        </div>
                        <div>
                            <label>GitHub/Blog URL: </label>
                            <input type="text" onChange={(e) => onInputChange('githubUrl', e.target.value)} />
                        </div>
                        <div>
                            <label>Summary: </label>
                            <textarea onChange={(e) => onInputChange('summary', e.target.value)} />
                        </div>
                    </>
                );
            default:
                return null;
        }
    };

    return (
        <div className="section">
            <h4>{section.title}</h4>
            {renderSectionFields()}
        </div>
    );
};

export default Section;
*/









/*
import React from 'react';

const Section = ({ section, onInputChange }) => {
    const renderSectionFields = () => {
        switch (section.id) {
            case 'personalInfo':
                return (
                    <>
                        <div>
                            <label>Photo: </label>
                            <input type="file" onChange={(e) => onInputChange(section.id, e.target.files[0])} />
                        </div>
                        <div>
                            <label>Name: </label>
                            <input type="text" onChange={(e) => onInputChange(section.id, e.target.value)} />
                        </div>
                        <div>
                            <label>Job Title: </label>
                            <input type="text" onChange={(e) => onInputChange(section.id, e.target.value)} />
                        </div>
                        <div>
                            <label>Email: </label>
                            <input type="email" onChange={(e) => onInputChange(section.id, e.target.value)} />
                        </div>
                        <div>
                            <label>Contact: </label>
                            <input type="text" onChange={(e) => onInputChange(section.id, e.target.value)} />
                        </div>
                        <div>
                            <label>GitHub/Blog URL: </label>
                            <input type="text" onChange={(e) => onInputChange(section.id, e.target.value)} />
                        </div>
                        <div>
                            <label>Summary: </label>
                            <textarea onChange={(e) => onInputChange(section.id, e.target.value)} />
                        </div>
                    </>
                );
            // 추가적인 섹션 필드들
            default:
                return null;
        }
    };

    return (
        <div className="section">
            <h4>{section.title}</h4>
            {renderSectionFields()}
        </div>
    );
};

export default Section;
*/





/*
import React from 'react';

const Section = ({ section }) => {
    const renderSectionFields = () => {
        switch (section.id) {
            case 'personalInfo':
                return (
                    <>
                        <div>
                            <label>Photo: </label>
                            <input type="file" />
                        </div>
                        <div>
                            <label>Name: </label>
                            <input type="text" />
                        </div>
                        <div>
                            <label>Job Title: </label>
                            <input type="text" />
                        </div>
                        <div>
                            <label>Email: </label>
                            <input type="email" />
                        </div>
                        <div>
                            <label>Contact: </label>
                            <input type="text" />
                        </div>
                        <div>
                            <label>GitHub/Blog URL: </label>
                            <input type="text" />
                        </div>
                        <div>
                            <label>Summary: </label>
                            <textarea />
                        </div>
                    </>
                );
            case 'skill':
                return (
                    <>
                        <div>
                            <label>Skills: </label>
                            <textarea />
                        </div>
                    </>
                );
            case 'education':
                return (
                    <>
                        <div>
                            <label>School Name: </label>
                            <input type="text" />
                        </div>
                        <div>
                            <label>Major: </label>
                            <input type="text" />
                        </div>
                        <div>
                            <label>Period: </label>
                            <input type="text" />
                        </div>
                        <div>
                            <label>Status: </label>
                            <input type="text" />
                        </div>
                    </>
                );
            case 'career':
                return (
                    <>
                        <div>
                            <label>Company Name: </label>
                            <input type="text" />
                        </div>
                        <div>
                            <label>Job Title: </label>
                            <input type="text" />
                        </div>
                        <div>
                            <label>Period: </label>
                            <input type="text" />
                        </div>
                        <div>
                            <label>Job Description: </label>
                            <textarea />
                        </div>
                    </>
                );
            // 기타 섹션도 유사한 방식으로 구현
            default:
                return null;
        }
    };

    return (
        <div className="section">
            <h4>{section.title}</h4>
            {renderSectionFields()}
        </div>
    );
};

export default Section;
*/