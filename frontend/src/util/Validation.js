export const validateIsEmpty = (value, identifier) => {
  if (!value || (identifier !== "Image" && ("" + value).trim() === "")) {
    return `${identifier} is required`;
  }
};

export const validateEmail = (value) => {
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (!regex.test(value.trim())) {
    return "Invalid Email";
  }
};

export const validateMobile = (value) => {
  if (value.trim().length !== 10) {
    return "Mobile number must be 10 digits";
  }
};

export const matchedPassword = (password, confirmPassword) => {
  if (password !== confirmPassword) {
    return "Password is not matched.";
  }
};

export const validateContact = (contactNo) => {
  if (contactNo?.length < 10) {
    return "Contactshould be 10 digit.";
  }
};
