import styled from 'styled-components';

//background
import background from './../assets/background.png';


// create buttons using react router 
import {Link} from 'react-router-dom';


export const colors ={
    primary: "#fff",
    theme: "#BE185D",
    light1: "#F3F4F6",
    light2: "#ESE7EB",
    dark1: "#1F2937",
    dark2: "#4B5563",
    dark3: "#9CA3AF",
    red: "#DC2626",
    yellow: "#FFFF00",
    brightGreen: "#AAFF00",
    green: "#008000	"

}

//Styled components
export const StyledContainer = styled.div`
    margin: 0;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(0deg, rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${background});
    background-size: cover;
    background-attachment: fixed;
`;

//Home
export const StyledTitle = styled.h2`
    font-size: ${(props) => props.size}px;
    text-align: center;
    color: ${(props) => props.color ? props.color : colors.primary};
    padding: 5px;
    margin-bottom: 20px;
`;

export const StyledSubTitle = styled.p`
font-size: ${(props) => props.size}px;
text-align: center;
color: ${(props) => props.color ? props.color : colors.primary};
padding: 5px;
margin-bottom: 25px;
`;

export const StyledSubTitlePersonalInformation = styled.p`
font-size: 24px;
text-align: center;
color: ${colors.yellow};
padding: 5px;
margin-bottom: 25px;
`;

export const StyledSubTitleTransaction = styled.p`
font-size: 24px;
text-align: center;
color: ${colors.yellow};
padding: 5px;
margin-bottom: 25px;
`;



export const Avatar = styled.div`
width: 85px;
height: 85px;
border-radius: 50px;
background-image: url(${props => props.image});
background-size: cover;
background-position: center;
margin: auto;
`;

export const StyledButton = styled(Link)`
padding: 10px;
width: 150px;
background-color: transparent;
font-size: 16px;
border: 3px solid ${colors.primary};
border-radius: 25px;
color: ${colors.primary};
text-decoration: none;
text-align: center;
transition: ease-in-out 0.3s;
outline: 0;
&:hover{
    background-color: ${colors.primary};
    color: ${colors.theme};
    cursor: pointer;
}
`;

export const ButtonGroup = styled.div`
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    margin-top: 25px;
`;

//Input
export const StyledTextInput = styled.input`
    width: 280px;
    padding: 15px;
    padding-left: 50px;
    font-size: 17px;
    letter-spacing: 1px;
    color: ${colors.dark1};
    background-color: ${colors.light2};
    border: 0;
    outline: 0;
    display: bock;
    margin: 5px auto 10px auto;
    transition: ease-in-out 0.3s;
    ${(props) => props.invalid && `background-color: ${colors.red}; color: ${colors.primary};`}
    &:focus {
        background-color: ${colors.dark2};
        color: ${colors.primary};
    }
`;

export const StyledLabel = styled.p`
    text-align: center;
    font-size: 16px;
    font-weight: bold;
`;

export const StyledLabelOne = styled.p`
    text-align: left
    font-size: 13px;
    font-weigth: normal;
`;
export const StyledFormArea = styled.div`
background-color: ${props => props.bg || colors.dark2};
text-align: center;
padding: 45px 55px;
`;

export const StyledFormAreaVote = styled.div`
background-color: ${props => props.bg || colors.dark1};
text-align: center;
padding: 45px 55px;
`;

export const StyledFormButton = styled.button`
padding: 10px;
width: 150px;
background-color: white;
font-size: 16px;
border: 2px solid ${colors.theme};
border-radius: 25px;
color: ${colors.theme};
transition: ease-in-out 0.3s;
outline: 0;
&:hover{
    background-color: ${colors.green};
    color: ${colors.primary};
    cursor: pointer;
}
`;

//Display error message if entered wrong email aor password
export const ErrorMsg = styled.div`
font-size: 11px;
color: ${colors.red};
margin-top: -5px;
margin-bottom: 10px;
text-align: left;
`;

export const ExtraText = styled.p`
font-size: ${(props) => props.size}px;
text-aign: center;
color: ${(props) => (props.color? props.color : colors.light1)};
padding: 2px;
margin-top: 10px;
`;

export const ExtraTextVoting = styled.p`
font-size: 30px;
text-aign: center;
color: ${colors.brightGreen};
padding: 2px;
margin-top: 10px;

`;

// Link to register page
export const TextLink = styled(Link)`
text-decoration: none;
color: ${colors.theme};
transition: ease-in-out 0.3s;
&:hover{
    text-decoration: underline;
    letter-spacing:2px;
    font-weight: bold;
} 
`;



//Display error message if entered wrong email aor password

export const StyledIcon = styled.p`
color: ${colors.dark1};
position: absolute;
font-size: 21px;
top: 35px;
${(props) => props.right && `right: 15px; `}
${(props) => !props.right && `left: 15px; `}
`;