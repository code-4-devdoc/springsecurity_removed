import React from 'react';

const sections = [
    { id: 'personalInfo', title: 'About Me' },
    // 항목 추가 필요
];

const SectionList = ({ addSection }) => {
    return (
        <div className="section-list">
            <h3>Resume Sections</h3>
            <ul>
                {sections.map(section => (
                    <li key={section.id}>
                        {section.title} <button onClick={() => addSection(section)}>+</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SectionList;

