import { actionsUser } from "./../features/userSlice";
import { actionsAddTest } from "./../features/addTest";
import { actionsTest } from "./../features/currentTestState";
export const actions = {
  ...actionsTest,
  ...actionsAddTest,
  ...actionsUser,
};
