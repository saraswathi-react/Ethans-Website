import React, { useState } from "react";
import ChatBot from "react-simple-chatbot";
import { StyledChat, StyledChatbot } from "./style";
import { IoMdChatbubbles } from "react-icons/io";

const ChatBox = () => {
  const [opentru, setOpentru] = useState(false);

  const handleOpen = () => {
    setOpentru((opentru) => !opentru);
  };

  const handleEnd = ({ steps, values }) => {
    // console.log(steps);
    // console.log(values);
    // alert(`Chat handleEnd callback! Number: ${values[0]}`);
    console.log(steps, values);
  };

  const CustomHeader = () => (
    <div>
      <h1>Chat Header</h1>
      <button>Your Button</button>
    </div>
  );

  const steps = [
    {
      id: "1",
      message: "Hi There! Welcome to Our Website!",
      trigger: "2",
    },
    {
      id: "2",
      message: "What should I call you?",
      trigger: "3",
    },

    {
      id: "3",
      user: true,
      trigger: "4",
    },
    {
      id: "4",
      message: "I am Carrie! Nice to meet you, {previousValue}",
      trigger: "5",
    },

    {
      id: "5",
      message: "I am here to find what you need. What are you looking for?",
      trigger: "6",
    },
    {
      id: "6",
      options: [
        { value: 1, label: "FAQ", trigger: "7" },
        { value: 2, label: "Send Us Email", trigger: "15" },
        {
          value: 3,
          label: "Leave your number. We will call you back!",
          trigger: "20",
        },
      ],
    },

    //faq question

    {
      id: "7",
      message: "Welcome to FAQ Section",
      trigger: "8",
    },
    {
      id: "8",
      options: [
        { value: 1, label: "IS PANCARD COMPLUSORY?", trigger: "9" },
        { value: 2, label: "HOW MANY DAYS WILL IT TAKE TO REGISTER A PRIVATE LIMITED COMPANY", trigger: "11" },
        {
          value: 3,
          label: "WHAT IS THE COST OF REGISTERING A PRIVATE LIMITED COMPANY",
          trigger: "12",
        },
        {
          value: 4,
          label: "DO THE SHAREHOLDERS HAVE TO BE PHYSICALLY BE PRESENT FOR REGISTERATION?",
          trigger: "13",
        },
        {
          value: 5,
          label: "CAN AN NRI START A COMPANY IN INDIA",
          trigger: "14",
        },
        {
          value: 6,
          label: "Back to Start",
          trigger: "5",
        },
      ],
    },
    {
      id: "9",
      message: "Except for Foreign Nationals, all the other person pan card is compulsory. Even DSC cannot be applied without pan card",
      trigger: "10",
    },
    {
      id: "10",
      message: "You may choose option from below.",
      trigger: "6",
    },
    {
      id: "11",
      message: "If all documents are in order, it takes 10 to 15 days to register a Private Limited Company",
      trigger: "10",
    },
    {
      id: "12",
      message: "The Cost to register a Private Limited Company in India/ Registration of Pvt Ltd Company would vary from INR 6,000/- to INR 30,000/- depending upon the No. of Directors, No. of members, authorized share capital and Professional fees. Professional fees may depend upon the complexity of the task. A private limited company requires to have and maintain a minimum paid-up capital of Rs. 1 lakh. It could go higher, as prescribed by MCA from time to time.",
      trigger: "10",
    },
    {
      id: "13",
      message: "No. All the documents and filing are done through online. Also, the signature of documents and forms are done digitally. Hence, the shareholder need not be present at the time of registration.",
      trigger: "10",
    },
    {
      id: "14",
      message: "YES",
      trigger: "10",
    },

    //send as email
   
    {
      id: "15",
      message: "Hi There! Amigo! Please provide your email address",
      trigger: "16",
    },
    {
      id: '16',
      user: true,
      validator: (value) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
          return 'Please enter a valid email address';
        }
        return true;
      },
      trigger: '17',
    },
    {
      id: '17',
      message: 'Thank you for email address. Please write your message now.',
      trigger: '18',
    },
    {
      id: "18",
      user: true,
      // trigger: "19",
      end: true,
    },
    {
      id: '19',
      message: 'Sorry! I could not send your mail! Please contact the webmaster.',
      trigger: '10',
    },
    {
      id: "20",
      message: "Hello Amigo! Please provide your Phone number",
      trigger: "21",
    },
    {
      id: "21",
      user: true,
      // trigger: "22",
      end: true,
    },
    {
      id: '22',
      message: 'Sorry! I could not collect your phone number!',
      trigger: '10',
    },

  ];

  return (
    <div>
      <StyledChatbot onClick={handleOpen}>
        <IoMdChatbubbles />
      </StyledChatbot>
      <StyledChat>
        {opentru && (
          <ChatBot
          handleEnd={handleEnd}
            steps={steps}
          />
        )}
      </StyledChat>
    </div>
  );
};

export default ChatBox;
