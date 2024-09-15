export const createtagInputs = [
  {
    id: 1,
    name: "tagName",
    placeholder: "enter tag name !",
    type: "text",
    inputType: "text",
    validation: {
      required: "Name is required.",
    },
  },
];

export const adminLoginInputs = [
  {
    id: 1,
    name: "email",
    placeholder: "enter your Valid Email address !",
    type: "text",
    lable: "Email",
    inputType: "text",
    validation: {
      required: "Email is required.",
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: "Invalid email address.",
      },
    },
  },

  {
    id: 2,
    name: "password",
    type: "password",
    placeholder: "password",
    lable: "password",
    inputType: "password",
    inputLink: {
      name: "forgot password",
      hrfLink: "forgot-password",
    },
    validation: {
      required: "Password is required.",
    },
  },
];
