import React from 'react'
import ChatBot from 'react-simple-chatbot';
import styled from 'styled-components';
import Supportimg from '../atoms/Support/Supportimg';

const Main=styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
width:99.5vw;
background-color:black;
`
const Support = () => {
  const steps=[
    {
      id: "Greet",
      message: "Hello, Welcome to Apple ,i am zia, your virtual assistant i am here to help you",
      trigger: "Done",
    },
    // {
    //   id: "Done",
    //   message: "Please enter your name!",
    //   trigger: "waiting1",
    // },
    // {
    //   id: "waiting1",
    //   user: true,
    //   trigger: "Name",
    // },
    {
      id: "Done",
      message: "Hi name, Please select your issue",
      trigger: "issues",
    },
    {
      id: "issues",
      options: [
        {
          value: "Forgotten Id and Password", label: "Forgotten Id and Password",trigger: "Forgotten Id and Password" ,
        },
        {
          value: "Billing And Subscription", label: "Billing And Subscription",trigger: "Billing And Subscription" ,
        },
        {
          value: "Apple Repair", label: "Apple Repair",trigger: "Apple Repair" ,
        },
      ],
    },
    {
      id: "Forgotten Id and Password",
      message:
        "click on the link and create a new password",
      trigger: "sending link",
    },
    {
      id: "sending link",
      message:"click here www.applehelpdesk.com",
      end :true,
    },

    {
      id: "Billing And Subscription",
      message:
        "Thanks for letting your React issue, Our team will resolve your issue ASAP",
      end: true,
    },
    {
      id: "Apple Repair",
      message:
        "Thanks for letting your React issue, Our team will resolve your issue ASAP",
      end: true,
    },
    
  ]; 
  return (
    <Main >
    <Supportimg/>
    <div >
     <ChatBot steps={steps}/>
    </div>
    </Main>
  )
}

export default Support