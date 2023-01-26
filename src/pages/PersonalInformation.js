import {StyledSubTitlePersonalInformation,StyledTitle, StyledSubTitle, Avatar, StyledButton, ButtonGroup, StyledFormArea, ExtraText} from "./../components/Styles";

import React, {Component} from 'react';

//Logo
import Logo from "./../assets/logo.PNG";

const PersonalInformation = () => {
    return (
        <div>
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    backgroundColor: "transparent",
                    width: "100%",
                    padding: "15px",
                    display: "flex",
                    justifyContent: "flex-start",
                }}
            >
                <Avatar image={Logo} />
            </div>
            <StyledFormArea> 
        <StyledTitle size={65}>
           Personal Information!
            </StyledTitle>
            <StyledSubTitlePersonalInformation>
                Account Information:
            </StyledSubTitlePersonalInformation>
            <ExtraText>
                First: Paul
            </ExtraText>
            <ExtraText>
                Last: Meisner
             </ExtraText>   
             <ExtraText>
                D.o.B: 08/28/1999
                </ExtraText> 
                <ExtraText>  
                Email: try1@gmail.com
            </ExtraText>
            <ExtraText>  
                
            </ExtraText>
            <ExtraText>  
                
            </ExtraText>
            <StyledSubTitlePersonalInformation> 
                Contact Information:
            </StyledSubTitlePersonalInformation>
            <ExtraText>
                Address: 111 Straße
                </ExtraText>
                <ExtraText>
                Zip: 00000
                </ExtraText>
                <ExtraText>
                State: Wi
                </ExtraText>
                <ExtraText>
                phone: 111 1111 1111
            </ExtraText>
            <ExtraText>  
                
            </ExtraText>
            <ExtraText>  
                
            </ExtraText>
            <StyledSubTitlePersonalInformation> 
                Academic Information:
            </StyledSubTitlePersonalInformation>
            <ExtraText>
             Major: Software Engineering
             </ExtraText>
             <ExtraText>
             Role: Student
             </ExtraText>
             <ExtraText>
             ID: 0001111
            </ExtraText>
            <ExtraText>  
                
            </ExtraText>
            <ExtraText>  
                
            </ExtraText>
            <StyledSubTitlePersonalInformation> 
                Financial Information:
            </StyledSubTitlePersonalInformation>
            <ExtraText>
             Bank Name: Wells Fargo
             </ExtraText>
             <ExtraText>
             Card Type: Debit
             </ExtraText>
             <ExtraText>
             Card Number: 0000 1111 2222 3333
             </ExtraText>
             <ExtraText>
             CSV: ***
            </ExtraText>
           
           
            
        <ButtonGroup>                          
            <StyledButton to="/">
                Logout
            </StyledButton>
            <StyledButton to="/dash">
                Dashboard
            </StyledButton>
        </ButtonGroup>  
        </StyledFormArea> 
        </div>
    );
}

export default PersonalInformation;