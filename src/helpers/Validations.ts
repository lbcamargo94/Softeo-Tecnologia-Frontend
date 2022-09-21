const REGEX_EMAIL = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

const REGEX_CPF = /^[0-9]{3}.?[0-9]{3}.?[0-9]{3}-?[0-9]{2}$/;

const REGEX_PHONE_NUMBER = /(^[0-9]{2})?(\s|-)?(9?[0-9]{4})-?([0-9]{4}$)/;

export const MAX_LENGTH_NAME = 45;

export const MIN_LENGTH_NAME = 3;

export const emailValidation = (email: string) => {
  const testEmail = REGEX_EMAIL.test(email);
  console.log(testEmail);
  return testEmail;
};

export const cpfValidaion = (cpf: string) => {
  const testCPF = REGEX_CPF.test(cpf);
  console.log(testCPF);
  return testCPF;
};

export const phoneNumberValidation = (phoneNumber: string) => {
  const testPhoneNumber = REGEX_PHONE_NUMBER.test(phoneNumber);
  console.log(testPhoneNumber);
  return testPhoneNumber;
};

export const nameValidation = (fullname: string) => {
  if (fullname.length >= MIN_LENGTH_NAME && fullname.length <= MAX_LENGTH_NAME) {
    return true;
  }
  return false;
};
