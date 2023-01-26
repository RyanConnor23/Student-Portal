// src/App.js
import React, { Component } from 'react';
import { ButtonGroup, ExtraText, StyledFormAreaVote } from '../components/Styles';
import {Form, Formik} from 'formik';
import { ExtraTextVoting,StyledTitle, colors } from '../components/Styles';
import { useNavigate } from "react-router-dom";

import {
  StyledFormArea,
  TextLink,
  StyledButton
} from "./../components/Styles";

const Polls = () => {
    return (
        <div>
            <StyledFormArea>
                <StyledTitle color={colors.theme} size={30}>
                    Voting Polls
                </StyledTitle>
                <Formik

                >           
                    {() => (
                      <Form>
                      <ButtonGroup>
                      <StyledButton to="voting">Poll 1</StyledButton><ExtraText></ExtraText>

                      <StyledButton to="voting">Poll 2</StyledButton><ExtraText></ExtraText>

                      <StyledButton to="voting">Poll 3</StyledButton><ExtraText></ExtraText>

                      <StyledButton to="voting">Poll 4</StyledButton><ExtraText></ExtraText>
                        
                      </ButtonGroup>
                  </Form>
              )}
          </Formik>

          <ExtraText>
          Return to Dashboard? <TextLink to="/dash">Click here!</TextLink>
          </ExtraText>
          <ExtraText>
              Want to logout? <TextLink to="/#">Click here!</TextLink>
          </ExtraText>
          <ExtraText>
              Need Help? <TextLink to="/help">FAQ Here!</TextLink>
          </ExtraText>

      </StyledFormArea>
        </div>
    );
};
export default Polls;