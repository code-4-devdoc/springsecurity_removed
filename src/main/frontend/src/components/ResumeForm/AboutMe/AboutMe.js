import React, { useState } from 'react';
import SectionContainer from '../../ResumeCommon/SectionContainer';
import styled from 'styled-components';
import blogIcon from '../../../assets/blog-icon.png';
import githubIcon from '../../../assets/github-icon.png';
import emailIcon from '../../../assets/email-icon.png';
import phoneIcon from '../../../assets/phone-icon.png';
import birthdayIcon from '../../../assets/birthday-icon.png';
import FieldWithToggleButton from './FieldWithToggleButton';

const Input = styled.input`
    padding: 8px;
    margin-right: 8px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    display: block;
    font-size: 15px;
`;

const Button = styled.button`
    width: 25px;
    height: 25px;
    background-color: ${props => props.active ? 'rgba(175, 175, 175, 1)' : 'rgba(129, 172, 255, 1)'};
    color: white;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    margin-right: 10px;
    margin-top: 7px;
`;

const ImagePreview = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
`;

const ImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-style: dashed;
    border-color: rgba(239, 245, 255, 1);
    padding: 15px 0 15px 0;
`;

function useInputValidation(initialValue, pattern) {
    const [value, setValue] = useState(initialValue);
    const [isValid, setIsValid] = useState(true);

    function onChange(e) {
        const newValue = e.target.value;
        const valid = pattern.test(newValue);
        setIsValid(valid);
        setValue(newValue);
    }

    return { value, setValue, onChange, isValid, setIsValid };
}

const AboutMe = ({ savePersonalInfo }) => {
    const [personalInfo, setPersonalInfo] = useState({
        name: '',
        birthday: '',
        phone: '',
        email: '',
        githubAddress: '',
        blogAddress: '',
        selfIntroduction: '',
        image: null,
    });

    const [isActive, setIsActive] = useState({
        phone: false,
        email: false,
        githubAddress: false,
        blogAddress: false,
        selfIntroduction: false,
        birthday: false
    });

    const toggleActive = (field, input) => {
        setIsActive(prev => {
            const newState = { ...prev, [field]: !prev[field] };
            if (prev[field] && !input.isValid) {
                input.setValue("");
                input.setIsValid(true);
            }
            return newState;
        });
    };

    const phoneInput = useInputValidation("", /^\d{3}-\d{4}-\d{4}$/);
    const emailInput = useInputValidation("", /^[a-zA-Z0-9.]+@[a-z]+\.[a-z]+$/);
    const birthdayInput = useInputValidation("", /^\d{4}\.\d{2}\.\d{2}$/);
    const githubInput = useInputValidation("", /^https:\/\/github\.com\/([a-zA-Z0-9_-]+\/?[a-zA-Z0-9_-]*\/?)*$/);
    const blogInput = useInputValidation("", /^(https?:\/\/)?([\da-z\\.-]+)\.([a-z\\.]{2,6})([\\/\w \\.-]*)*\/?$/);
    const introInput = useInputValidation("", /^[\s\S]*$/);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setPersonalInfo(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleImageChange = (e) => {
        e.preventDefault();
        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => {
            setPersonalInfo(prevState => ({
                ...prevState,
                image: reader.result
            }));
        }

        reader.readAsDataURL(file);
    };

    const handleSavePersonalInfo = () => {
        const personalInfoData = {
            name: personalInfo.name,
            birthday: birthdayInput.value,
            phone: phoneInput.value,
            email: emailInput.value,
            githubAddress: githubInput.value,
            blogAddress: blogInput.value,
            selfIntroduction: introInput.value,
            image: personalInfo.image
        };

        savePersonalInfo(personalInfoData);
    };

    return (
        <SectionContainer title="About Me">
            <div style={{display: "flex", paddingTop: 10}}>
                <div>
                    <Input name="name" placeholder="이름" style={{marginLeft: 39}} onChange={handleInputChange} />
                    <FieldWithToggleButton
                        icon={birthdayIcon}
                        placeholder="생년월일 (YYYY.MM.DD)"
                        isActive={isActive.birthday}
                        inputProps={birthdayInput}
                        toggleActive={toggleActive}
                        fieldType="birthday"
                        errorMessage="날짜 형식을 확인해 주세요."
                    />
                    <FieldWithToggleButton
                        icon={phoneIcon}
                        placeholder="전화번호 ('-' 포함)"
                        isActive={isActive.phone}
                        inputProps={phoneInput}
                        toggleActive={toggleActive}
                        fieldType="phone"
                        errorMessage="전화번호 형식을 확인해 주세요."
                    />
                    <FieldWithToggleButton
                        icon={emailIcon}
                        placeholder="이메일"
                        isActive={isActive.email}
                        inputProps={emailInput}
                        toggleActive={toggleActive}
                        fieldType="email"
                        errorMessage="이메일 형식을 확인해 주세요."
                    />
                    <FieldWithToggleButton
                        icon={githubIcon}
                        placeholder="깃허브 주소"
                        isActive={isActive.githubAddress}
                        inputProps={githubInput}
                        toggleActive={toggleActive}
                        fieldType="githubAddress"
                        errorMessage="깃허브 주소를 확인해 주세요."
                    />
                    <FieldWithToggleButton
                        icon={blogIcon}
                        placeholder="블로그 주소"
                        isActive={isActive.blogAddress}
                        inputProps={blogInput}
                        toggleActive={toggleActive}
                        fieldType="blogAddress"
                        errorMessage="블로그 주소를 확인해 주세요."
                    />
                </div>
                <div>
                    <ImageContainer style={{marginLeft: 60}}>
                        <input style={{marginLeft: 55}} type="file" onChange={handleImageChange} accept="image/*"/>
                        {personalInfo.image && (
                            <ImagePreview style={{marginTop: 10}} src={personalInfo.image} alt="Profile Image"/>
                        )}
                    </ImageContainer>
                </div>
            </div>
            <div style={{display: "flex", marginLeft: 39}}>
                <div>
                    <Input
                        style={{width: 600, height: 60, fontFamily:"inherit"}}
                        as="textarea"
                        name="selfIntroduction"
                        placeholder="자기소개를 입력하세요."
                        disabled={!isActive.selfIntroduction}
                        onChange={handleInputChange}
                        isValid={introInput.isValid}
                    />
                    {(isActive.selfIntroduction && !introInput.isValid) &&
                        <p style={{color: 'rgba(202, 5, 5, 1)', marginTop: -8, marginBottom: 7, fontSize: 13}}>입력을 확인해 주세요.</p>}
                </div>
                <Button onClick={() => toggleActive('selfIntroduction', introInput)} active={isActive.selfIntroduction}>
                    {isActive.selfIntroduction ? '-' : '+'}
                </Button>
            </div>
            <button onClick={handleSavePersonalInfo}>Save Personal Info</button>
        </SectionContainer>
    );
};

export default AboutMe;
