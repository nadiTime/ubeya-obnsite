import { useState } from "react";

import { addToChat } from "../../actions/chatActions";
import { useDispatch, useSelector } from "react-redux";

import styles from "./ChatContainer.module.scss";

import ChatBox from "../../components/ChatBox/ChatBox";

const ChatContainer = () => {
  const [currUser, setCurrUser] = useState("Nadav");
  const [inputMessage, setInputMessage] = useState("");

  const dispatch = useDispatch();
  const chat = useSelector(state => state.chat);
  const { messages } = chat;

  const addToMessages = e => {
    e.preventDefault();
    dispatch(addToChat(currUser, inputMessage));
    if (currUser === "Nadav") {
      setCurrUser("Yuval");
    } else {
      setCurrUser("Nadav");
    }
  };

  return (
    <div className={styles.ChatContainer}>
      <h1>Ubeya Chat</h1>
      <div className={styles.MessagesView}>
        {messages.length === 0 ? (
          <p>Let's start a new chat</p>
        ) : (
          messages.map((message, index) => <ChatBox key={index} {...message} />)
        )}
      </div>
      <form onSubmit={addToMessages}>
        <div className={styles.formGroup}>
          <input type="text" onChange={e => setInputMessage(e.target.value)} />
          <input type="submit" value="Send" />
        </div>
      </form>
    </div>
  );
};

export default ChatContainer;
