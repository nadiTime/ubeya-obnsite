import styles from "./ChatBox.module.scss";

const ChatBox = ({ user, message, time }) => {
  return (
    <div className={styles.ChatBox}>
      <h3>{user}</h3>
      <p>{message}</p>
      <span>{time}</span>
    </div>
  );
};

export default ChatBox;
