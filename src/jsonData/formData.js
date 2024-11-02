export const ReportContentradioOptions = [
  {
    id: 1,
    name: "reportcontent",
    inputType: "radio",
    label: "Select one of these to Report Content ",
    options: ["Harassment", "Rules Violation", "Spam"],
    validation: {
      required: "Please select a report option.",
    },
  },
];

export const contactsupportFormInputFileds = [
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
    name: "number",
    placeholder: "enter your Valid number !",
    type: "text",
    lable: "Contact Number",
    inputType: "text",
    validation: {
      required: "Contact Number is required.",
    },
  },
  {
    id: 4,
    name: "subject",
    placeholder: "enter your enquire Subject !",
    type: "text",
    lable: "Subject",
    inputType: "text",
    validation: {
      required: " enquire Subject is required.",
    },
  },

  {
    id: 5,
    name: "message",
    placeholder: " Write Your message !",
    type: "textarea",
    inputType: "textarea",
    validation: {
      required: "message is required.",
    },
  },
];

export const bannerLinkInput = [
  {
    id: 1,
    name: "bannerLink",
    placeholder: "Enter Banner Link !",
    type: "text",
    lable: "Banner Link",
    inputType: "text",
    validation: {
      required: "Banner Link is required.",
    },
  },
];
