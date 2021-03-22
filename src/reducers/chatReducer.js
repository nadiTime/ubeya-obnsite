import { CHAT_ADD_MESSAGE } from "../constants/chatConstants";

export const chatConvReducer = (state = { messages: [] }, action) => {
  switch (action.type) {
    case CHAT_ADD_MESSAGE:
      const { addToUser, messageFromUser, messageTime } = action.payload;
      return {
        messages: [
          ...state.messages,
          { user: addToUser, message: messageFromUser, time: messageTime },
        ],
      };
    default:
      return state;
  }
};
