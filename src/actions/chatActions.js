import { CHAT_ADD_MESSAGE } from "../constants/chatConstants";

export const addToChat = (username, message) => async dispatch => {
  dispatch({
    type: CHAT_ADD_MESSAGE,
    payload: {
      addToUser: username,
      messageFromUser: message,
      messageTime: Date.now(),
    },
  });
};
