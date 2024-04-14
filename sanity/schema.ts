import { SchemaTypeDefinition } from "sanity";

import author from "./schemaTypes/author";
import blockContent from "./schemaTypes/blockContent";
import category from "./schemaTypes/category";
import { formType } from "./schemaTypes/formType";
import { heroType } from "./schemaTypes/heroType";
import imageGalleryType from "./schemaTypes/imageGallery";
import pageType from "./schemaTypes/pageType";
import post from "./schemaTypes/post";
import projectType from "./schemaTypes/projectType";
import { promotionType } from "./schemaTypes/promotionType";
import textWithIllustrationType from "./schemaTypes/textWithIllu";
import { videoType } from "./schemaTypes/videoType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    post,
    author,
    imageGalleryType,
    category,
    blockContent,
    pageType,
    textWithIllustrationType,
    videoType,
    formType,
    heroType,
    promotionType,
    projectType,
  ],
};
