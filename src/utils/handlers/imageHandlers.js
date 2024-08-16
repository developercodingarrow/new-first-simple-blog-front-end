import {
  genericSingleImageHandler,
  genericSingleImageWithOtherData,
} from "../generichandler/genericImagehandlers";
import {
  UpdateBlogThumblin,
  createBlogWithImg,
} from "@/src/Actions/blogActions/blogAction";

// Handel Update Blog Thumblin
export const handelUploadThumblin =
  genericSingleImageHandler(UpdateBlogThumblin);

// Handel for Image with aditional data
export const handelImageWithAditionalData =
  genericSingleImageWithOtherData(createBlogWithImg);
