export const required = (value) => {
  if (value) {
    return undefined;
  } else {
    return "Field is required!";
  }
};

export const maxLengthCreator = (maxLength) => (value) => {
  if (value && value.length > maxLength) {
    return `Max length must be less than ${maxLength} symbols`;
  } else {
    return undefined;
  }
};
