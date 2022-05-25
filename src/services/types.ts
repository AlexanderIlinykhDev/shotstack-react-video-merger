export type LoginFormState = {
  username: string;
  password: string;
};

export type ApiInfo = {
  name: string;
  version: string;
};

export const enum STATUSES {
  initial = 'initial',
  success = 'success',
  fetching = 'fetching',
  failure = 'failure',
}
