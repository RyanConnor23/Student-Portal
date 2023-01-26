//implement Pages
import Start from "./pages/Start";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AcademicInformation from "./pages/AcademicInformation";
import ContactInformation from "./pages/ContactInformation";
import FinancialInformation from "./pages/FinancialInformation";
import ForgotPassword from "./pages/ForgotPassword";

import "./App.css";

//styled components
import {StyledContainer} from "./components/Styles";
import React, { Component }  from 'react';

//loader-spinner css
//import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
//test

//
import{BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Voting from "./pages/Voting";
import PersonalInformation from "./pages/PersonalInformation";
import TransactionHistory from "./pages/TransactionHistory";
import Polls from "./pages/Polls";
function App() {
  return (
    <Router>
       
    
     <StyledContainer className="container">
        <Routes>
        <Route exact path="/" element={<Start/>}/>
        <Route exact path="dash" element={<Dashboard/>}/>
        <Route exact path="voting" element={<Voting/>}/>
        <Route exact path="personal" element={<PersonalInformation/>}/>
        <Route exact path="transaction" element={<TransactionHistory/>}/>
         <Route exact path="/signup" element={<Signup/>}/>
          <Route exact path="/forgotpassword" element={<ForgotPassword/>}/>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/contact" element={<ContactInformation/>}/>
          <Route exact path="/financial" element={<FinancialInformation/>}/>
          <Route exact path="/academic" element={<AcademicInformation/>}/>
          <Route exact path="/polls" element={<Polls/>}/>
          <Route exact path="/transactionhistory" element={<TransactionHistory/>}/>
        </Routes>
      </StyledContainer>
     </Router>
  );
}
export default App;