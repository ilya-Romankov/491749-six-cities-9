import {regExpForPassword} from '../constant';

export const checkPassword = (password: string) => {
  const regex = new RegExp(regExpForPassword);
  return regex.test(password);
};
