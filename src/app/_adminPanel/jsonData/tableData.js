export const tableColumns = [
  { label: "S No", key: "_id", component: "checkbox" },
  { label: "Date", key: "updatedAt", component: "dateElement" },
  { label: "Email", key: "email", component: "email" },
  { label: "Status", key: "isVerified", component: "boolean" },
  { label: "View", key: "_id", component: "view" },
];

export const usertableColumns = [
  { label: "S No", key: "_id", component: "number" },
  { label: "user", key: "userImg", component: "userAvator" },
  { label: "Date", key: "updatedAt", component: "dateElement" },
  { label: "Status", key: "isVerified", component: "boolean" },
  { label: "View", key: "_id", component: "view" },
];

export const SuperAdminUserColum = [
  { label: "Email", key: "email", component: "email" },
];

export const tableSampleData = [
  {
    _id: "667659286b30f4e5104fdc82",
    updatedAt: "2024-06-22T04:55:04.371Z",
    status: "active",
    userName: "rohan",
    email: "rohan1@gmail.com",
    slug: "this-is-slug",
  },
  {
    _id: "667659286b30f4e5104fdc82",
    updatedAt: "2024-06-22T04:55:04.371Z",
    status: "active",
    userName: "rohan",
    email: "rohan1@gmail.com",
    slug: "this-is-slug",
  },
  {
    _id: "667659286b30f4e5104fdc82",
    updatedAt: "2024-06-22T04:55:04.371Z",
    status: "active",
    userName: "rohan",
    email: "rohan1@gmail.com",
    slug: "this-is-slug",
  },
  {
    _id: "667659286b30f4e5104fdc82",
    updatedAt: "2024-06-22T04:55:04.371Z",
    status: "active",
    userName: "rohan",
    email: "rohan1@gmail.com",
    slug: "this-is-slug",
  },
  {
    _id: "667659286b30f4e5104fdc82",
    updatedAt: "2024-06-22T04:55:04.371Z",
    status: "active",
    userName: "rohan",
    email: "rohan1@gmail.com",
    slug: "this-is-slug",
  },
  {
    _id: "667659286b30f4e5104fdc82",
    updatedAt: "2024-06-22T04:55:04.371Z",
    status: "active",
    userName: "rohan",
    email: "rohan1@gmail.com",
    slug: "this-is-slug",
  },
  {
    _id: "667659286b30f4e5104fdc82",
    updatedAt: "2024-06-22T04:55:04.371Z",
    status: "active",
    userName: "rohan",
    email: "rohan1@gmail.com",
    slug: "this-is-slug",
  },
  {
    _id: "667659286b30f4e5104fdc82",
    updatedAt: "2024-06-22T04:55:04.371Z",
    status: "active",
    userName: "rohan",
    email: "rohan1@gmail.com",
    slug: "this-is-slug",
  },
  {
    _id: "667659286b30f4e5104fdc82",
    updatedAt: "2024-06-22T04:55:04.371Z",
    status: "active",
    userName: "rohan",
    email: "rohan1@gmail.com",
    slug: "this-is-slug",
  },
];

export const blogtableColumns = [
  { label: "S No", key: "_id", component: "number", icon: "" },
  {
    label: "Thumblinser",
    key: "blogThumblin",
    component: "singleImg",
    icon: "",
  },

  { label: "Title", key: "blogTitle", component: "blodText", icon: "" },
  { label: "Date", key: "updatedAt", component: "dateElement" },
  { label: "status", key: "status", component: "publishedstatus", icon: "" },
  {
    label: "reportContent",
    key: "reportContent",
    component: "multiStatus",
    icon: "",
  },
  {
    label: "views",
    key: "viewCount",
    component: "numberText",
    icon: "icon",
  },
  { label: "View", key: "slug", component: "view", icon: "" },
];

export const superAdminblogColumns = [
  { label: "Featured", key: "featured", component: "boolean", icon: "" },
  {
    label: "Position",
    key: "rankingPoint",
    component: "numberText",
    icon: "icon",
  },
  { label: "switch", key: "featured", component: "booleanSwicth", icon: "" },
];

export const blogsSampleData = [
  {
    _id: "667659286b30f4e5104fdc82",
    updatedAt: "2024-06-22T04:55:04.371Z",
    status: "active",
    imageSrc: "/web-static-img/auther-image.jpg",
    userName: "rohan",
    email: "rohan1@gmail.com",
    slug: "this-is-slug",
  },
];

export const tagtableColumns = [
  { label: "S No", key: "_id", component: "number", icon: "" },
  { label: "Tag Name", key: "tagName", component: "blodText", icon: "" },
  { label: "Date", key: "updatedAt", component: "dateElement" },
  {
    label: "Verification Status",
    key: "Verification",
    component: "boolean",
    icon: "",
  },
  {
    label: "Verification",
    key: "Verification",
    component: "booleanSwicth",
    icon: "",
  },
];

export const SuperAdminColum = [
  { label: "Delete", key: "_id", component: "deleteIcon", icon: "" },
];

export const tagfaturetableColumns = [
  { label: "S No", key: "_id", component: "number", icon: "" },
  { label: "Tag Name", key: "tagName", component: "blodText", icon: "" },
  { label: "Date", key: "updatedAt", component: "dateElement" },
  {
    label: "feature Status",
    key: "featured",
    component: "boolean",
    icon: "",
  },
  {
    label: "Featured",
    key: "featured",
    component: "booleanSwicth",
    icon: "",
  },
];
