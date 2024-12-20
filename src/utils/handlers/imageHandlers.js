import { updateUserProfilePic } from "@/src/app/utils/useraction";
import {
  genericSingleImageHandler,
  genericSingleImageWithOtherData,
  genericImageUplodHandler,
} from "../generichandler/genericImagehandlers";
// import { createBlogWithImg } from "@/src/Actions/blogActions/blogAction";
import { UpdateBlogThumblin } from "@/src/app/utils/blogactions";
import {
  publishedMainBanner,
  publishedSideBanner,
} from "@/src/app/utils/mainBannerAction";

// import { UpdateUserProfilePic } from "@/src/Actions/userActions/userAction";

// Handel Update Blog Thumblin
export const handelUploadThumblin =
  genericSingleImageHandler(UpdateBlogThumblin);

// Handel for Image with aditional data
// export const handelImageWithAditionalData =
//   genericSingleImageWithOtherData(createBlogWithImg);

export const handeluplodUserPic =
  genericImageUplodHandler(updateUserProfilePic);

export const handelcreateMainBanner =
  genericImageUplodHandler(publishedMainBanner);

export const handelcreateSideBanner =
  genericImageUplodHandler(publishedSideBanner);
