const digitCharacters = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz#$%*+,-.:;=?@[]^_{|}~";

export const decode83 = (str: String) => {
  let value = 0;
  for (let i = 0; i < str.length; i++) {
    const c = str[i];
    const digit = digitCharacters.indexOf(c);
    value = value * 83 + digit;
  }
  return value;
};

export const encode83 = (n: number, length: number): string => {
  let result = "";
  for (let i = 1; i <= length; i++) {
    let digit = (Math.floor(n) / Math.pow(83, length - i)) % 83;
    result += digitCharacters[Math.floor(digit)];
  }
  return result;
};
