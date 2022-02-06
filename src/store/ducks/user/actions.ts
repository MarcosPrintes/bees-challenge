import { action } from 'typesafe-actions';
import { ActionTypesUser, User } from './types';

export const actionLoginRequest = (user: User) =>
  action(ActionTypesUser.USER_LOGIN_SUCCESS, user);

export const actionLoginFail = () => action(ActionTypesUser.USER_LOGIN_FAIL);

export const actionLogout = () => action(ActionTypesUser.USER_LOGOUT);
