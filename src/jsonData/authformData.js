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

export const forgotPasswordInput = [
  {
    id: 1,
    name: "email",
    placeholder: "Enter your Register E-mail !",
    type: "text",
    inputType: "text",
    validation: {
      required: "Email is required.",
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: "Invalid email address.",
      },
    },
  },
];

export const ResetPasswordInput = [
  {
    id: 1,
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

export const upadteUserPasswordInput = [
  {
    id: 1,
    name: "curentpassword",
    type: "password",
    placeholder: "curent password",
    lable: "Current password",
    inputType: "password",
    validation: {
      required: "Password is required.",
    },
  },

  {
    id: 1,
    name: "newPassword",
    type: "password",
    placeholder: "new Password",
    lable: "New password",
    inputType: "password",
    validation: {
      required: "Name is required.",
    },
  },
];
