import updateName from "./helloWorldReducer";
import { HELLO_WORLD_NAME_UPDATE } from "../constants/helloWorldConstants";

test("responds to the action", () => {
  const action = { type: HELLO_WORLD_NAME_UPDATE, text: "Hello, world." };

  expect(updateName("", action)).toBe("Hello, world.");
});
