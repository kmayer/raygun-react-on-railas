import { HELLO_WORLD_NAME_UPDATE } from "../constants/helloWorldConstants";

const updateName = (state = "", action) => {
  switch (action.type) {
    case HELLO_WORLD_NAME_UPDATE:
      return action.text;
    default:
      return state;
  }
};

export default updateName;
