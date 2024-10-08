export const userRegistraionInputs = [
  {
    id: 1,
    name: "name",
    placeholder: "enter your name !",
    type: "text",
    lable: "user Name",
    inputType: "text",
    validation: {
      required: "Name is required.",
    },
  },

  {
    id: 2,
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
    id: 3,
    name: "password",
    type: "password",
    placeholder: "password",
    lable: "password",
    inputType: "password",
    validation: {
      required: "Password is required.",
    },
  },
];

export const userLoginInputs = [
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

export const otpInput = [
  {
    id: 1,
    name: "otp",
    placeholder: "Enter Sent OTP !",
    type: "text",
    inputType: "text",
    validation: {
      required: "OTP is required.",
    },
  },
];
