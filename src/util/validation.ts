const validate = (val: any, rules: any) => {
  let isValid = true;
  for (let rule in rules) {
    switch (rule) {
      case "notEmpty":
        isValid = isValid && notEmptyValidator(val);
        break;
      default:
        isValid = true;
    }
  }

  return isValid;
};

const notEmptyValidator = (val: string) => {
  return val.trim() !== "";
};

export default validate;
