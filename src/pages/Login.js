import {
    StyledFormArea,
    StyledFormButton, 
    Avatar, 
    StyledTitle, 
    colors,
    ButtonGroup,
    TextLink,
    ExtraText
} from "./../components/Styles";
import Logo from './../assets/nick project.png';
import React, {Component} from 'react';
//formik
import {Form, Formik} from 'formik';
import { TextInput } from "../components/FormLib";
import * as Yup from 'yup';
//icons
import {FiMail, FiLock} from 'react-icons/fi';
//Loader
//import Loader, { ThreeCircles } from 'react-loader-spinner'; 

//auth reudx
import { connect } from 'react-redux';
import { loginUser } from "../auth/actions/userActions";
import { useNavigate } from "react-router-dom";


const Login = ({loginUser}) => {
    const navigate = useNavigate();
    return (
        <div>
            <StyledFormArea>
                <Avatar image={Logo} />
                <StyledTitle color={colors.theme} size={30}>
                    User Login
                </StyledTitle>
                <Formik

                    initialValues={{
                        email: "",
                        password: "",

                    }}
                    validationSchema={
                        Yup.object({
                            email: Yup.string().email("Invalid email entered!").required("Required"),
                            password: Yup.string().min(10, "Invalid!").required("Required"),
                        })
                    }
                    onSubmit={(values, {setSubmitting, setFieldError})=> {
                        console.log(values);
                        loginUser(values, navigate, setFieldError, setSubmitting);
                    }}
                >           
               
                    {() => (
                        <Form>
                            <TextInput 
                            name="email"
                            type="text"
                            label="Email Address"
                            placeholder="me@example.com"
                            icon = {<FiMail/>}
                            />

                            <TextInput
                            name="password"
                            type="text"
                            label="Password"
                            placeholder="****"
                            icon = {<FiLock/>}
                            />


                            <ButtonGroup>
                               {<StyledFormButton
                                type="submit">Login</StyledFormButton>}
                                
                        
                            </ButtonGroup>
                        </Form>
                    )}
                </Formik>

                <ExtraText>
                    New User? <TextLink to="/signup">Register Here!</TextLink>
                </ExtraText>
                <ExtraText>
                    Forgot Password? <TextLink to="/forgotPassword">Reset Password!</TextLink>
                </ExtraText>
                <ExtraText>
                    Need Help? <TextLink to="/help">FAQ Here!</TextLink>
                </ExtraText>

            </StyledFormArea>
        </div>
    );
    };
export default connect (null,{loginUser} ) (Login);