const getNationalCodeCheckDigit = (digits: number[]) => {
  const sum = digits.reduce((total, digit, index) => total + digit * (10 - index), 0);
  const remainder = sum % 11;
  return remainder < 2 ? remainder : 11 - remainder;
};

const generateNationalCode = (): string => {
  let digits: number[];

  do {
    digits = Array.from({ length: 9 }, () => Math.floor(Math.random() * 10));
  } while (digits.every((digit) => digit === digits[0]));

  return [...digits, getNationalCodeCheckDigit(digits)].join("");
};

const generateRoundNationalCode = (): string => {
  let digits: number[];

  do {
    digits = [];
    let previous = 10;
    for (let index = 0; index < 9; index++) {
      previous = Math.floor(Math.random() * Math.max(previous, 2));
      digits.push(previous);
    }
  } while (digits.every((digit) => digit === digits[0]));

  return [...digits, getNationalCodeCheckDigit(digits)].join("");
};

const isValidNationalCode = (code: string): boolean => {
  if (!/^\d{10}$/.test(code) || /^(\d)\1{9}$/.test(code)) {
    return false;
  }

  const digits = code.split("").map(Number);
  return getNationalCodeCheckDigit(digits.slice(0, 9)) === digits[9];
};

export {
  generateNationalCode,
  generateRoundNationalCode,
  isValidNationalCode,
};
