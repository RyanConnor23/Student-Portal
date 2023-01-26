import {StyledSubTitlePersonalInformation,StyledTitle,StyledFormButton, StyledSubTitle, Avatar, StyledButton, ButtonGroup, StyledFormArea, ExtraText, StyledSubTitleTransaction, TextLink} from "./../components/Styles";

import React, {Component} from 'react';

//Logo
import logo from "./../assets/logo.PNG";
//formik
import {Form, Formik} from 'formik';
import { TextInput } from "../components/FormLib";
import * as Yup from 'yup';

const data = [
    { from: "Paul Meisner", to: "Nick Spiess", amount: "$0.99", date: "01/22/2022" },
    { from: "Ryan Connor", to: "Nick Spiess", amount: "$100", date: "02/12/2022" },
    { from: "Nick Spiess", to: "Paul Meisner", amount: "$1782", date: "08/15/2022" },

  ]
    

const TransactionHistory = () => {
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
                
            </div>
            <Avatar image={logo} />
            <StyledFormArea> 
        <StyledTitle size={65}>
            Transaction         
        </StyledTitle>
           <StyledSubTitleTransaction>
               History:
           </StyledSubTitleTransaction>

           <table>
           <tr>
          <th>From</th>
          <th>To</th>
          <th>Amount</th>
          <th>Date</th>
        </tr>
        <tr>
          <td>Paul Meisner</td>
          <td>Nick Spiess</td>
          <td>$0.99</td>
          <td>01/22/2022</td>
        </tr>
        <tr>
        <td>Ryan Connor</td>
          <td>Nick Spiess</td>
          <td>$1782</td>
          <td>08/15/2022</td>
        </tr>
        <tr>
        <td>Nick Spiess</td>
          <td>Paul Meisner</td>
          <td>$100</td>
          <td>02/12/2022</td>
        </tr>
           </table>

<ExtraText>
</ExtraText>
<ExtraText>
</ExtraText>
<ExtraText>
</ExtraText>

           <StyledSubTitleTransaction>
               Make Transaction:
           </StyledSubTitleTransaction>

               <Formik

initialValues={{
    from: "",
    cardNumber: "",
    csv: "",
    amount: "",
    to: "",
    cardNumberTo: "",
    reason: "",

    
    



}}
validationSchema={
    Yup.object({
        from: Yup.string("Format: First/Last!").required("Required"),
        cardNumber: Yup.string().required("Required"),
        csv: Yup.string().min(3, "Invalid, must be 3 numbers").max(3, "Invalid, must be 3 number").required("Required"),
        amount: Yup.string().required("Required"),
        to: Yup.string( "Format: First/Last").required("Required"),
        cardNumberTo: Yup.string().required("Required"),
        

    })
}

onSubmit={(values, {setSubmitting})=> {
    console.log(values);
}}
>           

{() => (
    <Form>

        
        <TextInput
        name="from"
        type="text"
        label="From"
        placeholder="Paul Meisner"
       // icon = {<FiHome/>}
        />

        <TextInput
        name="cardNumber"
        type="text"
        label="Card Number"
        placeholder="0000 1111 2222 3333"
       // icon = {<FiHome/>}
        />
        <TextInput
        name="csv"
        type="text"
        label="CSV"
        placeholder="111"
       // icon = {<FiHome/>}
        />
        <TextInput
        name="amount"
        type="text"
        label="Amount"
        placeholder="$100"
       // icon = {<FiHome/>}
        />

        <TextInput
        name="to"
        type="text"
        label="TO"
        placeholder="Nick Spiess"
      //  icon = {<FiHome/>}
        />
        <TextInput
        name="cardNumberTo"
        type="text"
        label="Card Number Recipient "
        placeholder="5555 6666 7777 88888"
       // icon = {<FiHome/>}
        />

       
    <TextInput
        name="reason"
        type="text"
        label="Reason/Comment (Optional)"
        placeholder="Dinner and Beer"
       // icon = {<FiHome/>}
        />



        <ButtonGroup>
           {<StyledFormButton
            type="submit">Make Transaction</StyledFormButton>}
        </ButtonGroup>

        <ExtraText>
          Return to Dashboard? <TextLink to="/dash">Click here!</TextLink>
          </ExtraText>
    </Form>
)}
        </Formik>
               
           
        </StyledFormArea> 
        </div>
        
    );
}

export default TransactionHistory;