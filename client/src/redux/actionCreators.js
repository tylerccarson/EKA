import { SET_USER_ID } from './actions';

export function setUserId(userId: number) {
  return { type: SET_USER_ID, payload: userId };
}