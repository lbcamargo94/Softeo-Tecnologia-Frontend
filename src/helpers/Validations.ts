const REGEX_EMAIL = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

const REGEX_CPF = /^[0-9]{3}.?[0-9]{3}.?[0-9]{3}-?[0-9]{2}$/;

const REGEX_PHONE_NUMBER = /(^[0-9]{2})?(\s|-)?(9?[0-9]{4})-?([0-9]{4}$)/;

const REGEX_FULL_NAME = /^[A-Z][a-z].* [A-Z][a-z].*$/;

export const emailValidation = (email: string) => {
  const testEmail = REGEX_EMAIL.test(email);
  return testEmail;
};

export const cpfValidaion = (cpf: string) => {
  const testCPF = REGEX_CPF.test(cpf);
  return testCPF;
};

export const phoneNumberValidation = (phoneNumber: string) => {
  const testPhoneNumber = REGEX_PHONE_NUMBER.test(phoneNumber);
  return testPhoneNumber;
};

export const nameValidation = (fullName: string) => {
  const testFullName = REGEX_FULL_NAME.test(fullName);
  return testFullName;
};
