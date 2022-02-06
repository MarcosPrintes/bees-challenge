export enum ActionTypesUser {
  USER_LOGIN_SUCCESS = '@user/USER_LOGIN_SUCCESS',
  USER_LOGIN_FAIL = '@user/USER_LOGIN_FAIL',
  USER_LOGOUT = '@user/USER_LOGOUT',
}

export interface User {
  name?: string;
}
